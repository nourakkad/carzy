"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";
import planet9 from "../public/planet-09.png";
import { fadeIn, staggerContainer } from "../utils/motion";
import { useI18n } from "../contexts/I18nContext";

const Feedback = () => {
  const { t } = useI18n();
  const reasons = [
    t("feedback.items.1"),
    t("feedback.items.2"),
    t("feedback.items.3"),
    t("feedback.items.4"),
    t("feedback.items.5"),
  ];

  return (
    <section id="why-us" className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col gap-6 px-1 lg:flex-row lg:items-stretch lg:gap-8`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="locale-text relative flex w-full flex-[0.65] flex-col justify-center overflow-hidden rounded-[32px] border border-[#ffcb1c]/15 bg-black/35 p-5 shadow-[0_28px_100px_rgba(0,0,0,0.25)] backdrop-blur-md transition-colors duration-300 hover:border-[#ffcb1c]/25 sm:p-8 lg:max-w-[460px]"
        >
          <div className="feedback-gradient" />

          <h4 className="relative text-[clamp(2rem,5vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
            {t("feedback.title")}
          </h4>

          <ul className="relative mt-7 flex flex-col gap-3.5 sm:gap-4">
            {reasons.map((reason, index) => (
              <li
                key={`reason-${index}`}
                className="rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-4 transition duration-300 hover:border-[#ffcb1c]/25 hover:bg-[#ffcb1c]/[0.04] sm:px-5"
              >
                <span className="text-[15px] font-normal leading-7 text-secondary-white sm:text-[16px] sm:leading-8">
                  {reason}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="relative flex min-h-[220px] flex-1 items-center justify-center overflow-hidden rounded-[36px] border border-[#ffcb1c]/10 bg-black/20 shadow-[0_28px_100px_rgba(0,0,0,0.24)] sm:min-h-[320px] lg:min-h-[560px]"
        >
          <Image
            src={planet9}
            alt={t("feedback.planetAlt")}
            placeholder="blur"
            className="h-full min-h-[220px] w-full object-cover sm:min-h-[320px] lg:min-h-[560px]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Feedback;
