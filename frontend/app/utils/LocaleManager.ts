import translations from '../../public/translations.json';

const localeManager = {

  selectedLocale: 'SI',
  translations: translations as Record<string, Record<string, string>>,

  setLocale(locale: string) {
    this.selectedLocale = locale;
  },

  getLocale() {
    return this.selectedLocale;
  },

  getStr(str: string) {
    // Check if the translation exists
    if (this.translations[str] && this.translations[str][this.selectedLocale]) {
      return this.translations[str][this.selectedLocale];
    }

    return str;
  }
};

const getLocaleStr = (str: string) => {
  return localeManager.getStr(str);
};

export default localeManager;
export { getLocaleStr };
