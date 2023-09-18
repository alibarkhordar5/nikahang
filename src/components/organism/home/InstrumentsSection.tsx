import { FC, useMemo } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import { useIsPersian } from "src/components/hooks/isPersian";

export const InstrumentsSection: FC = () => {
  const { t } = useTranslation();

  const isPersian = useIsPersian();

  const SwiperContent = useMemo(
    () => dynamic(() => import("./LazySwiper"), { ssr: false }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isPersian]
  );

  return (
    <Container maxWidth="xl" sx={{ mb: 5 }}>
      <Grid container alignItems="center" gap={2}>
        <Grid item md sx={{ display: { xs: "none", md: "flex" } }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: 400, sm: 500, md: 700 },
            }}
            zIndex={2}
          >
            <Image
              style={{ maxWidth: "100%", objectFit: "contain" }}
              src="/images/instruments/guitar-4.jpeg"
              alt="Guitar"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="title2">{t("home.instrument.title")}</Typography>
          <Typography variant="subtitle2" sx={{ mb: 3 }}>
            {t("home.instrument.subtitle")}
          </Typography>
          <SwiperContent />
        </Grid>
      </Grid>
    </Container>
  );
};
