# 使用GitHub Pages部署Next.js的完整指南

## 自动部署步骤：

1. **推送代码到GitHub**
   git add .
   git commit -m "feat: 添加GitHub Pages部署配置"
   git push origin master

2. **在GitHub仓库设置中启用GitHub Pages**
   - 进入仓库 Settings > Pages
   - 选择 Source: GitHub Actions
   - 工作流会自动运行

3. **访问地址**
   部署完成后访问：
   https://[你的用户名].github.io/three-rural-activities

## 手动部署步骤：

1. **本地构建**
   npm run build
   npm run export

2. **推送out文件夹**
   git add out/ -f
   git commit -m "deploy: 添加静态构建文件"
   git subtree push --prefix out origin gh-pages

## 项目特性：
- ✅ Next.js 15 静态导出
- ✅ 皖南家风展示馆首页
- ✅ 六大名门家训导航
- ✅ 徽派建筑美学设计
- ✅ 响应式布局
- ✅ 300ms平滑过渡动画

## 技术栈：
- Next.js 15 + TypeScript
- Tailwind CSS
- shadcn/ui
- 静态网站生成(SSG)
- GitHub Pages免费托管