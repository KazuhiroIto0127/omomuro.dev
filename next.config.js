const headers = require('./config/headers');

module.exports = {
  headers,
  experimental: {
    // 日本語・英語でルートレイアウトが分かれているため、404 は app/global-not-found.tsx で出す
    globalNotFound: true,
  },
  async redirects() {
    return [
      { source: '/works', destination: '/', permanent: true },
      { source: '/labs', destination: '/', permanent: true },
      { source: '/labs/:id', destination: '/', permanent: true },
      { source: '/gallery', destination: '/about#gallery', permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
