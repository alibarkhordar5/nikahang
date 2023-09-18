import { GetServerSideProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MainTemplate } from "src/components/organism/templates/MainTemplate";

const Blog: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <MainTemplate>
      <div>{t("blog.test")}</div>
    </MainTemplate>
  );
};

type Props = {};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "fa", [
      "common",
      "header",
      "footer",
    ])),
  },
});

export default Blog;
