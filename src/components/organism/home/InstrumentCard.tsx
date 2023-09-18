import { FC } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import { useTranslation } from "next-i18next";
import { useIsPersian } from "src/components/hooks/isPersian";
import Link from "next/link";

type InstrumentCardPropsType = {
  name: string;
  description: string;
  imgUrl: string;
  link: string;
};

export const InstrumentCard: FC<InstrumentCardPropsType> = ({
  name,
  description,
  imgUrl,
  link,
}) => {
  const { t } = useTranslation();
  const isPersian = useIsPersian();

  return (
    <Card sx={{ position: "relative", minHeight: 450, width: 300 }}>
      <CardMedia
        sx={{ height: 450, width: 300 }}
        image={imgUrl}
        title={t(name as any)}
      />
      <CardContent
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          py: "16px !important",
          p: 2,
          backgroundColor: "customPalette.transparentBg",
          color: "secondary.light",
        }}
      >
        <Stack>
          <Typography variant="title4" fontWeight={600}>
            {t(name as any)}
          </Typography>
          <Typography variant="text0">{t(description as any)}</Typography>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            component={Link}
            href={link}
            sx={{
              textDecoration: "none",
              color: "secondary.light",
              py: 1,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            <Typography>
              {t("home.instrument.blogButton.1")}{" "}
              {t(name as any).toLocaleLowerCase()}{" "}
              {t("home.instrument.blogButton.2")}
            </Typography>
            {isPersian ? (
              <ArrowBackIos sx={{ fontSize: 14 }} />
            ) : (
              <ArrowForwardIos sx={{ fontSize: 14 }} />
            )}
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="end" sx={{ mt: 2 }}>
          <Button
            variant="contained"
            size="small"
            sx={{ zIndex: 3 }}
            endIcon={
              isPersian ? (
                <KeyboardDoubleArrowLeft sx={{ mr: 0.5, ml: -1 }} />
              ) : (
                <KeyboardDoubleArrowRight />
              )
            }
          >
            {t("home.instrument.startLearning")}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
