import { FC, useEffect, useState } from "react";
import { Box, Paper, useTheme } from "@mui/material";
import { Header } from "src/components/organism/layout/header/Header";
import { Footer } from "../layout/footer/Footer";

export type MainTemplatePropsType = { children?: JSX.Element };

export const MainTemplate: FC<MainTemplatePropsType> = ({ children }) => {
  const [isClient, setIsClient] = useState(false)
  const theme = useTheme();

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
        isClient ? 
        <>
          <Box
            component={Paper}
            borderRadius={0}
            width="100%"
            height="100vh"
            maxHeight="100vh"
            position="relative"
            overflow="auto"
            sx={{ overflowY: "auto", overflowX: "hidden" }}
          >
            <Header />
            {children}
            <Footer />
          </Box>
        </> 
        : 
        <></>
  );
};
