import { InputBase, styled } from "@mui/material";
import { FC } from "react";
import { useIsPersian } from "../hooks/isPersian";
import { Search as SearchIcon } from "@mui/icons-material";
import { useTranslation } from "next-i18next";

const Search = styled("div")(({ theme }) => {
  return {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.secondary.light,
    "&:hover": { backgroundColor: theme.palette.secondary.main },
    marginRight: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(1),
      width: "auto",
    },
  };
});

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => {
  const isPersian = useIsPersian();

  return {
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      [isPersian ? "paddingLeft" : "paddingRight"]: `calc(1em + ${theme.spacing(
        4
      )})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": { width: "20ch" },
      },
    },
  };
});

export const SearchBar: FC = () => {
  const { t } = useTranslation("common");

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={t("search") + "…"}
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};
