<template>
  <div class="app">
    <header class="header">
      <div class="container header-inner">
        <router-link to="/" class="logo">
          <svg class="logo-icon" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="6" fill="#10b981"/>
            <path d="M8 22V10l8 6-8 6ZM18 22V10l8 6-8 6Z" fill="#fff"/>
          </svg>
          <span>GoGoGo</span>
        </router-link>
        <nav class="nav">
          <router-link to="/" class="nav-link" active-class="active">首页</router-link>
          <router-link to="/about" class="nav-link" active-class="active">关于</router-link>
        </nav>
      </div>
    </header>
    <main class="main">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer class="footer">
      <div class="container">
        <p>&copy; 2026 GoGoGo. Built with Vue + Vite.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text) !important;
}

.logo-icon {
  width: 28px;
  height: 28px;
}

.nav {
  display: flex;
  gap: 8px;
}

.nav-link {
  padding: 8px 16px;
  border-radius: 8px;
  color: var(--color-text-muted);
  font-weight: 500;
  transition: all 0.2s;
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-text);
  background: var(--color-surface);
}

.main {
  flex: 1;
}

.footer {
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  text-align: center;
  padding: 24px 0;
  color: var(--color-text-muted);
  font-size: 0.875rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
