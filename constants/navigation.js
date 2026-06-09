import { servicesCatalog } from "./services";

export const mainNavItems = [
  { id: "about", labelKey: "nav.menu.about", href: "/#about" },
  { id: "explore", labelKey: "nav.menu.explore", href: "/#explore" },
  { id: "vision", labelKey: "nav.menu.vision", href: "/#vision" },
  { id: "approach", labelKey: "nav.menu.approach", href: "/#approach" },
  { id: "who-we-serve", labelKey: "nav.menu.whoWeServe", href: "/#who-we-serve" },
  {
    id: "services",
    labelKey: "nav.menu.services",
    href: "/#services",
    children: servicesCatalog.map((service) => ({
      id: service.slug,
      labelKey: service.titleKey,
      href: `/services/${service.slug}`,
    })),
  },
  { id: "why-us", labelKey: "nav.menu.whyUs", href: "/#why-us" },
];
