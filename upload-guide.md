# 分批上传指南

## 第一批：核心配置文件（8个文件）
- package.json
- package-lock.json
- README.md
- tsconfig.json
- next.config.ts
- eslint.config.mjs
- postcss.config.mjs
- components.json

## 第二批：全局样式和布局（3个文件）
- src/app/globals.css
- src/app/layout.tsx
- src/app/page.tsx

## 第三批：主要组件（9个文件）
- src/components/navigation.tsx
- src/components/hero.tsx
- src/components/about.tsx
- src/components/gallery.tsx
- src/components/videos.tsx
- src/components/timeline.tsx
- src/components/reflections.tsx
- src/components/contact.tsx
- src/components/footer.tsx

## 第四批：公共资源（6个文件）
- public/
- src/app/favicon.ico

## 上传步骤：
1. 访问 https://github.com/GoEASTwest/three-rural-activities
2. 点击 "Upload files"
3. 按批次拖拽文件（每次<100个）
4. 等待上传完成后继续下一批

## 验证：
上传完成后，项目应该能在GitHub上正常浏览和下载。