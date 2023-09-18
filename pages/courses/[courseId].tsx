import { useRouter } from "next/router";
import { Grid, Box, Typography, Chip, Button, Container } from "@mui/material";
import { getCourseById } from "src/components/organism/course/constant";
import { useTranslation } from "react-i18next";
import { MainTemplate } from "src/components/organism/templates/MainTemplate";
import { GetServerSideProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ClassTimeTable } from "src/components/organism/course/CustomTable";
import { Banner } from "src/components/atoms/Banner";
import { TeacherSection } from "src/components/organism/course/TeacherSection";

const CoursePage: NextPage = () => {
  const { t } = useTranslation("course");
  const params = useRouter().query;
  const course = getCourseById(params.courseId as string);
  const breadCrumbs = [
    { title: "breadCrumbs.home", link: "/" },
    {
      title: "courses.breadCrumbs.main",
      link: "/courses",
    },
    { title: t(course?.category as any) },
  ];

  return (
    <MainTemplate>
      <>
        <Banner
          subTitle="courses.banner.subTitle"
          title="courses.banner.title"
          breadCrumbs={breadCrumbs}
          imageUrl="/images/instruments/banner-bg.jpg"
        />
        <Container maxWidth="lg">
          <Box my={3}>
            <Grid mt={3} container columnSpacing={3}>
              <Grid
                sx={{ height: { xs: "100%", md: 360 } }}
                item
                xs={12}
                md={6}
              >
                <Box position="relative">
                  {/* <img
                    width="50px"
                    height="50px"
                    style={{
                      position: "absolute",
                      bottom: "-10px",
                      left: "-10px",
                    }}
                    src="/images/course/under_image.svg"
                  /> */}
                  <img
                    src={course?.image}
                    width="100%"
                    height="100%"
                    style={{ borderRadius: "8px" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography display="block" my={1} variant="title1">
                  {course?.title}
                </Typography>
                <Typography
                  display="block"
                  sx={{ overflow: "auto", height: { xs: 150, md: 230 } }}
                  variant="title5"
                >
                  {course?.description}
                </Typography>
                <Box
                  sx={{
                    mt: 3,
                    display: "flex",
                    alignItems: "center",
                    px: 3,
                    justifyContent: "space-between",
                  }}
                >
                  <Button size="large" variant="contained">
                    {t("getStarted")}
                  </Button>
                  <Chip
                    color="primary"
                    variant="outlined"
                    sx={{ fontSize: 18, py: 2.6, borderRadius: 12 }}
                    label={t(course?.category as any)}
                  />
                </Box>
              </Grid>
            </Grid>
            <TeacherSection />
            <Typography
              sx={{ textAlign: "center", py: 2 }}
              display="block"
              variant="title0"
            >
              {`${t("classesOf" as any)} ${params.courseId}`}
            </Typography>
            <ClassTimeTable course={course} />
          </Box>
        </Container>
      </>
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
      "course",
      "header",
      "teachers",
      "footer",
    ])),
  },
});

export default CoursePage;
