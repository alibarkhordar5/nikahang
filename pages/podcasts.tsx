import { GetServerSideProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Banner } from "src/components/atoms/Banner";
import { MainTemplate } from "src/components/organism/templates/MainTemplate";

const Podcasts: NextPage = () => {
  const breadCrumbs = [
    { title: "breadCrumbs.home", link: "/" },
    { title: "podcast.breadCrumbs.main" },
  ];

  return (
    <MainTemplate>
      <Banner
        subTitle="podcast.banner.subTitle"
        title="podcast.banner.title"
        breadCrumbs={breadCrumbs}
        imageUrl="/images/instruments/banner-bg.jpg"
      />
    </MainTemplate>
  );
};

type Props = {};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "common",
      "header",
      "footer",
    ])),
  },
});

export default Podcasts;
