"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { useI18n } from "../contexts/I18nContext";

const yearStyle =
  "mx-1 inline-flex rounded-full border border-[#ffcb1c]/30 bg-[#ffcb1c]/10 px-3 py-1 text-[#ffcb1c] shadow-[0_0_24px_rgba(255,203,28,0.18)]";

const renderWithYear = (text, year) => {
  const [before, after] = text.split(year);

  if (after === undefined) return text;

  return (
    <>
      {before}
      <span className={yearStyle}>{year}</span>
      {after}
    </>
  );
};

const About = () => {
  const { t } = useI18n();
  const paragraphs = [
    t("about.paragraph1"),
    renderWithYear(t("about.paragraph2"), "2012"),
    renderWithYear(t("about.paragraph3"), "2016"),
    t("about.paragraph4"),
  ];

  return (
    <section id="about" className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col px-1`}
      >
        <TypingText title={t("about.typing")} textStyles="text-center" />

        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="relative mt-5 w-full max-w-[980px] overflow-hidden rounded-[36px] border border-[#ffcb1c]/15 bg-black/35 px-5 py-8 text-center shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-md sm:px-10 sm:py-11 md:px-14 md:py-14"
        >
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#ffcb1c]/70 to-transparent" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#ffcb1c]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#ffcb1c]/10 blur-3xl" />

          <h2 className="relative font-bold text-[44px] leading-tight text-white sm:text-[64px] md:text-[76px]">
            {t("about.title")}
          </h2>
          <div className="relative mx-auto mt-5 h-[3px] w-24 rounded-full bg-gradient-to-r from-transparent via-[#ffcb1c] to-transparent shadow-[0_0_24px_rgba(255,203,28,0.45)]" />

          <div className="locale-text locale-text-center relative mx-auto mt-8 flex max-w-[820px] flex-col gap-5 sm:gap-6">
            {paragraphs.map((paragraph, index) => (
              <p
                key={`about-paragraph-${index}`}
                className="font-normal text-[18px] leading-[1.8] text-secondary-white sm:text-[22px] md:text-[24px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt={t("about.arrowAlt")}
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </section>
  );
};

export default About;
