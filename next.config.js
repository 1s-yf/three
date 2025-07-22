/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/three-rural-activities',
  assetPrefix: '/three-rural-activities',
  distDir: 'out',
}

module.exports = nextConfig