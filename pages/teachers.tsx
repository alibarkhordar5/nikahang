import { GetServerSideProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import {
  teachers,
  breadCrumbs,
} from "src/components/organism/teachers/constant";
import { Container, Typography, Grid } from "@mui/material";
import { Banner } from "src/components/atoms/Banner";
import { MainTemplate } from "src/components/organism/templates/MainTemplate";
import { TeacherCard } from "src/components/organism/teachers/TeacherCard";

const Teachers: NextPage = () => {
  const { t } = useTranslation("teachers");

  return (
    <>
      <MainTemplate>
        <>
          <Banner
            subTitle="teachers.banner.subTitle"
            title="teachers.banner.title"
            breadCrumbs={breadCrumbs}
            imageUrl="/images/instruments/banner-bg.jpg"
          />
          <Container maxWidth="lg">
            <Typography variant="h3" sx={{ mb: 3, mt: 5, textAlign: "center" }}>
              {t("ourTeachers")}
            </Typography>
            <Grid container spacing={5} pb={5}>
              {teachers.map((teacher) => (
                <TeacherCard teacher={teacher} />
              ))}
            </Grid>
          </Container>
        </>
      </MainTemplate>
    </>
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
      "teachers",
    ])),
  },
});

export default Teachers;
