<template>
  <div class="chat-container">
    <header class="chat-header">
      <h1>GoGoGo 聊天室</h1>
      <div class="user-info">
        <span class="user-badge">{{ userName }}</span>
        <span :class="['status', connected ? 'online' : 'offline']">
          {{ connected ? '在线' : '离线' }}
        </span>
      </div>
    </header>

    <main class="chat-messages" ref="messagesContainer">
      <div v-for="(msg, index) in messages" :key="index" :class="['message', msg.type]">
        <template v-if="msg.type === 'system'">
          <div class="system-message">{{ msg.content }}</div>
        </template>
        <template v-else>
          <div :class="['message-content', msg.userId === userId ? 'self' : 'other']">
            <div class="message-header">
              <span class="sender-name">{{ msg.userName }}</span>
              <span class="message-time">{{ formatTime(msg.timestamp) }}</span>
            </div>
            <div class="message-body">{{ msg.content }}</div>
          </div>
        </template>
      </div>
    </main>

    <footer class="chat-footer">
      <input
        v-model="inputMessage"
        @keyup.enter="sendMessage"
        type="text"
        placeholder="输入消息..."
        class="message-input"
        :disabled="!connected"
      />
      <button @click="sendMessage" :disabled="!connected || !inputMessage.trim()" class="send-button">
        发送
      </button>
    </footer>
  </div>
</template>

<script setup>import { ref, onMounted, onUnmounted, nextTick } from 'vue';
const messages = ref([]);
const inputMessage = ref('');
const userId = ref('');
const userName = ref('');
const connected = ref(false);
const messagesContainer = ref(null);
let ws = null;
const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
const workerUrl = `${protocol}//${window.location.host}/chat`;
function connect() {
 try {
 ws = new WebSocket(workerUrl);
 ws.onopen = () => {
 connected.value = true;
 console.log('WebSocket connected');
 };
 ws.onmessage = (event) => {
 const data = JSON.parse(event.data);
 if (data.type === 'init') {
 userId.value = data.userId;
 userName.value = data.userName;
 messages.value = data.messages;
 }
 else {
 messages.value.push(data);
 }
 nextTick(() => scrollToBottom());
 };
 ws.onclose = () => {
 connected.value = false;
 console.log('WebSocket closed');
 setTimeout(connect, 3000);
 };
 ws.onerror = () => {
 connected.value = false;
 console.log('WebSocket error');
 };
 }
 catch (e) {
 console.error('WebSocket connection failed:', e);
 setTimeout(connect, 3000);
 }
}
function sendMessage() {
 if (!inputMessage.value.trim() || !connected.value)
 return;
 ws.send(JSON.stringify({
 type: 'message',
 content: inputMessage.value.trim()
 }));
 inputMessage.value = '';
}
function scrollToBottom() {
 if (messagesContainer.value) {
 messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
 }
}
function formatTime(timestamp) {
 const date = new Date(timestamp);
 return date.toLocaleTimeString('zh-CN', {
 hour: '2-digit',
 minute: '2-digit',
 second: '2-digit'
 });
}
onMounted(() => {
 connect();
});
onUnmounted(() => {
 if (ws) {
 ws.close();
 }
});
</script>