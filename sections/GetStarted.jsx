"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, planetVariants } from "../utils/motion";
import { TypingText } from "../components";
import getStarted from "../public/get-started.png";
import { useI18n } from "../contexts/I18nContext";

const GetStarted = () => {
  const { t } = useI18n();
  const goals = [
    t("getStarted.goals.1"),
    t("getStarted.goals.2"),
    t("getStarted.goals.3"),
    t("getStarted.goals.4"),
    t("getStarted.goals.5"),
    t("getStarted.goals.6"),
  ];

  return (
    <section id="vision" className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto w-full flex lg:flex-row flex-col gap-8 lg:gap-10 px-1`}
      >
        <motion.div
          variants={planetVariants("left")}
          className={`flex-1 ${styles.flexCenter} min-h-[220px] lg:min-h-0`}
        >
          <Image
            src={getStarted}
            alt=""
            placeholder="blur"
            className="w-full max-w-[520px] lg:w-[92%] lg:max-w-none h-auto lg:h-[92%] object-contain drop-shadow-[0_30px_80px_rgba(255,203,28,0.08)]"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="locale-text flex w-full min-w-0 flex-[0.75] flex-col justify-center"
        >
          <TypingText title={t("getStarted.typing")} />

          <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2">
            <div className="rounded-[22px] border border-white/10 bg-black/35 p-5 backdrop-blur-md transition-colors duration-300 hover:border-[#ffcb1c]/25 hover:bg-black/40">
              <h3 className="text-[#ffcb1c] font-semibold text-[16px] sm:text-[18px]">
                {t("getStarted.visionTitle")}
              </h3>
              <p className="mt-3 text-secondary-white text-[15px] sm:text-[16px] leading-7 sm:leading-8">
                {t("getStarted.visionBody")}
              </p>
            </div>

            <div className="rounded-[22px] border border-white/10 bg-black/35 p-5 backdrop-blur-md transition-colors duration-300 hover:border-[#ffcb1c]/25 hover:bg-black/40">
              <h3 className="text-[#ffcb1c] font-semibold text-[16px] sm:text-[18px]">
                {t("getStarted.missionTitle")}
              </h3>
              <p className="mt-3 text-secondary-white text-[15px] sm:text-[16px] leading-7 sm:leading-8">
                {t("getStarted.missionBody")}
              </p>
            </div>

            <div className="rounded-[22px] border border-white/10 bg-black/35 p-5 backdrop-blur-md transition-colors duration-300 hover:border-[#ffcb1c]/25 hover:bg-black/40 md:col-span-2">
              <h3 className="text-[#ffcb1c] font-semibold text-[16px] sm:text-[18px]">
                {t("getStarted.messageTitle")}
              </h3>
              <p className="mt-3 text-secondary-white text-[15px] sm:text-[16px] leading-7 sm:leading-8">
                {t("getStarted.messageBody")}
              </p>
            </div>

            <div className="rounded-[22px] border border-white/10 bg-black/35 p-5 backdrop-blur-md transition-colors duration-300 hover:border-[#ffcb1c]/25 hover:bg-black/40 md:col-span-2">
              <h3 className="text-[#ffcb1c] font-semibold text-[16px] sm:text-[18px]">
                {t("getStarted.goalsTitle")}
              </h3>
              <ul className="mt-4 space-y-3">
                {goals.map((goal, idx) => (
                  <li key={`goal-${idx}`} className="locale-text-row flex gap-3">
                    <span
                      className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-[#ffcb1c] shadow-[0_0_18px_rgba(255,203,28,0.45)]"
                      aria-hidden="true"
                    />
                    <p className="text-secondary-white text-[15px] sm:text-[16px] leading-7 sm:leading-8">
                      {goal}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
