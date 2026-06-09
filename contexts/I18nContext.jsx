"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  translate,
} from "../lib/i18n";

const STORAGE_KEY = "carzy-locale";

const I18nContext = createContext(null);

function readStoredLocale() {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LOCALES.includes(stored)) return stored;
  } catch {
    /* ignore */
  }
  return null;
}

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(DEFAULT_LOCALE);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    const stored = readStoredLocale();
    if (stored) setLocaleState(stored);
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (!hasHydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = locale;
    document.documentElement.setAttribute("dir", "ltr");
    document.body.classList.remove("locale-en", "locale-ar");
    document.body.classList.add(`locale-${locale}`);
  }, [locale, hasHydrated]);

  const setLocale = useCallback((next) => {
    if (SUPPORTED_LOCALES.includes(next)) setLocaleState(next);
  }, []);

  const t = useCallback((key) => translate(locale, key), [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, t, hasHydrated }),
    [locale, setLocale, t, hasHydrated],
  );

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}
