import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { generateTheme } from "src/config/theme";
import createEmotionCache from "src/utils/createEmotionCache";
import { useRouter } from "next/router";
import { createContext, useEffect, useMemo, useState } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

const clientSideEmotionCache = createEmotionCache();

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const MyApp = (props: MyAppProps) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const router = useRouter();
  const isPersian = router.locale === "fa";

  useEffect(() => {
    if (isPersian) {
      document.dir = "rtl";
      document.body.dir = "rtl";
    } else {
      document.dir = "ltr";
      document.body.dir = "ltr";
    }
  }, [isPersian]);

  const {
    Component,
    emotionCache = isPersian ? cacheRtl : clientSideEmotionCache,
    pageProps,
  } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{isPersian ? "نیکاهنگ" : "Nikahang"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider
        theme={generateTheme(mode, (router.locale || "fa") as "en" | "fa")}
      >
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ColorModeContext.Provider value={colorMode}>
          <Component {...pageProps} />
        </ColorModeContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default appWithTranslation(MyApp);
