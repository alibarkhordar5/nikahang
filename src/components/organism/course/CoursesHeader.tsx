import { ChangeEvent, FC, MouseEvent, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { FilterAltOutlined } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { CustomSearchBox } from "src/components/atoms/CustomSearchBox";
    
const categories = ["GUITAR", "DRUM", "PIANO", "VIOLIN"];

type CoursesHeaderPropsType = {
  search: string;
  setSearch: (search: string) => void;
  filters: { [key: string]: boolean };
  setFilters: (list: { [key: string]: boolean }) => void;
};

const CoursesHeader: FC<CoursesHeaderPropsType> = ({
  search,
  setSearch,
  filters,
  setFilters,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  const handleJobChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [event.target.name]: event.target.checked });
  };

  const { t } = useTranslation("course");

  return (
    <>
      <Divider />
      <Box sx={{ py: 2, display: "flex", justifyContent: "space-between" }}>
        <Typography variant="title0">{t("title")}</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            <IconButton onClick={handleClick}>
              <FilterAltOutlined />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
            >
              {categories.map((item) => (
                <MenuItem key={item} sx={{ py: 0, pr: 1 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={filters[item]}
                        onChange={handleJobChange}
                        name={item}
                      />
                    }
                    label={item}
                  />
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <CustomSearchBox search={search} setSearch={setSearch} />
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default CoursesHeader;
