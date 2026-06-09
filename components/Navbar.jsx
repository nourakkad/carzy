"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import menu from "../public/menu.svg";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";
import { useI18n } from "../contexts/I18nContext";

const Navbar = () => {
  const { t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={`${styles.xPaddings} relative py-5 sm:py-7`}>
        <motion.div
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="absolute inset-0 w-[50%] gradient-01"
        />

        <motion.div
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className={`${styles.innerWidth} relative mx-auto`}
        >
          <div className="relative flex min-h-[64px] items-center justify-between sm:min-h-[72px] md:min-h-[80px] lg:min-h-[88px]">
            <div className="z-10 flex flex-1 items-center justify-start">
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-[#ffcb1c]/35 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffcb1c] sm:h-11 sm:w-11"
                aria-label={t("common.menu")}
                aria-expanded={menuOpen}
              >
                <Image
                  src={menu}
                  alt=""
                  aria-hidden="true"
                  className="h-[22px] w-[22px] object-contain opacity-90 sm:h-[24px] sm:w-[24px]"
                />
              </button>
            </div>

            <Link
              href="/"
              className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
              aria-label={t("nav.logoAlt")}
            >
              <Image
                src="/logo.png"
                alt={t("nav.logoAlt")}
                width={400}
                height={100}
                priority
                quality={95}
                className="h-[90px] w-auto max-w-[min(78vw,300px)] object-contain drop-shadow-[0_2px_12px_rgba(255,203,28,0.18)] sm:h-[150px] sm:max-w-[340px] md:h-[150px] md:max-w-[380px] lg:h-[150px] lg:max-w-[420px] xl:h-[250px] xl:max-w-[460px]"
              />
            </Link>

            <div className="z-10 flex flex-1 items-center justify-end">
              <LanguageSwitcher />
            </div>
          </div>
        </motion.div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
