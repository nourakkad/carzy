"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { mainNavItems } from "../constants/navigation";
import { useI18n } from "../contexts/I18nContext";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, transition: { duration: 0.22, ease: [0.4, 0, 1, 1] } },
};

const panelVariants = {
  hidden: { x: "100%", opacity: 0.6 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.34, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    x: "100%",
    opacity: 0.5,
    transition: { duration: 0.26, ease: [0.4, 0, 1, 1] },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.05 + i * 0.04, duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  }),
};

const MobileMenu = ({ open, onClose }) => {
  const { t } = useI18n();
  const router = useRouter();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!open) {
      setServicesOpen(false);
      return undefined;
    }

    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
    };

    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY);
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (router.pathname !== "/") return undefined;

    const sectionIds = mainNavItems.map((item) => item.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.15, 0.35, 0.55] },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [router.pathname, open]);

  const handleNavClick = (href, id) => {
    setActiveId(id);
    onClose();
  };

  let itemIndex = 0;

  return (
    <AnimatePresence mode="wait">
      {open && (
        <>
          <motion.button
            type="button"
            aria-label={t("nav.menu.close")}
            className="fixed inset-0 z-[90] cursor-pointer bg-black/75 backdrop-blur-[3px]"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label={t("common.menu")}
            className="fixed right-0 top-0 z-[100] flex h-full w-[min(88vw,360px)] flex-col border-l border-white/10 bg-[#080808]/96 shadow-[-24px_0_90px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
              <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#ffcb1c]">
                {t("common.menu")}
              </span>
              <button
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/80 transition hover:border-[#ffcb1c]/35 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffcb1c]"
                aria-label={t("nav.menu.close")}
              >
                ✕
              </button>
            </div>

            <nav className="locale-text flex-1 overflow-y-auto px-4 py-4">
              <ul className="space-y-1">
                {mainNavItems.map((item) => {
                  const active = activeId === item.id;
                  const hasChildren = Boolean(item.children?.length);
                  const currentIndex = itemIndex;
                  itemIndex += 1;

                  if (!hasChildren) {
                    return (
                      <motion.li
                        key={item.id}
                        custom={currentIndex}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <Link
                          href={item.href}
                          onClick={() => handleNavClick(item.href, item.id)}
                          className={`block rounded-xl px-4 py-3 text-[15px] font-medium transition ${
                            active
                              ? "bg-[#ffcb1c]/12 text-[#ffcb1c]"
                              : "text-white/85 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {t(item.labelKey)}
                        </Link>
                      </motion.li>
                    );
                  }

                  return (
                    <motion.li
                      key={item.id}
                      custom={currentIndex}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <button
                        type="button"
                        onClick={() => setServicesOpen((prev) => !prev)}
                        className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-[15px] font-medium transition ${
                          active || servicesOpen
                            ? "bg-[#ffcb1c]/12 text-[#ffcb1c]"
                            : "text-white/85 hover:bg-white/5 hover:text-white"
                        }`}
                        aria-expanded={servicesOpen}
                      >
                        <span>{t(item.labelKey)}</span>
                        <span
                          className={`text-[12px] transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        >
                          ▾
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {servicesOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden pl-3"
                          >
                            {item.children.map((child) => (
                              <li key={child.id}>
                                <Link
                                  href={child.href}
                                  onClick={onClose}
                                  className="block rounded-lg px-4 py-2.5 text-[14px] text-secondary-white transition hover:bg-white/5 hover:text-[#ffcb1c]"
                                >
                                  {t(child.labelKey)}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
