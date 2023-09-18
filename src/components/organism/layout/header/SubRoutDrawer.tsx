import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { HeaderItemType } from "./constant";

type SubRoutDrawerPropsType = { item: HeaderItemType };

export const SubRoutDrawer: FC<SubRoutDrawerPropsType> = ({ item }) => {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation("header");

  return (
    <>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemText primary={t(item.title as any)} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.subRoutes?.map(({ title, link }) => (
            <ListItemButton key={title} sx={{ pl: 4 }}>
              <ListItemText primary={t(title as any)} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};
