import { _common as en_common } from "./translations/en/_common";
import { _common as pl_common } from "./translations/pl/_common";

export const DEFAULT_NAME_SPACE = "_common";
export const DEFAULT_SUPPORTED_LANGS = ["en", "pl"] as const;

export const DEFAULT_RESOURCES = {
  pl: {
    [DEFAULT_NAME_SPACE]: pl_common,
  },
  en: {
    [DEFAULT_NAME_SPACE]: en_common,
  },
};
