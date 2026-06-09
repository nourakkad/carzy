"use client";

import { forwardRef } from "react";
import Link from "next/link";

const HoneyCard = forwardRef(
  (
    {
      variant = "content",
      size = "md",
      href,
      onClick,
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      media,
      title,
      description,
      children,
      className = "",
      accent = false,
      elevated = false,
      receded = false,
      asButton = false,
      "aria-label": ariaLabel,
      "aria-expanded": ariaExpanded,
    },
    ref,
  ) => {
    const classes = [
      "honey-card",
      `honey-card--${variant}`,
      `honey-card--${size}`,
      accent ? "honey-card--accent" : "",
      elevated ? "honey-card--elevated" : "",
      receded ? "honey-card--receded" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const inner = (
      <>
        <div className="honey-card__glow" aria-hidden="true" />
        <div className="honey-card__hex-ring" aria-hidden="true" />
        <div className="honey-card__frame">
          {media ? (
            <div className="honey-card__media">
              {media}
              <div className="honey-card__media-overlay" aria-hidden="true" />
            </div>
          ) : null}
          <div className="honey-card__body">
            {title ? (
              <h3 className="honey-card__title locale-text">{title}</h3>
            ) : null}
            {description ? (
              <p className="honey-card__text locale-text">{description}</p>
            ) : null}
            {children}
          </div>
        </div>
      </>
    );

    const handlers = {
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      ref,
    };

    if (href) {
      return (
        <Link href={href} className={classes} aria-label={ariaLabel} {...handlers}>
          {inner}
        </Link>
      );
    }

    if (asButton || onClick) {
      return (
        <button
          type="button"
          className={classes}
          onClick={onClick}
          aria-label={ariaLabel}
          aria-expanded={ariaExpanded}
          {...handlers}
        >
          {inner}
        </button>
      );
    }

    return (
      <div className={classes} {...handlers}>
        {inner}
      </div>
    );
  },
);

HoneyCard.displayName = "HoneyCard";

export default HoneyCard;
