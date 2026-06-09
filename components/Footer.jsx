"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import Image from "next/image";
import { useI18n } from "../contexts/I18nContext";

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-[#ffcb1c]" fill="currentColor" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5Z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-[#ffcb1c]" fill="currentColor" aria-hidden="true">
    <path d="M6.6 10.8c1.5 2.9 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8Z" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-[#ffcb1c]" fill="currentColor" aria-hidden="true">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
  </svg>
);

const Footer = () => {
  const { t } = useI18n();

  const contactItems = [
    {
      icon: LocationIcon,
      label: t("footer.contact.locationLabel"),
      value: t("footer.contact.locationValue"),
    },
    {
      icon: PhoneIcon,
      label: t("footer.contact.phoneLabel"),
      value: t("footer.contact.phoneValue"),
    },
    {
      icon: EmailIcon,
      label: t("footer.contact.emailLabel"),
      value: t("footer.contact.emailValue"),
    },
  ];

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} relative py-10 sm:py-12 md:py-14`}
    >
      <div className="footer-gradient" aria-hidden="true" />
      <div className={`${styles.innerWidth} relative z-10 mx-auto flex flex-col gap-7 md:gap-8`}>
        <div className="relative overflow-hidden rounded-[32px] border border-[#ffcb1c]/20 bg-black/45 px-5 py-8 text-center shadow-[0_30px_110px_rgba(0,0,0,0.36)] backdrop-blur-md sm:px-8 sm:py-10">
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#ffcb1c]/70 to-transparent" />

          <h4 className="locale-text locale-text-center relative mx-auto max-w-[940px] text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
            {t("footer.headline")}
          </h4>

          <a
            href="#explore"
            className="relative mt-6 inline-flex items-center justify-center rounded-full border border-[#ffcb1c]/40 bg-[#ffcb1c] px-7 py-3.5 text-[15px] font-bold text-black shadow-[0_16px_44px_rgba(255,203,28,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_58px_rgba(255,203,28,0.32)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffcb1c] sm:px-9 sm:py-4 sm:text-[16px]"
          >
            {t("footer.cta")}
          </a>
        </div>

        <div className="flex flex-col items-center gap-5 sm:gap-6">
          <h4 className="text-[20px] font-extrabold tracking-tight text-[#ffcb1c] sm:text-[22px]">
            {t("footer.brand")}
          </h4>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t(social.labelKey)}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-[#ffcb1c]/40 hover:bg-[#ffcb1c]/10 hover:shadow-[0_0_20px_rgba(255,203,28,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffcb1c]"
              >
                <Image
                  src={social.icon}
                  alt=""
                  aria-hidden="true"
                  className={`h-[20px] w-[20px] object-contain opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 ${
                    social.id === "threads" || social.id === "youtube"
                      ? "mix-blend-lighten"
                      : ""
                  }`}
                />
              </a>
            ))}
          </div>

          <div className="locale-text locale-text-center flex w-full max-w-[920px] flex-col items-center gap-2.5 text-[13px] text-secondary-white sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-5 sm:gap-y-2 sm:text-[14px]">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-2">
                  {index > 0 && (
                    <span className="mr-1 hidden text-white/25 sm:inline" aria-hidden="true">
                      •
                    </span>
                  )}
                  <Icon />
                  <span className="text-white/55">{item.label}:</span>
                  <span className="break-words text-white/85">{item.value}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="h-px w-full bg-white/10" />

        <div className="flex flex-col items-center gap-2 pb-2 text-center">
          <p className="text-[13px] font-normal leading-6 text-white/55 sm:text-[14px]">
            {t("footer.copyright")}
          </p>
          <p className="text-[12px] font-normal leading-6 text-white/45 sm:text-[13px]">
            {t("footer.poweredByPrefix")}
            <a
              href="https://elyptek.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 inline-block cursor-pointer font-medium text-[#ffcb1c] transition-all duration-300 hover:text-[#ffe27a] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffcb1c] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {t("footer.poweredByBrand")}
            </a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
