import { FC, useState } from "react";
import { TeacherType } from "./constant";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import { CustomTimeLine } from "./CustomTimeline";
import { AccessTimeFilled, Info } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

type ModalTabsPropsType = {
  teacher: TeacherType;
};

export const ModalTabs: FC<ModalTabsPropsType> = ({ teacher }) => {
  const { t } = useTranslation("teachers");
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab
          sx={{ display: "flex", flexDirection: "row" }}
          icon={<Info />}
          label={
            <Typography mx={1} variant="subtitle1">
              {t("modalTab1")}
            </Typography>
          }
          {...a11yProps(0)}
        />
        <Tab
          sx={{ display: "flex", flexDirection: "row" }}
          icon={<AccessTimeFilled />}
          label={
            <Typography mx={1} variant="subtitle1">
              {t("modalTab2")}
            </Typography>
          }
          {...a11yProps(1)}
        />
      </Tabs>
      <Box sx={{ maxHeight: "250px", overflow: "auto" }}>
        <CustomTabPanel value={value} index={0}>
          <CustomTimeLine teacher={teacher} type="info" />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <CustomTimeLine teacher={teacher} type="classes" />
        </CustomTabPanel>
      </Box>
    </Box>
  );
};
