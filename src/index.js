import React from "react";
import ReactDOM from "react-dom";
// Import React-Intl...
import { IntlProvider, addLocaleData } from "react-intl";
// ...and import the related i18n content for the supported locales
import en from "react-intl/locale-data/en";
import fr from "react-intl/locale-data/fr";
import es from "react-intl/locale-data/es";

import App from "./App";
import "./index.css";

// Import function to fetch translations
import { getTranslations } from "./translations/";

// Add locale data to React-Intl process 
addLocaleData([...en, ...fr, ...es]);

// Define supported languages for the application
const supportedLanguages = ["en", "en-gb", "fr", "es"];

// Find the language to use for the application from various browser implementations
let language = "en";
if(navigator.languages) {
  // Use the first supported language supplied
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
  </IntlProvider>, document.getElementById("root")
);