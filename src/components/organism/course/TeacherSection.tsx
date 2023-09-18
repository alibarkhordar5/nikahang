import { useState, useEffect, FC } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useIsPersian } from "src/components/hooks/isPersian";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { TeacherCard } from "src/components/organism/teachers/TeacherCard";
import { passTeacherData } from "src/components/organism/teachers/constant";
import { getCourseById } from "src/components/organism/course/constant";
import { useTranslation } from "react-i18next";

export const TeacherSection: FC = () => {
  const isPersian = useIsPersian();
  const theme = useTheme();
  const { t } = useTranslation("course");

  const params = useRouter().query;
  const course = getCourseById(params.courseId as string);

  const [slidesPerView, setSlidesPerView] = useState(3);
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));

  useEffect(() => {
    if (isXs) {
      setSlidesPerView(1);
    } else if (isSm) {
      setSlidesPerView(1);
    } else if (isMd) {
      setSlidesPerView(2);
    } else if (isLg) {
      setSlidesPerView(2);
    } else if (isXl) {
      setSlidesPerView(3);
    }
  }, [isXs, isSm, isMd, isLg, isXl]);

  return (
    <Box px={{ xs: 0.5, md: 5 }} py={5}>
      <Typography
        textAlign={{ xs: "center", md: "start" }}
        display="block"
        variant="title0"
      >
        {`${t("teachersOf" as any)} ${params.courseId}`}
      </Typography>
      <Swiper
        modules={[Pagination]}
        style={{ paddingTop: "20px", paddingBottom: "50px" }}
        dir={isPersian ? "rtl" : undefined}
        slidesPerView={slidesPerView}
        pagination={true}
        key={isPersian ? "rtl" : "ltr"}
      >
        {course?.teachers.map((id) => (
          <SwiperSlide key={id}>
            <TeacherCard teacher={passTeacherData(id)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
