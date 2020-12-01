import { Platform, NativeModules } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import I18n from 'i18n-js';
import en from './en-US';
import pt from './pt-BR';
import es from './es-ES';

const normalizeTranslate = {
  en_US: 'en_US',
  pt_BR: 'pt_BR',
  en: 'en_US',
  pt_US: 'pt_BR',
  es: 'es_ES',
  es_ES: 'es_ES',
  es_US: 'es_ES',
  en_ES: 'es_ES',
  es_LA: 'es_ES',
};

const getLanguageByDevice = () => {
  return Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;
};

I18n.translations = {
  en_US: en,
  pt_BR: pt,
  es_ES: es,
};

const getLanguage = async () => {
  const language = await AsyncStorage.getItem('@lang');

  const iHaveThisLanguage = I18n.translations.hasOwnProperty(language);

  if (iHaveThisLanguage) {
    I18n.locale = language;
  } else {
    I18n.defaultLocale = getLanguageByDevice();
  }
};

const setLanguageToI18n = async (newLanguage) => {
  if (newLanguage) {
    const translateNormalize = normalizeTranslate[newLanguage];

    await AsyncStorage.setItem('@lang', translateNormalize);

    return NativeModules.DevSettings.reload();
  }

  getLanguage();
};

setLanguageToI18n();

export const translate = (key) => I18n.t(key);
export { setLanguageToI18n };
