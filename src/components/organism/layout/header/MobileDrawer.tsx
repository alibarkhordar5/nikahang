import { FC, Fragment, useState } from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import { Close, Menu } from "@mui/icons-material";
import { pages } from "./constant";
import { useTranslation } from "react-i18next";
import { SubRoutDrawer } from "./SubRoutDrawer";
import { MainIcon } from "src/components/atoms/MainIcon";

export const MobileDrawer: FC = () => {
  const { t } = useTranslation("header");

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  const isLoggedIn = true;

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton size="small" onClick={toggleDrawer} color="primary">
        <Menu />
      </IconButton>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          p={1}
        >
          <MainIcon />
          {isLoggedIn ? (
            <IconButton size="small" onClick={() => setIsOpen(false)}>
              <Close />
            </IconButton>
          ) : (
            <Button variant="outlined" size="small">
              {t("login")}
            </Button>
          )}
        </Stack>
        <List component="nav" sx={{ width: 300 }}>
          {pages.map((item) => (
            <Fragment key={item.title}>
              {item.subRoutes ? (
                <SubRoutDrawer item={item} />
              ) : (
                <ListItemButton>
                  <ListItemText primary={t(item.title as any)} />
                </ListItemButton>
              )}
            </Fragment>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
