"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`locale-text locale-text-center text-[13px] font-medium uppercase tracking-[0.18em] text-secondary-white sm:text-[14px] ${textStyles}`}
  >
    {/* This Array will split the characters in the title and then map over that characters */}
    {/* NOTE use 'parenthesis' over 'curly brackets' to return something instantly */}
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {/* checking if letter are available or not */}
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`locale-text locale-text-center mt-[10px] text-[clamp(2.25rem,6vw,4rem)] font-bold leading-[1.08] tracking-[-0.025em] text-white ${textStyles} `}
  >
    {title}
  </motion.h2>
);
