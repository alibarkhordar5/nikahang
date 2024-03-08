import { FC, useMemo } from "react";
import {
  BoxProps,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Link from "next/link";

type MainIconPropsType = { imgUrl?: string; color?: string };

export const MainIcon: FC<BoxProps & MainIconPropsType> = ({
  imgUrl,
  color,
  ...props
}) => {
  const { t } = useTranslation("common");
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  const logoUrl = `/images/logo/music-logo-${
    theme.palette.mode === "light" ? "black" : "white"
  }-fit.png`;

  const title = useMemo(() => t("title"), [t]);

  return (
    <Stack
      width="fit-content"
      direction="row"
      spacing={1}
      component={Link}
      href="/"
      {...props}
      sx={{
        ...props.sx,
        color: "primary.main",
        textDecoration: "none",
        alignItems: "center",
      }}
    >
      <Image
        src={imgUrl || logoUrl}
        alt="music logo"
        width={isMd ? 30 : 25}
        height={isMd ? 30 : 25}
      />
      <Typography
        variant="h6"
        noWrap
        sx={{ fontWeight: 700, color: color || "primary.main" }}
      >
        {title}
      </Typography>
    </Stack>
  );
};
