import instagram from "../public/instagram.svg";
import facebook from "../public/facebook.svg";
import threads from "../public/threads.png";
import youtube from "../public/youtube.svg";

export {
  servicesCatalog,
  getServiceBySlug,
  exploreWorlds,
  insights,
} from "./services";

export { mainNavItems } from "./navigation";

export const socials = [
  {
    id: "instagram",
    href: "https://www.instagram.com/crazybeeez_?igsh=MW1sbDloMTJ1eXp4aQ==",
    icon: instagram,
    labelKey: "footer.social.instagram",
  },
  {
    id: "facebook",
    href: "https://www.facebook.com/share/1JEeDC5r3j/",
    icon: facebook,
    labelKey: "footer.social.facebook",
  },
  {
    id: "threads",
    href: "https://www.threads.com/@crazybeeez_",
    icon: threads,
    labelKey: "footer.social.threads",
  },
  {
    id: "youtube",
    href: "https://youtube.com/@crazybeeez?si=rwlSyuyOmIGhbaZE",
    icon: youtube,
    labelKey: "footer.social.youtube",
  },
];
