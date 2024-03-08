import { FC } from "react";
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useIsPersian } from "src/components/hooks/isPersian";

type HeroSectionPropsType = {
  title: string;
  subtitle: string;
  imgUrl: string;
  button: { text: string; link: string };
};

export const HeroSectionItem: FC<HeroSectionPropsType> = ({
  title,
  subtitle,
  imgUrl,
  button,
}) => {
  const { t } = useTranslation("common");
  const isPersian = useIsPersian();

  return (
    <Box
      sx={{
        bgcolor: "#DDD",
        direction: "ltr",
        backgroundImage: `url(/images/instruments/${imgUrl})`,
        height: { xs: 220, sm: 300, md: 400, lg: 500, xl: 700 },
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <Stack spacing={2}>
        <Stack>
          <Typography variant="title0" fontWeight={700} lineHeight={1.2}>
            {t(title as any)}
          </Typography>
          <Typography variant="title4">{t(subtitle as any)}</Typography>
        </Stack>
        <Box>
          <Button
            variant="contained"
            href={button.link}
            sx={{
              fontSize: { xs: "0.7rem", md: "1rem" },
              "& .MuiButton-endIcon": {
                transition: "transform 0.5s",
                transform: "translate(-3px, 1px)",
              },
              "&:hover .MuiButton-endIcon": {
                transform: "translate(5px, 1px)",
              },
            }}
            endIcon={
              isPersian ? (
                <KeyboardDoubleArrowLeft />
              ) : (
                <KeyboardDoubleArrowRight />
              )
            }
          >
            {t(button.text as any)}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
