"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { useI18n } from "../contexts/I18nContext";

const SectionBlock = ({ title, children, className = "" }) => (
  <section className={`locale-text ${className}`}>
    <h2 className="text-[clamp(1.35rem,3vw,1.75rem)] font-bold text-[#ffcb1c]">{title}</h2>
    <div className="mt-5">{children}</div>
  </section>
);

const PORTFOLIO_COUNT = 6;

const ServiceDetail = ({ service }) => {
  const { t } = useI18n();
  const { key, imgUrl, titleKey, descriptionKey } = service;
  const pageKey = `services.items.${key}.page`;

  const collectList = (prefix, max = 12) => {
    const items = [];
    for (let i = 1; i <= max; i += 1) {
      const fullKey = `${pageKey}.${prefix}.${i}`;
      const value = t(fullKey);
      if (value === fullKey) break;
      items.push(value);
    }
    return items;
  };

  const hasKey = (suffix) => {
    const fullKey = `${pageKey}.${suffix}`;
    const value = t(fullKey);
    return value !== fullKey && value.length > 0;
  };

  const overviewParagraphs = collectList("overview");
  const whatWeOffer = collectList("whatWeOffer");
  const whyChooseUs = collectList("whyChooseUs");
  const processSteps = [1, 2, 3].map((n) => ({
    title: t(`${pageKey}.process.${n}.title`),
    body: t(`${pageKey}.process.${n}.body`),
  }));
  const portfolioItems = Array.from({ length: PORTFOLIO_COUNT }, (_, i) => i + 1);
  const whatWeOfferIntro = hasKey("whatWeOfferIntro") ? t(`${pageKey}.whatWeOfferIntro`) : null;

  return (
    <div className="site-bg min-h-screen overflow-hidden">
      <Head>
        <title>{t(`${pageKey}.metaTitle`)}</title>
        <meta name="description" content={t(descriptionKey)} />
      </Head>

      <Navbar />

      <main className="relative z-10">
        <motion.section
          variants={fadeIn("up", "tween", 0.1, 0.9)}
          initial="hidden"
          animate="show"
          className="relative min-h-[min(72vh,640px)] w-full overflow-hidden"
        >
          <Image
            src={imgUrl}
            alt={t(titleKey)}
            placeholder="blur"
            priority
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/35" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,203,28,0.14),transparent_55%)]" />

          <div className={`${styles.xPaddings} relative flex min-h-[min(72vh,640px)] items-end pb-12 pt-28 sm:pb-16 sm:pt-32`}>
            <div className={`${styles.innerWidth} mx-auto w-full px-1`}>
              <Link
                href="/"
                className="mb-6 inline-flex items-center gap-2 text-[14px] font-medium text-white/70 transition-colors hover:text-[#ffcb1c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffcb1c]"
              >
                <span aria-hidden="true">←</span>
                {t("servicePages.backToHome")}
              </Link>

              <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#ffcb1c]">
                {t(`${pageKey}.typing`)}
              </p>
              <h1 className="locale-text mt-4 max-w-[900px] text-[clamp(2.25rem,6vw,4rem)] font-bold leading-[1.06] tracking-[-0.02em] text-white">
                {t(titleKey)}
              </h1>
              <p className="locale-text mt-5 max-w-[720px] text-[16px] leading-8 text-secondary-white sm:text-[18px] sm:leading-9">
                {t(descriptionKey)}
              </p>
            </div>
          </div>
        </motion.section>

        <div className={`${styles.xPaddings} ${styles.bottomPaddings} pt-10 sm:pt-14`}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.12 }}
            className={`${styles.innerWidth} mx-auto flex flex-col gap-12 px-1 sm:gap-14`}
          >
            <motion.div variants={fadeIn("up", "tween", 0.1, 0.8)}>
              <SectionBlock title={t("servicePages.overviewTitle")}>
                <div className="rounded-[28px] border border-white/10 bg-black/35 p-6 backdrop-blur-md sm:p-8">
                  <div className="space-y-5">
                    {overviewParagraphs.map((paragraph, idx) => (
                      <p
                        key={`overview-${idx}`}
                        className="text-[15px] leading-8 text-secondary-white sm:text-[16px] sm:leading-9"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </SectionBlock>
            </motion.div>

            <motion.div variants={fadeIn("up", "tween", 0.15, 0.8)}>
              <SectionBlock title={t("servicePages.whatWeOfferTitle")}>
                {whatWeOfferIntro && (
                  <p className="mb-5 max-w-[820px] text-[15px] leading-8 text-secondary-white sm:text-[16px]">
                    {whatWeOfferIntro}
                  </p>
                )}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
                  {whatWeOffer.map((item, idx) => (
                    <motion.div
                      key={`offer-${idx}`}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="group rounded-[20px] border border-white/10 bg-white/[0.03] px-5 py-5 transition-colors duration-300 hover:border-[#ffcb1c]/30 hover:bg-[#ffcb1c]/[0.04]"
                    >
                      <span className="flex items-start gap-3 text-[15px] leading-7 text-white sm:text-[16px]">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffcb1c] transition-transform duration-300 group-hover:scale-125"
                          aria-hidden="true"
                        />
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </SectionBlock>
            </motion.div>

            <motion.div variants={fadeIn("up", "tween", 0.2, 0.8)}>
              <SectionBlock title={t("servicePages.portfolioTitle")}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {portfolioItems.map((n) => (
                    <motion.div
                      key={`video-${n}`}
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="group relative aspect-video overflow-hidden rounded-[24px] border border-white/10 bg-black/40 shadow-[0_16px_48px_rgba(0,0,0,0.28)]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#ffcb1c]/12 via-black/45 to-black/85 transition-opacity duration-300 group-hover:from-[#ffcb1c]/20" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#ffcb1c]/35 bg-[#ffcb1c]/10 text-xl text-[#ffcb1c] transition-all duration-300 group-hover:scale-110 group-hover:border-[#ffcb1c]/55 group-hover:bg-[#ffcb1c]/20 group-hover:shadow-[0_0_32px_rgba(255,203,28,0.25)]">
                          ▶
                        </span>
                        <p className="text-[14px] font-medium text-white/80 transition-colors group-hover:text-white">
                          {t("servicePages.portfolioPlaceholder")}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </SectionBlock>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "tween", 0.25, 0.8)}
              className="grid gap-8 lg:grid-cols-2 lg:gap-10"
            >
              <SectionBlock title={t("servicePages.whyChooseUsTitle")}>
                <ul className="space-y-3">
                  {whyChooseUs.map((item, idx) => (
                    <li
                      key={`why-${idx}`}
                      className="flex gap-3 rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-4 transition-colors duration-300 hover:border-[#ffcb1c]/20"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ffcb1c]" aria-hidden="true" />
                      <span className="text-[15px] leading-7 text-secondary-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </SectionBlock>

              <SectionBlock title={t("servicePages.creativeProcessTitle")}>
                <ol className="space-y-4">
                  {processSteps.map((step, idx) => (
                    <li
                      key={`process-${idx}`}
                      className="rounded-[18px] border border-white/10 bg-black/30 px-4 py-4 transition-colors duration-300 hover:border-[#ffcb1c]/15"
                    >
                      <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#ffcb1c]">
                        {t("servicePages.stepLabel")} {idx + 1}
                      </p>
                      <p className="mt-2 text-[15px] font-medium text-white">{step.title}</p>
                      <p className="mt-1 text-[14px] leading-7 text-secondary-white">{step.body}</p>
                    </li>
                  ))}
                </ol>
              </SectionBlock>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "tween", 0.35, 0.8)}
              className="relative overflow-hidden rounded-[32px] border border-[#ffcb1c]/20 bg-black/45 px-6 py-10 text-center shadow-[0_28px_100px_rgba(0,0,0,0.32)] backdrop-blur-md sm:px-10 sm:py-12"
            >
              <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-[#ffcb1c]/10 blur-3xl" />
              <h2 className="locale-text relative text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-tight text-white">
                {t("servicePages.ctaTitle")}
              </h2>
              <p className="locale-text relative mx-auto mt-4 max-w-[720px] text-[15px] leading-8 text-secondary-white sm:text-[16px]">
                {t("servicePages.ctaBody")}
              </p>
              <Link
                href="/#explore"
                className="relative mt-7 inline-flex items-center justify-center rounded-full border border-[#ffcb1c]/40 bg-[#ffcb1c] px-8 py-3.5 text-[15px] font-bold text-black shadow-[0_16px_44px_rgba(255,203,28,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_58px_rgba(255,203,28,0.32)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffcb1c]"
              >
                {t("servicePages.ctaButton")}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
