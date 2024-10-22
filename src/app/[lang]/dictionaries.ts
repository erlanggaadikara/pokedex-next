import "server-only";

const dictionaries = {
  "en-Us": () =>
    import("../../locales/en.json").then((module) => module.default),
  idn: () => import("../../locales/idn.json").then((module) => module.default),
};

export const getDictionary = async (locale: "en-Us" | "idn") =>
  dictionaries[locale]();
