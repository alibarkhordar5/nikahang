import { FC } from "react";
import {
  Box,
  Typography,
  Breadcrumbs,
  Link,
  Container,
  Stack,
} from "@mui/material";
import { ChevronRight, ChevronLeft } from "@mui/icons-material";
import { useIsPersian } from "src/components/hooks/isPersian";
import { useTranslation } from "react-i18next";

type BannerPropsType = {
  subTitle: string;
  title: string;
  breadCrumbs: { title: string; link?: string }[];
  imageUrl: string;
};

export const Banner: FC<BannerPropsType> = ({
  subTitle,
  title,
  breadCrumbs,
  imageUrl,
}) => {
  const isPersian = useIsPersian();
  const { t } = useTranslation();

  return (
    <Stack
      justifyContent="center"
      minHeight={250}
      sx={{
        backgroundImage: `url(${imageUrl})`,
        pt: { xs: 3, md: 9 },
        pb: { xs: 0, md: 3 },
        px: 1,
      }}
    >
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Box
            border={1}
            borderColor="customPalette.subtitleGray"
            width={{ xs: 30, md: 50 }}
          ></Box>
          <Typography
            variant="subtitle1"
            sx={{
              color: "customPalette.subtitleGray",
              position: "relative",
              letterSpacing: 4,
            }}
          >
            {t(subTitle as any)}
          </Typography>
        </Stack>
        <Typography variant="h2" sx={{ mt: 2, color: "#fff" }}>
          {t(title as any)}
        </Typography>
        <Breadcrumbs
          separator={isPersian ? <ChevronLeft /> : <ChevronRight />}
          color="#aeb1be"
          sx={{ mt: { xs: 5, md: 7 } }}
        >
          {breadCrumbs.map((item) =>
            item.link ? (
              <Link
                key={item.title}
                variant="h6"
                href={item.link}
                color="#aeb1be"
                underline="none"
                sx={{ mx: 1, "&:hover": { color: "#fff" } }}
              >
                {t(item.title as any)}
              </Link>
            ) : (
              <Typography
                key={item.title}
                variant="h6"
                sx={{ color: "customPalette.bannerGray", mx: 1 }}
              >
                {t(item.title as any)}
              </Typography>
            )
          )}
        </Breadcrumbs>
      </Container>
    </Stack>
  );
};
