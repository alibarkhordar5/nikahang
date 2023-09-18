import { FC } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  Stack,
  Button,
} from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
import { ModeSwitcher } from "src/components/atoms/ModeSwitcher";
import { LanguageSwitcher } from "src/components/atoms/LanguageSwitcher";
import { MainIcon } from "src/components/atoms/MainIcon";

import { HeaderItem } from "./HeaderItem";
import { ProfileButton } from "./ProfileButton";
import { pages } from "./constant";
import { MobileDrawer } from "./MobileDrawer";
import { useTranslation } from "react-i18next";

export const Header: FC = () => {
  const { t } = useTranslation("header");
  const isLoggedIn = true;

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "inherit" }}>
      <Container maxWidth="xl" sx={{ py: 0, px: 1 }}>
        <Toolbar disableGutters sx={{ alignItems: "center", width: "100%" }}>
          <MainIcon sx={{ display: { xs: "none", md: "flex" } }} />
          <MobileDrawer />
          <MainIcon
            sx={{
              flexGrow: { xs: 0, md: 1 },
              display: { xs: "flex", md: "none" },
            }}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginInlineStart: 4,
            }}
          >
            {pages.map((page) => (
              <HeaderItem item={page} key={page.title} />
            ))}
          </Box>
          <Stack
            direction="row"
            spacing={{ xs: 0, md: 1 }}
            display={{ xs: "none", md: "flex" }}
          >
            {isLoggedIn ? (
              <ProfileButton />
            ) : (
              <IconButton
                color="primary"
                sx={{ border: 1, display: { xs: "none", md: "flex" } }}
              >
                <ExitToApp />
              </IconButton>
            )}
            <ModeSwitcher />
            <LanguageSwitcher />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
