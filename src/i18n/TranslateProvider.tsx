import { createInstance } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { FC, PropsWithChildren, useMemo } from "react";
import { I18nextProvider, initReactI18next } from "react-i18next";

import { TranslateProviderProps } from "./types";
import {
  DEFAULT_NAME_SPACE,
  DEFAULT_RESOURCES,
  DEFAULT_SUPPORTED_LANGS,
} from "./resources";

export const TranslateProvider: FC<
  PropsWithChildren<TranslateProviderProps>
> = ({ supportedLangs = [], nameSpaces = [], children }) => {
  const i18n = useMemo(() => {
    const newI18n = createInstance();
    newI18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        fallbackLng: "en",
        debug: false,
        ns: [...new Set([DEFAULT_NAME_SPACE, ...nameSpaces])],
        defaultNS: DEFAULT_NAME_SPACE,
        supportedLngs: [
          ...new Set([...DEFAULT_SUPPORTED_LANGS, ...supportedLangs]),
        ],
        resources: DEFAULT_RESOURCES,
        interpolation: {
          escapeValue: false,
        },
      });
    newI18n.services.formatter?.addCached(
      "customNumberFormat",
      (lng, options: { unit?: string }) => {
        const formatter = new Intl.NumberFormat(lng, {
          style: "unit",
          unit: options?.unit,
          unitDisplay: "long",
        });
        return (val: number) => formatter.format(val);
      }
    );
    return newI18n;
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
