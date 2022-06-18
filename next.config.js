/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/' : '',
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
