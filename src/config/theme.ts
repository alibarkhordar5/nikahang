import { PaletteColorOptions, PaletteColor, createTheme } from "@mui/material";
import { breakpointGenerator } from "src/utils/breakpointGenerator";

const customBreakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

declare module "@mui/material/styles" {
  interface TypographyVariants {
    title0: React.CSSProperties;
    title1: React.CSSProperties;
    title2: React.CSSProperties;
    title3: React.CSSProperties;
    title4: React.CSSProperties;
    title5: React.CSSProperties;
    subtitle0: React.CSSProperties;
    subtitle1: React.CSSProperties;
    subtitle2: React.CSSProperties;
    text0: React.CSSProperties;
    text1: React.CSSProperties;
    text2: React.CSSProperties;
    text3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    title0?: React.CSSProperties;
    title1?: React.CSSProperties;
    title2?: React.CSSProperties;
    title3?: React.CSSProperties;
    title4?: React.CSSProperties;
    title5?: React.CSSProperties;
    subtitle0?: React.CSSProperties;
    subtitle1?: React.CSSProperties;
    subtitle2?: React.CSSProperties;
    text0?: React.CSSProperties;
    text1?: React.CSSProperties;
    text2?: React.CSSProperties;
    text3?: React.CSSProperties;
  }

  interface Palette {
    customPalette: PaletteColor & {
      headerBg: string;
      flexibleText: string;
      flexibleBg: string;
      flexibleBoxShadow: string;
      transparentBg: string;
      bannerGray: string;
      reverse: string;
    };
  }

  interface PaletteOptions {
    customPalette: PaletteColorOptions & {
      headerBg: string;
      flexibleText: string;
      flexibleBg: string;
      flexibleBoxShadow: string;
      transparentBg: string;
      subtitleGray: string;
      reverse: string;
    };
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title0: true;
    title1: true;
    title2: true;
    title3: true;
    title4: true;
    title5: true;
    subtitle0: true;
    subtitle1: true;
    subtitle2: true;
    text0: true;
    text1: true;
    text2: true;
    text3: true;
  }
}

export const generateTheme = (mode: "dark" | "light", lan: "fa" | "en") => {
  const fontFamily = lan === "fa" ? "dana VF" : "Playfair Display";
  return createTheme({
    breakpoints: { values: customBreakpoints },
    direction: lan === "fa" ? "rtl" : "ltr",
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: { main: "#4361ee", light: "#4cc9f0", dark: "#0b1e75" },
            secondary: { main: "#3a4045", light: "#EEEEEE", dark: "#212529" },
            customPalette: {
              main: "#6c757d",
              light: "#e6e6e6",
              dark: "#343a40",
              headerBg: "#2b2b2b",
              flexibleText: "#22262A",
              flexibleBg: "rgb(255, 255, 255)",
              flexibleBoxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
              transparentBg: "rgba(0, 0, 0, 0.5)",
              subtitleGray: "#aeb1be",
              reverse: "#fff",
            },
          }
        : {
            primary: { main: "#4895EF", light: "#4cc9f0", dark: "#3a0ca3" },
            secondary: { main: "#CED4DA", light: "#212529", dark: "#EEEEEE" },
            customPalette: {
              main: "#6c757d",
              light: "#343a40",
              dark: "#e6e6e6",
              headerBg: "#2b2b2b",
              flexibleText: "#e9ecef",
              flexibleBg: "rgb(20, 20, 20)",
              flexibleBoxShadow: "0px 0px 5px rgba(150, 150, 150, 0.3)",
              transparentBg: "rgba(255, 255, 255, 0.4)",
              subtitleGray: "#aeb1be",
              reverse: "#000",
            },
          }),
    },

    typography: {
      fontFamily,
      button: { textTransform: "capitalize" },
      title0: { ...breakpointGenerator([25, 34, 40]) },
      title1: { ...breakpointGenerator([20, 25, 34]) },
      title2: { ...breakpointGenerator([18, 22, 28]) },
      title3: { ...breakpointGenerator([16, 20, 24]) },
      subtitle0: { ...breakpointGenerator([16, 20, 22]) },
      subtitle1: { ...breakpointGenerator([14, 18, 20]) },
      subtitle2: { ...breakpointGenerator([12, 16, 18]) },
      text0: { ...breakpointGenerator([10, 14, 16]) },
      text1: { ...breakpointGenerator([8, 12, 14]) },
      text2: { ...breakpointGenerator([6, 10, 12]) },
      text3: { ...breakpointGenerator([6, 8, 10]) },
    },

    components: {
      MuiTextField: { defaultProps: { size: "small" } },
      MuiTypography: { defaultProps: { fontFamily } },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          contained: { fontWeight: "bold", fontFamily },
          outlined: { fontWeight: "bold", fontFamily },
          text: { fontWeight: "bold" },
        },
      },
      MuiBottomNavigationAction: { styleOverrides: { label: { fontFamily } } },
    },
  });
};

export default generateTheme;
