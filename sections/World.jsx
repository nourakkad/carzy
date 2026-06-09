"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText, TitleText } from "../components";
import { useI18n } from "../contexts/I18nContext";

const World = () => {
  const { t } = useI18n();
  const audiences = [
    t("world.audiences.1"),
    t("world.audiences.2"),
    t("world.audiences.3"),
    t("world.audiences.4"),
    t("world.audiences.5"),
    t("world.audiences.6"),
  ];

  return (
    <section id="who-we-serve" className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col px-1`}
      >
        <TypingText title={t("world.typing")} textStyles="text-center" />
        <TitleText title={t("world.title")} textStyles="text-center" />

        <motion.div
          variants={fadeIn("up", "easeIn", "0.3", 1)}
          className="relative mx-auto mt-[40px] w-full max-w-[1040px] overflow-hidden rounded-[32px] border border-white/10 bg-black/35 p-5 shadow-[0_28px_100px_rgba(0,0,0,0.24)] backdrop-blur-md sm:mt-[56px] sm:p-8 md:p-10"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#ffcb1c]/10 blur-3xl" />
          <p className="locale-text locale-text-center relative mx-auto max-w-[880px] text-[16px] leading-8 text-secondary-white sm:text-[18px]">
            {t("world.intro")}
          </p>

          <ul className="relative mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience, index) => (
              <li
                key={`audience-${index}`}
                className="rounded-[18px] border border-white/10 bg-white/[0.03] px-5 py-4 text-center transition duration-300 hover:border-[#ffcb1c]/25 hover:bg-[#ffcb1c]/[0.04]"
              >
                <span className="text-[15px] font-medium leading-7 text-white sm:text-[16px]">
                  {audience}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
