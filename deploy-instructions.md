# 三下乡网站部署指南

## 方法1：Vercel拖拽部署（最简单）

1. 访问 [vercel.com](https://vercel.com)
2. 用GitHub账号登录
3. 点击 "New Project"
4. 选择 "Upload"
5. 拖拽整个 `three-rural-activities` 文件夹到上传区域
6. 等待部署完成，会获得类似 `https://three-rural-activities.vercel.app` 的链接

## 方法2：GitHub + Vercel自动部署

1. **创建GitHub仓库**
   - 访问 [github.com/new](https://github.com/new)
   - 仓库名：`three-rural-activities`
   - 设为Public
   - 不要勾选README

2. **推送代码到GitHub**
   ```bash
   # 在终端执行以下命令（替换YOUR_USERNAME为你的GitHub用户名）
   git remote add origin https://github.com/YOUR_USERNAME/three-rural-activities.git
   git branch -M main
   git push -u origin main
   ```

3. **连接Vercel**
   - 登录 [vercel.com](https://vercel.com)
   - 点击 "New Project"
   - 选择刚创建的GitHub仓库
   - 点击 "Deploy"

## 方法3：Netlify拖拽部署

1. 访问 [netlify.com](https://netlify.com)
2. 拖拽整个项目文件夹到部署区域
3. 自动获得访问链接

## 获得的可访问链接格式

部署成功后，你会获得类似：
- Vercel: `https://three-rural-activities.vercel.app`
- Netlify: `https://amazing-name.netlify.app`

将生成的链接发给他人即可访问！