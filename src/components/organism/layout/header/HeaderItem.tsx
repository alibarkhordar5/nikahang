import { FC } from "react";
import { HeaderItemType } from "./constant";
import {
  Box,
  Button,
  MenuItem,
  MenuList,
  Stack,
  Tooltip,
  useTheme,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import { KeyboardArrowDown } from "@mui/icons-material";
import Link from "next/link";

type HeaderItemPropsType = { item: HeaderItemType };

export const HeaderItem: FC<HeaderItemPropsType> = ({ item }) => {
  const { t } = useTranslation("header");
  const theme = useTheme();
  const { pathname } = useRouter();

  const instrumentImage =
    theme.palette.mode === "light"
      ? { src: "violin-4.jpeg", width: 200, height: 320 }
      : { src: "piano-1.jpeg", width: 180, height: 300 };

  if (item.subRoutes) {
    return (
      <Tooltip
        placement="bottom-start"
        arrow
        sx={{ bgcolor: "inherit" }}
        componentsProps={{
          popper: {
            sx: {
              "& .MuiTooltip-tooltip": {
                marginTop: "14px !important",
                display: "table",
                padding: 0.5,
                background: theme.palette.customPalette.flexibleBg,
                boxShadow: theme.palette.customPalette.flexibleBoxShadow,
              },
              "& .MuiTooltip-arrow::before": { color: "#AAA" },
              "& .MuiMenuItem-root": {
                borderRadius: 1,
                "& > *:not(:last-child)": { mb: 1 },
              },
              "& .MuiMenuItem-root:hover": {
                background: theme.palette.customPalette.light,
              },
            },
          },
        }}
        title={
          <Stack direction="row" spacing={1}>
            <MenuList>
              {item.subRoutes.map(({ title, link }, index) => (
                <Link
                  key={index}
                  href={link}
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem
                    key={title}
                    sx={{ color: theme.palette.secondary.main, minWidth: 200 }}
                  >
                    {t(title as any)}
                  </MenuItem>
                </Link>
              ))}
            </MenuList>
            {item.imageUrl && (
              <Box
                sx={{
                  position: "relative",
                  width: instrumentImage.width,
                  height: instrumentImage.height,
                }}
              >
                <Image
                  style={{ width: "100%", borderRadius: 3 }}
                  src={"/images/instruments/" + instrumentImage.src}
                  alt="guitar"
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 1200px"
                />
              </Box>
            )}
          </Stack>
        }
      >
        <Button
          key={item.title}
          component={Link}
          href={item.link}
          color={
            pathname.includes(item.title.toLowerCase())
              ? "primary"
              : "secondary"
          }
          endIcon={<KeyboardArrowDown />}
          sx={{
            my: 2,
            fontSize: 15,
            "&.MuiButton-endIcon": { mr: 0.5, ml: 0 },
          }}
        >
          {t(item.title as any)}
        </Button>
      </Tooltip>
    );
  } else {
    return (
      <Button
        key={item.title}
        component={Link}
        href={item.link}
        color={
          pathname.includes(item.title.toLowerCase()) ? "primary" : "secondary"
        }
        sx={{ my: 2, fontSize: 15 }}
      >
        {t(item.title as any)}
      </Button>
    );
  }
};
