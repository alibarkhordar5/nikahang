import { FC, useContext } from "react";
import { LightMode, NightsStay } from "@mui/icons-material";
import { IconButton, useTheme } from "@mui/material";
import { ColorModeContext } from "pages/_app";

export const ModeSwitcher: FC = () => {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);

  return (
    <IconButton
      color="primary"
      sx={{ border: 1, display: { xs: "none", md: "flex" } }}
      onClick={toggleColorMode}
    >
      {theme.palette.mode === "dark" ? <LightMode /> : <NightsStay />}
    </IconButton>
  );
};
