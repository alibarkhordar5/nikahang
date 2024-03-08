import { FC } from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export const AboutSection: FC = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl" sx={{ mb: 5, mt: { xs: 5, md: 0 } }}>
      <Grid container alignItems="center" gap={2}>
        <Grid item xs={12} md>
          <Stack textAlign="center" alignItems="center">
            <Typography variant="title2" fontWeight={700} gutterBottom>
              {t("home.about.title")}
            </Typography>
            <Typography
              variant="subtitle2"
              textAlign="justify"
              maxWidth={{ xs: 420, md: 570 }}
            >
              {t("home.about.text")}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: 220, sm: 260, md: 380 },
            }}
            zIndex={2}
          >
            <Image
              style={{ maxWidth: "100%", objectFit: "contain" }}
              src="/images/instruments/music-academy.jpeg"
              alt="About Us"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
