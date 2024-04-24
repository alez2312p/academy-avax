import i18next from "i18next";
import { initReactI18next } from "react-i18next"

import enNavbar from "../public/locales/en/navbar.json"
import enHome from "../public/locales/en/home.json"
import enMain from "../public/locales/en/main.json"
import enCardModule from "../public/locales/en/cardModule.json"
import enFooter from "../public/locales/en/footer.json"
import enMainAfterLogin from "../public/locales/en/mainAfterLogin.json"

import esNavbar from "../public/locales/es/navbar.json"
import esHome from "../public/locales/es/home.json"
import esMain from "../public/locales/es/main.json"
import esCardModule from "../public/locales/es/cardModule.json"
import esFooter from "../public/locales/es/footer.json"
import esMainAfterLogin from "../public/locales/es/mainAfterLogin.json"

const resources = {
    en: {
        navbar: enNavbar,
        home: enHome,
        main: enMain,
        cardModule: enCardModule,
        footer: enFooter,
        mainAfterLogin: enMainAfterLogin
    },
    es: {
        navbar: esNavbar,
        home: esHome,
        main: esMain,
        cardModule: esCardModule,
        footer: esFooter,
        mainAfterLogin: esMainAfterLogin
    }
}

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        debug: true,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18next;