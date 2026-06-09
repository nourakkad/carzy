"use client";

import Head from "next/head";
import { useRouter } from "next/router";
import { useI18n } from "../contexts/I18nContext";

export default function AppHead() {
  const { t } = useI18n();
  const router = useRouter();
  const isServicePage = router.pathname.startsWith("/services/");

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      {!isServicePage && (
        <>
          <title>{t("meta.title")}</title>
          <meta name="description" content={t("meta.description")} />
        </>
      )}
    </Head>
  );
}
