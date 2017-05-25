import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';
import it from 'react-intl/locale-data/it';

import App from './App';
import './index.css';
import { getTranslations } from './translations/';

addLocaleData([...en, ...es, ...fr, ...it]);

const language = (navigator.languages && navigator.languages[0]) ||
                     navigator.language ||
                     navigator.userLanguage;

const messages = getTranslations(language);

ReactDOM.render(
    <IntlProvider locale={language} messages={messages}>
        <App />
    </IntlProvider>, document.getElementById('root')
);