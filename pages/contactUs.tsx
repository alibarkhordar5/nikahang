import { GetServerSideProps, NextPage } from "next";
import { MainTemplate } from "src/components/organism/templates/MainTemplate";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Banner } from "src/components/atoms/Banner";

const ContactUs: NextPage = () => {
  const breadCrumbs = [
    { title: "breadCrumbs.home", link: "/" },
    { title: "contactUs.breadCrumbs.main" },
  ];

  return (
    <MainTemplate>
      <Banner
        subTitle="contactUs.banner.subTitle"
        title="contactUs.banner.title"
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

export default ContactUs;
