module.exports = {
  i18n: {
    // locales: ['en-us', 'ta-in', 'hi-in', 'kn-in'],
    locales: [
      "en-us",
      "hi-in",
      "gu-in",
      "ml-in",
      "kn-in",
      "pa-in",
      "te-in",
      "bn-in",
      "ta-in",
      "mr-in",
    ],
    defaultLocale: "en-us",
  },
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/',
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/check_availability',
        permanent: true,
      },
    ]
  },
};
