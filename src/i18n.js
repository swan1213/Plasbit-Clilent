import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";

import translationEN from './messages/en.i18n.json';
// import translationHE from './messages/he.i18n.json';

const messages_en = Object.assign({}, translationEN);

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // we init with resources
        resources: {
            en: {
                translations: messages_en
            }
        },
        fallbackLng: "en",
        debug: false,

        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",

        // keySeparator: false, // we use content as keys
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
