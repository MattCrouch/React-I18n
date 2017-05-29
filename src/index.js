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

const supportedLanguages = ['en', 'en-gb', 'es', 'fr', 'it'];

let language = 'en';

if(navigator.languages) {
    for(let i = 0; i < navigator.languages.length; i++) {
        if(supportedLanguages.includes(navigator.languages[i].toLowerCase())) {
            language = navigator.languages[i].toLowerCase();
            break;
        }
    }
} else if (navigator.language) {
    language = navigator.language.toLowerCase();
} else if (navigator.userLanguage) {
    language = navigator.userLanguage.toLowerCase();
}

const messages = getTranslations(language);

ReactDOM.render(
    <IntlProvider locale={language} messages={messages}>
        <App />
    </IntlProvider>, document.getElementById('root')
);