import { useIsPersian } from "src/components/hooks/isPersian";
import { InstrumentCard } from "./InstrumentCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { instruments } from "./constants";
import { useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

export default function LazySwiper() {
  const isPersian = useIsPersian();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));

  // console.log("isXs: ", isXs);
  // console.log("isSm: ", isSm);
  // console.log("isMd: ", isMd);
  // console.log("isLg: ", isLg);
  // console.log("isXl: ", isXl);

  const [slidesPerView, setSlidesPerView] = useState(2.2);

  // Update slidesPerView whenever the screen size changes
  useEffect(() => {
    if (isXs) {
      setSlidesPerView(1.1);
    } else if (isSm) {
      setSlidesPerView(1.7);
    } else if (isMd) {
      setSlidesPerView(2.2);
    } else if (isLg) {
      setSlidesPerView(1.8);
    } else if (isXl) {
      setSlidesPerView(2.2);
    }
  }, [isXs, isSm, isMd, isLg, isXl]);

  return (
    <Swiper
      dir={isPersian ? "rtl" : undefined}
      slidesPerView={slidesPerView}
      pagination={{ clickable: true }}
    >
      {instruments.map(({ name, description, imgUrl, link }, index) => (
        <SwiperSlide key={index}>
          <InstrumentCard
            name={name}
            description={description}
            imgUrl={imgUrl}
            link={link}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
