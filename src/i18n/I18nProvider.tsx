import React, { useState } from 'react';
import I18nContext, { I18nContextProps } from './I18nContext';

type I18nProviderProps = {
  locales: string[],
  translations: any;
};

const I18nProvider: React.FC<I18nProviderProps> = (props) => {
  const [ locale, setLocale ] = useState('en-US');

  const i18n: I18nContextProps = { 
    t: key => props.translations[locale][key],
    getLocale: () => locale,
    setLocale: locale => setLocale(locale),
  };

  return (
    <I18nContext.Provider value={i18n}>
      {props.children}
    </I18nContext.Provider>
  );
};

export default I18nProvider;
