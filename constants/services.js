import Planet_1 from "../public/planet-01.png";
import Planet_2 from "../public/planet-02.png";
import Planet_3 from "../public/planet-03.png";
import Planet_4 from "../public/planet-04.png";

/** Single source of truth for service cards and detail routes */
export const servicesCatalog = [
  {
    slug: "animation",
    key: "animation",
    imgUrl: Planet_1,
    titleKey: "services.items.animation.title",
    descriptionKey: "services.items.animation.description",
  },
  {
    slug: "graphic-design-printing",
    key: "graphic",
    imgUrl: Planet_2,
    titleKey: "services.items.graphic.title",
    descriptionKey: "services.items.graphic.description",
  },
  {
    slug: "production",
    key: "production",
    imgUrl: Planet_3,
    titleKey: "services.items.production.title",
    descriptionKey: "services.items.production.description",
  },
  {
    slug: "digital-marketing",
    key: "digital",
    imgUrl: Planet_4,
    titleKey: "services.items.digital.title",
    descriptionKey: "services.items.digital.description",
  },
];

export const getServiceBySlug = (slug) =>
  servicesCatalog.find((service) => service.slug === slug) ?? null;

export const exploreWorlds = servicesCatalog.map((service) => ({
  id: `service-${service.key}`,
  imgUrl: service.imgUrl,
  titleKey: service.titleKey,
  descriptionKey: service.descriptionKey,
}));

export const insights = servicesCatalog.map((service) => ({
  id: `insight-${service.key}`,
  imgUrl: service.imgUrl,
  titleKey: service.titleKey,
  descriptionKey: service.descriptionKey,
  href: `/services/${service.slug}`,
}));
