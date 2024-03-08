import { GetServerSideProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Banner } from "src/components/atoms/Banner";
import { MainTemplate } from "src/components/organism/templates/MainTemplate";

const Instruments: NextPage = () => {
  const breadCrumbs = [
    { title: "breadCrumbs.home", link: "/" },
    { title: "instruments.breadCrumbs.main" },
  ];

  return (
    <MainTemplate>
      <Banner
        subTitle="instruments.banner.subTitle"
        title="instruments.banner.title"
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

export default Instruments;
