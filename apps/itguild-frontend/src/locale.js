import { I18nProvider as Provider } from '@lingui/react';
import { i18n as i18nLingui } from '@lingui/core';
import { en, ru, uk } from 'make-plural/plurals';

i18nLingui.loadLocaleData('en', { plurals: en });
i18nLingui.loadLocaleData('ru', { plurals: ru });
i18nLingui.loadLocaleData('uk', { plurals: uk });

export async function setLocale(locale = 'en') {
  const { messages } = await import(`./locales/${locale}/messages.js`);

  i18nLingui.load(locale, messages);
  i18nLingui.activate(locale);
}

export const i18n = i18nLingui;
export const I18nProvider = Provider;

const locale = {
  i18n,
  I18nProvider,
  setLocale,
};

export default locale;
