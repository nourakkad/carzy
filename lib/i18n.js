import en from "../locales/en.json";
import ar from "../locales/ar.json";

export const SUPPORTED_LOCALES = ["en", "ar"];

export const DEFAULT_LOCALE = "en";

export const messages = {
  en,
  ar,
};

/**
 * @param {Record<string, unknown>} obj
 * @param {string} path - Dot notation, e.g. "explore.worlds.w1"
 */
export function getMessage(obj, path) {
  if (!path) return null;
  const parts = path.split(".");
  let cur = obj;
  for (const part of parts) {
    if (cur == null || typeof cur !== "object") return null;
    cur = cur[part];
  }
  return typeof cur === "string" ? cur : null;
}

export function translate(locale, key, fallbackLocale = DEFAULT_LOCALE) {
  const activeLocale =
    locale && messages[locale] ? locale : fallbackLocale;
  const primary = getMessage(messages[activeLocale], key);
  if (primary != null) return primary;
  const fallback = getMessage(messages[fallbackLocale], key);
  return fallback != null ? fallback : key;
}
