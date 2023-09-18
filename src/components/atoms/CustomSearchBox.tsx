import { FC, useEffect, useState } from "react";
import {
  ClickAwayListener,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useIsPersian } from "../hooks/isPersian";
import { useTranslation } from "react-i18next";

type CustomSearchBoxPropsType = {
  search: string;
  setSearch: (search: string) => void;
};

export const CustomSearchBox: FC<TextFieldProps & CustomSearchBoxPropsType> = ({
  search,
  setSearch,
  ...props
}) => {
  const { t } = useTranslation()
  const [click, setClick] = useState(false);
  const [hover, setHover] = useState(false);
  const [showFullSize, setShowFullSize] = useState(false);

  useEffect(() => {
    if (props.value) setShowFullSize(true);
    else {
      if (click) setShowFullSize(true);
      else hover ? setShowFullSize(true) : setShowFullSize(false);
    }
  }, [click, hover, props.value]);

  return (
    <ClickAwayListener onClickAway={() => setClick(false)}>
      <TextField
        onMouseLeave={() => setHover(false)}
        onMouseEnter={() => !props.disabled && setHover(true)}
        placeholder={showFullSize ? t("searchBar" as any) : ""}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          direction: "rtl",
          transition: "0.7s",
          width: showFullSize ? { xs: "70%", sm: 250 } : 50,
          "&>.MuiInputBase-root": {
            backgroundColor: "white",
            "&> fieldset": {
              border: showFullSize
                ? "1px solid #aaa !important"
                : "none !important",
            },
          },
        }}
        size="small"
        onClick={() => !props.disabled && setClick(true)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ opacity: props.disabled ? 0.5 : 1 }} />
            </InputAdornment>
          ),
        }}
        {...props}
      />
    </ClickAwayListener>
  );
};
