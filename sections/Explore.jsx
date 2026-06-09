"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TypingText, ExploreCard, TitleText } from "../components";
import { exploreWorlds } from "../constants";
import { useI18n } from "../contexts/I18nContext";

const Explore = () => {
  const [activeCard, setActiveCard] = useState(
    exploreWorlds[1]?.id ?? exploreWorlds[0]?.id ?? null,
  );
  const { t } = useI18n();
  const titleLine1 = t("explore.titleLine1");
  const titleLine2 = t("explore.titleLine2");
  const hasTitle = Boolean(titleLine1?.trim() || titleLine2?.trim());

  const handleCardClick = (id) => {
    setActiveCard((current) => (current === id ? null : id));
  };

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col px-1`}
      >
        <TypingText title={t("explore.typing")} textStyles="text-center" />
        {hasTitle && (
          <TitleText
            title={
              <>
                {titleLine1}{" "}
                <br className="md:block hidden" />
                {titleLine2}
              </>
            }
            textStyles="text-center"
          />
        )}
        <div
          className={`flex w-full flex-col gap-4 sm:gap-5 lg:min-h-[70vh] lg:flex-row lg:gap-0 lg:overflow-x-auto lg:pl-0 lg:pr-0 ${
            hasTitle ? "mt-[40px] sm:mt-[50px]" : "mt-[32px] sm:mt-[40px]"
          }`}
        >
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              id={world.id}
              imgUrl={world.imgUrl}
              title={t(world.titleKey)}
              description={t(world.descriptionKey)}
              index={index}
              active={activeCard}
              handleClick={handleCardClick}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
