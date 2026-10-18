const headers = require('./config/headers');

module.exports = {
  headers,
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
