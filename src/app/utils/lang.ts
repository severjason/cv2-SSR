import { LANGS } from '../constants';

export const routToLang = (route?: string) => Object.keys(LANGS).find(key => LANGS[key].route === route);
