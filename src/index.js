import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';

import LanguageProvider from './containers/LanguageProvider';

import store from './store';

// Import i18n messages
import { translationMessages } from './i18n';

const MOUNT_NODE = document.getElementById('root');

const initialLocale = (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage;

const render = (messages) => {
  ReactDOM.render(
    <LanguageProvider
      locale={initialLocale}
      messages={messages}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </LanguageProvider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  require.ensure([
    'intl',
    'intl/locale-data/jsonp/en.js',
    'intl/locale-data/jsonp/vi.js',
  ], (require) => {
    require('intl');
    require('intl/locale-data/jsonp/en.js');
    require('intl/locale-data/jsonp/vi.js');

    render(translationMessages);
  });
} else {
  render(translationMessages);
}