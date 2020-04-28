import { LANGS } from './constants';

export const getLangFromRoute = (route?: string) => Object.keys(LANGS).find(key => LANGS[key].route === route);
