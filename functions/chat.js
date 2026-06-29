const users = new Map()
const messages = []
const MAX_MESSAGES = 100

const adjectives = ['快乐的', '神秘的', '勇敢的', '聪明的', '可爱的', '调皮的', '安静的', '活泼的', '温柔的', '酷的', '优雅的', '幽默的', '善良的', '热情的', '浪漫的', '阳光的', '梦幻的', '闪亮的', '飞翔的', '奔跑的']
const animals = ['小猫', '小狗', '兔子', '熊猫', '企鹅', '考拉', '狐狸', '松鼠', '海豚', '鲸鱼', '小鸟', '蝴蝶', '蜜蜂', '小鹿', '小熊', '老虎', '狮子', '大象', '长颈鹿', '斑马']

function generateName() {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)]
  const animal = animals[Math.floor(Math.random() * animals.length)]
  return adj + animal
}

function generateId() {
  return Math.random().toString(36).substring(2, 9)
}

function broadcast(message, excludeUserId = null) {
  for (const [id, { ws }] of users) {
    if (id !== excludeUserId && ws.readyState === WebSocket.OPEN) {
      ws.send(message)
    }
  }
}

export async function onRequest(context) {
  const { request } = context
  
  const upgradeHeader = request.headers.get('Upgrade')
  if (upgradeHeader === 'websocket') {
    const [client, server] = Object.values(new WebSocketPair())
    
    const userId = generateId()
    const userName = generateName()
    
    users.set(userId, { ws: server, name: userName })
    
    server.onopen = () => {
      const joinMessage = {
        type: 'system',
        content: `${userName} 加入了聊天室`,
        timestamp: Date.now()
      }
      messages.push(joinMessage)
      if (messages.length > MAX_MESSAGES) messages.shift()
      
      server.send(JSON.stringify({
        type: 'init',
        userId,
        userName,
        messages: messages.slice(-20)
      }))
      
      broadcast(JSON.stringify(joinMessage), userId)
    }
    
    server.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        if (data.type === 'message' && data.content) {
          const message = {
            type: 'message',
            userId,
            userName,
            content: data.content.trim(),
            timestamp: Date.now()
          }
          messages.push(message)
          if (messages.length > MAX_MESSAGES) messages.shift()
          broadcast(JSON.stringify(message))
        }
      } catch (e) {
        console.error('Message parse error:', e)
      }
    }
    
    server.onclose = () => {
      users.delete(userId)
      const leaveMessage = {
        type: 'system',
        content: `${userName} 离开了聊天室`,
        timestamp: Date.now()
      }
      messages.push(leaveMessage)
      if (messages.length > MAX_MESSAGES) messages.shift()
      broadcast(JSON.stringify(leaveMessage))
    }
    
    server.onerror = () => {
      users.delete(userId)
    }
    
    return new Response(null, {
      status: 101,
      webSocket: client
    })
  }
  
  return new Response('WebSocket server', { status: 200 })
}