import { Box, Container, Typography, Grid } from "@mui/material";
import { useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { Banner } from "src/components/atoms/Banner";
import { MainTemplate } from "src/components/organism/templates/MainTemplate";
import { coursesData } from "src/components/organism/course/constant";
import { CourseCard } from "src/components/organism/course/CourseCard";
import CoursesHeader from "src/components/organism/course/CoursesHeader";

const Courses: NextPage = () => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<{ [key: string]: boolean }>({
    PIANO: true,
    VIOLIN: true,
    DRUM: true,
    GUITAR: true,
  });

  const breadCrumbs = [
    { title: "breadCrumbs.home", link: "/" },
    { title: "courses.breadCrumbs.main" },
  ];
  const { t } = useTranslation("course");

  const filteredList = coursesData
    .filter((course) =>
      course.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((course) => {
      if (filters.GUITAR && course.category === "GUITAR") return true;
      if (filters.DRUM && course.category === "DRUM") return true;
      if (filters.PIANO && course.category === "PIANO") return true;
      if (filters.VIOLIN && course.category === "VIOLIN") return true;
      return false;
    });

  return (
    <MainTemplate>
      <>
        <Banner
          subTitle="courses.banner.subTitle"
          title="courses.banner.title"
          breadCrumbs={breadCrumbs}
          imageUrl="/images/instruments/banner-bg.jpg"
        />

        <Box py={5}>
          <Container maxWidth="xl">
            <CoursesHeader
              search={search}
              setSearch={setSearch}
              filters={filters}
              setFilters={setFilters}
            />
            <Grid container spacing={5} mt={3}>
              {filteredList.length !== 0 ? (
                filteredList.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))
              ) : (
                <Typography sx={{ mx: "auto", py: 5 }} variant="h5">
                  {t("filterEmpty")}
                </Typography>
              )}
            </Grid>
          </Container>
        </Box>
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
      "footer",
    ])),
  },
});

export default Courses;
