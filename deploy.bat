@echo off
REM Windows下的GitHub Pages部署脚本

echo 正在部署到GitHub Pages...

REM 1. 检查并提交更改
echo 检查未提交的更改...
git add .
git commit -m "deploy: 更新部署"

REM 2. 构建项目
echo 正在构建项目...
call npm run build
if errorlevel 1 (
    echo 构建失败！
    pause
    exit /b 1
)

REM 3. 创建并切换到gh-pages分支
git checkout -b gh-pages 2>nul || git checkout gh-pages

REM 4. 复制构建文件
echo 复制构建文件...
if exist out rmdir /s /q out
call npm run export

REM 5. 添加文件到gh-pages分支
git add out/ -f
git commit -m "deploy: 更新GitHub Pages"

REM 6. 推送到GitHub
echo 推送到GitHub...
git push origin gh-pages --force

REM 7. 返回主分支
git checkout master

echo.
echo =====================================
echo ✅ 部署完成！
echo 📍 访问地址：https://[你的用户名].github.io/three-rural-activities
echo 📖 等待2-3分钟让GitHub Pages生效
echo =====================================

pause