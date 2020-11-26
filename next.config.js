const { locales, defaultLocale } = require('./i18n.json');
const withImages = require('next-images');

module.exports = withImages({
  i18n: {
    locales,
    defaultLocale,
  },
});
