import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core';
import { USflag, UAflag } from './components/icons';
import { AppLang } from './types';

type Langs = {
  [key: string]: {
    lang: AppLang;
    nextLang: AppLang;
    flagIcon: OverridableComponent<SvgIconTypeMap>;
  };
};
export const LANGS: Langs = {
  en: {
    lang: 'en',
    nextLang: 'uk',
    flagIcon: USflag,
  },
  uk: {
    lang: 'uk',
    nextLang: 'en',
    flagIcon: UAflag,
  },
};
