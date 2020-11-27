const { locales, defaultLocale } = require('./i18n.json');
const withImages = require('next-images');
const withPWA = require('next-pwa');

module.exports = withPWA(
  withImages({
    pwa: {
      disable: process.env.NODE_ENV === 'development',
      dest: 'public',
    },
    i18n: {
      locales,
      defaultLocale,
    },
  })
);
