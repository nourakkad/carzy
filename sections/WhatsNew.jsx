"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, planetVariants } from "../utils/motion";
import { TypingText, TitleText } from "../components";
import whatsNewImage from "../public/whats-new.png";
import { useI18n } from "../contexts/I18nContext";

const WhatsNew = () => {
  const { t } = useI18n();
  const points = [
    t("whatsNew.points.1"),
    t("whatsNew.points.2"),
    t("whatsNew.points.3"),
  ];

  return (
    <section id="approach" className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className={`${styles.innerWidth} mx-auto flex w-full flex-col gap-8 px-1 md:gap-10 lg:flex-row lg:items-center lg:gap-14`}
      >
        <motion.div
          variants={planetVariants("left")}
          className={`relative order-1 w-full flex-1 ${styles.flexCenter} min-h-[240px] sm:min-h-[300px] md:min-h-[380px] lg:order-1 lg:min-h-[520px]`}
        >
          <Image
            src={whatsNewImage}
            alt={t("whatsNew.title")}
            placeholder="blur"
            className="h-auto w-full max-w-[520px] object-contain lg:max-w-none"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="locale-text order-2 flex w-full min-w-0 flex-[0.95] flex-col lg:order-2"
        >
          <TypingText title={t("whatsNew.typing")} />
          <TitleText title={t("whatsNew.title")} />

          <div className="mt-6 overflow-hidden rounded-[32px] border border-[#ffcb1c]/15 bg-black/35 p-5 shadow-[0_28px_100px_rgba(0,0,0,0.25)] backdrop-blur-md transition-colors duration-300 hover:border-[#ffcb1c]/25 sm:mt-8 sm:p-8 md:p-10">
            <p className="text-[18px] font-normal leading-8 text-white sm:text-[22px] sm:leading-9">
              {t("whatsNew.intro")}
            </p>
            <p className="mt-4 text-[15px] leading-8 text-secondary-white sm:text-[17px] sm:leading-9">
              {t("whatsNew.body")}
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1 xl:grid-cols-3">
              {points.map((point, index) => (
                <li
                  key={`approach-${index}`}
                  className="rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-4 transition duration-300 hover:border-[#ffcb1c]/25 hover:bg-[#ffcb1c]/[0.04] sm:px-5 sm:py-5"
                >
                  <span className="text-[15px] font-medium leading-7 text-white sm:text-[16px]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
