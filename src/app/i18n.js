const NextI18Next = require('next-i18next').default;
const LOCALE_PATH = 'locales';
const basePath = process.env.NODE_ENV === 'production' ? '.' : './src/app';

const NextI18NextInstance = new NextI18Next({
  localePath: `${basePath}/${LOCALE_PATH}`,
  defaultLanguage: 'en',
  otherLanguages: ['uk']
});

module.exports = NextI18NextInstance
