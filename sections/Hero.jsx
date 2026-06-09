"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import stamp from "../public/stamp.png";
import cover from "../public/cover.png";
import { useI18n } from "../contexts/I18nContext";

const Hero = () => {
  const { t } = useI18n();

  return (
    <section className={`${styles.yPaddings} pl-6 pr-4 sm:pl-16 sm:pr-0`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="relative z-10 flex flex-col items-center justify-center px-2 text-center">
          <motion.div variants={textVariant(1.1)}>
            <motion.p
              animate={{ opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="locale-text locale-text-center max-w-[980px] text-[clamp(2rem,6.5vw,4.25rem)] font-[Antonio] font-bold uppercase leading-[1.08] tracking-[0.14em] drop-shadow-[0_8px_32px_rgba(255,203,28,0.18)] sm:tracking-[0.2em]"
            >
              <span className="bg-gradient-to-r from-[#ffcb1c] via-[#ffe27a] to-[#ffcb1c] bg-clip-text text-transparent">
                {t("hero.tagline")}
              </span>
            </motion.p>
          </motion.div>
          <motion.div
            variants={textVariant(1.2)}
            className="mt-4 h-px w-24 bg-gradient-to-r from-transparent via-[#ffcb1c]/80 to-transparent sm:mt-5 sm:w-32"
          />
        </div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:-mt-[12px] -mt-[8px]"
        >
          <Image
            src={cover}
            alt={t("hero.coverAlt")}
            placeholder="blur"
            priority
            className="relative z-10 h-auto max-h-[min(70vh,620px)] w-full rounded-tl-[clamp(3rem,12vw,8.75rem)] object-cover sm:max-h-none sm:object-contain"
          />

          <a href="#explore" className="block">
            <div className="relative z-10 -mt-[50px] flex w-full justify-end pr-[24px] sm:-mt-[70px] sm:pr-[40px]">
              <Image
                src={stamp}
                alt={t("hero.stampAlt")}
                placeholder="blur"
                priority
                className="h-[100px] w-[100px] object-contain sm:h-[155px] sm:w-[155px]"
              />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
