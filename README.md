# GoGoGo

基于 **Vue 3 + Vite** 构建的现代化前端网站，支持一键部署到 **GitHub Pages**。

## 技术栈

- ⚡ Vite — 极速构建工具
- 🎨 Vue 3 — 组合式 API
- 🛣️ Vue Router — 前端路由
- 🚀 GitHub Pages — 免费托管

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 部署到 GitHub Pages

1. 在 GitHub 创建一个仓库（如 `gogogo`）
2. 关联远程仓库：

```bash
git init
git add .
git commit -m "init"
git remote add origin https://github.com/YOUR_USER/gogogo.git
git push -u origin main
```

3. 一键部署：

```bash
npm run deploy
```

部署后，网站将可通过 `https://YOUR_USER.github.io/gogogo/` 访问。

> **提示**：`vite.config.js` 中的 `base` 已设为 `'/gogogo/'`，如果你的仓库名不同，请对应修改。
