export const languages = {
  es: "Español",
  en: "English",
};

export const ui = {
  es: {
    "nav.inicio": "Inicio",
    "nav.nosotros": "Quiénes Somos",
    welcome: "Bienvenido a la Nebulosa",
  },
  en: {
    "nav.inicio": "Home",
    "nav.nosotros": "About Us!!!",
    welcome: "Welcome to the Nebula-----aaaaa---a--a-a-",
  },
} as const;

export type uiKeys = keyof (typeof ui)["es"];

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof lang]) {
    return ui[lang][key] || ui["es"][key];
  };
}
