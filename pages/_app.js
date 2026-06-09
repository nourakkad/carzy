import { useEffect } from "react";
import Router from "next/router";
import { I18nProvider } from "../contexts/I18nContext";
import AppHead from "../components/AppHead";

import "../styles/globals.css";

const isBenignRouteCancellation = (err) =>
  Boolean(
    err?.cancelled ||
      err?.message?.includes("Abort fetching component") ||
      err?.message?.includes("Loading initial props cancelled"),
  );

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") return undefined;

    const handleRouteChangeError = (err) => {
      if (isBenignRouteCancellation(err)) return;
      console.error(err);
    };

    Router.events.on("routeChangeError", handleRouteChangeError);
    return () => Router.events.off("routeChangeError", handleRouteChangeError);
  }, []);

  return (
    <I18nProvider>
      <AppHead />
      <Component {...pageProps} />
    </I18nProvider>
  );
};

export default MyApp;
