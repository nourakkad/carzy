"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText, TitleText, InsightCard } from "../components";
import { insights } from "../constants";
import { useI18n } from "../contexts/I18nContext";

const Insights = () => {
  const { t } = useI18n();

  return (
    <section id="services" className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col px-1`}
      >
        <TypingText title={t("insights.typing")} textStyles="text-center" />
        <TitleText title={t("insights.title")} textStyles="text-center" />

        <motion.p
          variants={fadeIn("up", "easeIn", "0.2", 1)}
          className="locale-text locale-text-center mx-auto mt-6 max-w-[880px] px-2 text-[16px] leading-8 text-secondary-white sm:mt-8 sm:text-[18px] sm:leading-9"
        >
          {t("insights.intro")}
        </motion.p>

        <div className="mt-[40px] flex flex-col gap-[24px] sm:mt-[50px] sm:gap-[30px]">
          {insights.map((insight, index) => (
            <InsightCard
              key={insight.id}
              imgUrl={insight.imgUrl}
              title={t(insight.titleKey)}
              subtitle={t(insight.descriptionKey)}
              href={insight.href}
              index={index + 1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
