const { locales, defaultLocale } = require('./i18n.json');
const withImages = require('next-images');
const withPWA = require('next-pwa');
const nextTranslate = require('next-translate')

module.exports = nextTranslate(withPWA(
  withImages({
    future: {
      webpack5: true,
    },
    pwa: {
      disable: process.env.NODE_ENV === 'development',
      dest: 'public',
    },
    i18n: {
      locales,
      defaultLocale,
    },
  })
));
