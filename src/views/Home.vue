<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <h1 class="hero-title">
          <span class="gradient-text">GoGoGo</span>
          <br />探索无限可能
        </h1>
        <p class="hero-desc">
          基于 Vue 3 + Vite 构建的现代化前端项目，轻量、快速、易于部署。
        </p>
        <div class="hero-actions">
          <router-link to="/about" class="btn btn-primary">了解更多</router-link>
          <a href="https://github.com" target="_blank" class="btn btn-outline">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <h2 class="section-title">技术栈</h2>
        <div class="features-grid">
          <div class="feature-card" v-for="item in features" :key="item.title">
            <div class="feature-icon">{{ item.icon }}</div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <h2>准备好开始了吗？</h2>
        <p>克隆项目，安装依赖，一键部署到 GitHub Pages。</p>
        <div class="code-block">
          <code>git clone https://github.com/YOUR_USER/gogogo.git</code>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const features = [
  {
    icon: '⚡',
    title: 'Vite',
    desc: '极速的构建工具，秒级热更新，开箱即用的开发体验。',
  },
  {
    icon: '🎨',
    title: 'Vue 3',
    desc: '组合式 API，响应式数据，更灵活的组件化开发。',
  },
  {
    icon: '🛣️',
    title: 'Vue Router',
    desc: '官方路由管理，支持动态路由、嵌套路由、导航守卫。',
  },
  {
    icon: '🚀',
    title: 'GitHub Pages',
    desc: '免费托管，自动部署，push 代码即可更新网站。',
  },
]
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 120px 24px 80px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 24px;
}

.gradient-text {
  background: linear-gradient(135deg, #10b981, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-desc {
  font-size: 1.2rem;
  color: var(--color-text-muted);
  max-width: 560px;
  margin: 0 auto 40px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.25s;
}

.btn-primary {
  background: var(--color-primary);
  color: #fff;
}

.btn-primary:hover {
  background: var(--color-primary-hover);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.35);
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--color-border);
  color: var(--color-text);
}

.btn-outline:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  transform: translateY(-2px);
}

.btn-icon {
  width: 20px;
  height: 20px;
}

.features {
  padding: 80px 24px;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 48px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.feature-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  transition: all 0.3s;
}

.feature-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.feature-card h3 {
  font-size: 1.2rem;
  margin-bottom: 8px;
}

.feature-card p {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.7;
}

.cta {
  text-align: center;
  padding: 80px 24px;
}

.cta h2 {
  font-size: 2rem;
  margin-bottom: 12px;
}

.cta p {
  color: var(--color-text-muted);
  margin-bottom: 24px;
}

.code-block {
  display: inline-block;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 0.9rem;
}

.code-block code {
  color: var(--color-primary);
  font-family: 'Fira Code', 'Cascadia Code', monospace;
}
</style>
