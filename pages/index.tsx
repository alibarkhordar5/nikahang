import Link from "next/link";
import { useRouter } from "next/router";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { IconButton, Stack } from "@mui/material";
import { AcUnit } from "@mui/icons-material";
import { Header } from "src/components/organism/layout/header/Header";
import { MainTemplate } from "src/components/organism/templates/MainTemplate";
import { HeroSection } from "src/components/organism/home/HeroSection";
import { AboutSection } from "src/components/organism/home/AboutSection";
import { InstrumentsSection } from "src/components/organism/home/InstrumentsSection";

type Props = {
  // Add custom props here
};

const Homepage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { t, i18n } = useTranslation("common");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const clientSideLanguageChange = (newLocale: string) => {
    i18n.changeLanguage(newLocale);
  };

  const changeTo = router.locale === "en" ? "fa" : "en";

  return (
    <MainTemplate>
      <>
        <HeroSection />
        <AboutSection />
        <InstrumentsSection />
      </>
    </MainTemplate>
  );
};

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "header",
        "footer",
      ])),
    },
  };
};

export default Homepage;
