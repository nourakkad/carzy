"use client";

import { motion } from "framer-motion";
import { useI18n } from "../contexts/I18nContext";

const languageOptions = [
  { code: "en", short: "EN", label: "English" },
  { code: "ar", short: "AR", label: "العربية" },
];

export default function LanguageSwitcher({ className = "" }) {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      className={`inline-flex items-stretch overflow-hidden rounded-lg border border-white/14 bg-black/55 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md ${className}`}
      role="group"
      aria-label={t("nav.language")}
    >
      {languageOptions.map(({ code, short, label }, index) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            title={label}
            className={`relative min-w-[52px] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#ffcb1c] sm:min-w-[58px] sm:px-4 sm:py-2.5 sm:text-[12px] ${
              active ? "text-[#ffcb1c]" : "text-white/45 hover:text-white/80"
            }`}
            aria-pressed={active}
          >
            {index > 0 && (
              <span
                className="pointer-events-none absolute left-0 top-[18%] h-[64%] w-px bg-white/12"
                aria-hidden="true"
              />
            )}
            {active && (
              <motion.span
                layoutId="lang-corporate-indicator"
                className="pointer-events-none absolute inset-x-2 bottom-0 h-[2px] rounded-full bg-[#ffcb1c] shadow-[0_0_12px_rgba(255,203,28,0.55)]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative hidden sm:inline">{label}</span>
            <span className="relative sm:hidden">{short}</span>
          </button>
        );
      })}
    </div>
  );
}
