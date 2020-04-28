import React, { useEffect, useState } from 'react';
import { withTranslation } from './i18n';
import { WithTranslation } from 'next-i18next';

import { LANGS } from './constants';
import { LangContext } from './context/lang';

type OwnProps = {
  lang: string;
};

type Props = WithTranslation & OwnProps;

const IntlWrapper: React.FC<Props> = ({children, lang: pathLang, i18n}) => {
  const [lang, setLang] = useState(LANGS.en.lang);
  useEffect(() => {
    const langObject = LANGS[pathLang];
    if (langObject) {
      i18n.changeLanguage(langObject.lang).then(() => setLang(langObject.lang));
    }
  }, [pathLang, i18n]);

  return (
    <LangContext.Provider value={lang}>
      {children}
    </LangContext.Provider>
  )
};

export default withTranslation()(IntlWrapper);
