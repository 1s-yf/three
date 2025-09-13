/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // 检测部署环境
  basePath: process.env.VERCEL_URL ? '' : process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.VERCEL_URL ? '' : process.env.NEXT_PUBLIC_BASE_PATH || '',
  // 确保静态资源正确加载
  trailingSlash: true,
  // 确保输出格式正确
  output: 'standalone',
}

module.exports = nextConfig
