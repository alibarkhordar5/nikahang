import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Avatar, IconButton } from "@mui/material";
import { useIsPersian } from "../hooks/isPersian";

export const LanguageSwitcher: FC = () => {
  const isPersian = useIsPersian();

  const changeTo = isPersian ? "en" : "fa";

  const router = useRouter();

  return (
    <IconButton
      color="primary"
      sx={{
        border: 1,
        p: 0,
        [isPersian ? "pt" : "pb"]: 0.5,
        display: { xs: "none", md: "flex" },
      }}
      component={Link}
      href={router.asPath}
      locale={changeTo}
    >
      <Avatar
        sx={{
          bgcolor: "inherit",
          color: "inherit",
          height: 35,
          fontWeight: 600,
        }}
      >
        {changeTo.toUpperCase()}
      </Avatar>
    </IconButton>
  );
};
