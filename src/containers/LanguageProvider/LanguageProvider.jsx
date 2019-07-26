// @flow
import React from 'react';
import { IntlProvider } from 'react-intl';

type Props = {
  locale: string,
  messages: {
    [key: string]: {
      [key: string]: string
    }
  },
  children: React.any
}

const LanguageProvider = ({
  locale,
  messages,
  children,
}: Props) => (
  <IntlProvider
    locale={locale}
    key={locale}
    messages={messages[locale]}
  >
    {React.Children.only(children)}
  </IntlProvider>
);

export default LanguageProvider;

