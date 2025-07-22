#!/bin/bash
# GitHub Pages部署脚本

echo "🚀 开始部署到GitHub Pages..."

# 1. 检查是否有未提交的更改
if [[ -n $(git status -s) ]]; then
    echo "📦 发现未提交的更改，正在提交..."
    git add .
    git commit -m "deploy: 更新部署前提交"
fi

# 2. 构建项目
echo "🔨 正在构建项目..."
npm run build

# 3. 创建gh-pages分支（如果不存在）
git checkout -b gh-pages 2>/dev/null || git checkout gh-pages
git pull origin gh-pages 2>/dev/null || echo "gh-pages分支不存在，创建新的"

# 4. 复制构建文件
echo "📁 复制构建文件..."
rm -rf out/ 2>/dev/null
npm run export

# 5. 添加构建文件到gh-pages分支
git add out/ -f
git commit -m "deploy: 更新GitHub Pages静态文件"

# 6. 推送到gh-pages分支
echo "🚀 推送到gh-pages分支..."
git push origin gh-pages --force

# 7. 返回主分支
git checkout master

echo "✅ 部署完成！"
echo "📍 访问地址：https://[你的用户名].github.io/three-rural-activities"
echo "📖 等待GitHub Pages构建完成（约2-3分钟）"