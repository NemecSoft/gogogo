<template>
  <div class="about">
    <div class="container">
      <h1 class="page-title">关于 GoGoGo</h1>
      <p class="page-desc">一个轻量级的 Vue + Vite 起始模板，专为 GitHub Pages 部署优化。</p>

      <div class="info-grid">
        <div class="info-card">
          <h3>📦 项目结构</h3>
          <pre class="tree">
gogogo/
├── public/          # 静态资源
├── src/
│   ├── views/       # 页面组件
│   ├── router/      # 路由配置
│   ├── App.vue      # 根组件
│   ├── main.js      # 入口文件
│   └── style.css    # 全局样式
├── index.html       # HTML 模板
├── vite.config.js   # Vite 配置
└── package.json     # 依赖管理
          </pre>
        </div>

        <div class="info-card">
          <h3>🚀 快速开始</h3>
          <ol class="steps">
            <li><code>npm install</code> — 安装依赖</li>
            <li><code>npm run dev</code> — 启动开发服务器</li>
            <li><code>npm run build</code> — 构建生产版本</li>
            <li><code>npm run deploy</code> — 部署到 GitHub Pages</li>
          </ol>
        </div>

        <div class="info-card">
          <h3>🔧 GitHub Pages 部署</h3>
          <p>本项目使用 <code>gh-pages</code> 自动部署。只需运行：</p>
          <pre class="code">npm run deploy</pre>
          <p class="note">
            部署前请确保仓库已关联远程 GitHub 仓库。
          </p>
        </div>

        <div class="info-card">
          <h3>📄 许可证</h3>
          <p>MIT License — 自由使用、修改和分发。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  padding: 80px 24px;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 12px;
}

.page-desc {
  color: var(--color-text-muted);
  font-size: 1.1rem;
  margin-bottom: 48px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.info-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 28px;
}

.info-card h3 {
  font-size: 1.15rem;
  margin-bottom: 16px;
}

.tree {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 16px;
  font-family: 'Fira Code', 'Cascadia Code', monospace;
  font-size: 0.85rem;
  line-height: 1.8;
  color: var(--color-text-muted);
  overflow-x: auto;
}

.steps {
  padding-left: 20px;
}

.steps li {
  margin-bottom: 8px;
  color: var(--color-text-muted);
}

.steps li code {
  color: var(--color-primary);
  background: rgba(16, 185, 129, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9rem;
}

.code {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 12px 16px;
  font-family: 'Fira Code', monospace;
  color: var(--color-primary);
  margin: 12px 0;
  font-size: 0.9rem;
}

.note {
  color: var(--color-text-muted);
  font-size: 0.85rem;
  margin-top: 8px;
}

.info-card p {
  color: var(--color-text-muted);
  line-height: 1.8;
}

.info-card code {
  color: var(--color-primary);
  background: rgba(16, 185, 129, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
}
</style>
