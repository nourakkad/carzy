"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeIn } from "../utils/motion";
import arrow from "../public/arrow.svg";
import { useI18n } from "../contexts/I18nContext";

const InsightCard = ({ imgUrl, title, subtitle, href, index }) => {
  const { t } = useI18n();
  const exploreLabel = t("servicePages.exploreLabel");

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 1)}>
      <Link
        href={href}
        aria-label={`${exploreLabel}: ${title}`}
        className="group flex h-full flex-col gap-4 overflow-hidden rounded-[28px] border border-transparent p-1 transition-all duration-300 hover:border-[#ffcb1c]/20 hover:bg-white/[0.02] hover:shadow-[0_20px_60px_rgba(255,203,28,0.06)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffcb1c] md:flex-row md:items-stretch"
      >
        <div className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-[28px] sm:h-[230px] md:h-auto md:w-[270px] md:min-h-[250px]">
          <Image
            src={imgUrl}
            alt={title}
            placeholder="blur"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
        </div>

        <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-center px-4 py-4 md:px-8 lg:px-10">
          <div className="locale-text w-full text-center md:text-start">
            <h4 className="text-[22px] font-normal leading-tight text-white transition-colors group-hover:text-[#ffcb1c] sm:text-[26px] lg:text-[42px]">
              {title}
            </h4>
            <p className="mt-3 overflow-hidden text-[14px] font-normal leading-7 text-secondary-white [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] sm:mt-4 sm:text-[16px] sm:leading-8 lg:text-[20px]">
              {subtitle}
            </p>
          </div>

          <span className="locale-text locale-text-center mt-5 inline-flex w-full items-center justify-center gap-2 px-2 text-[14px] font-semibold text-[#ffcb1c] transition-colors group-hover:text-white">
            {exploreLabel}
            <Image src={arrow} alt="" aria-hidden="true" className="h-4 w-4 rotate-[-90deg] object-contain" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default InsightCard;
