"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles";
import { fadeIn } from "../utils/motion";

const ExploreCard = ({ id, imgUrl, title, description, index, active, handleClick }) => {
  const isActive = active === id;

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative w-full cursor-pointer overflow-hidden rounded-[24px] transition-[flex,height] duration-[0.7s] ease-out-flex lg:min-w-[170px] ${
        isActive
          ? "h-[min(360px,72vw)] lg:h-[600px] lg:flex-[3.5]"
          : "h-[220px] sm:h-[240px] lg:h-[600px] lg:flex-[0.5]"
      } ${styles.flexCenter}`}
      onClick={() => handleClick(id)}
      role="button"
      aria-expanded={isActive}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick(id);
        }
      }}
    >
      <Image
        src={imgUrl}
        alt={title}
        placeholder="blur"
        className="absolute h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {!isActive ? (
        <h3 className="locale-text absolute bottom-5 left-0 right-0 z-[1] px-4 text-center text-[17px] font-semibold leading-tight text-white sm:text-[19px] lg:bottom-20 lg:max-w-[90%] lg:origin-[0,0] lg:px-2 lg:text-left lg:text-[26px] lg:rotate-[-90deg]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 z-[1] flex w-full flex-col justify-start p-4 sm:p-6 lg:p-8">
          <div className="gradient-05 locale-text rounded-[20px] p-4 sm:rounded-[24px] sm:p-5 lg:p-6">
            <h2 className="text-[17px] font-semibold text-white sm:text-[20px] lg:text-[24px]">
              {title}
            </h2>
            <p className="mt-2 text-[13px] font-normal leading-6 text-secondary-white sm:mt-3 sm:text-[15px] sm:leading-7 lg:text-[16px] lg:leading-[26px]">
              {description}
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
