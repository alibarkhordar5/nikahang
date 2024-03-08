import { FC } from "react";
import { TeacherType } from "./constant";
import {
  Box,
  Typography,
  Modal,
  Avatar,
  IconButton,
  useTheme,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { ModalTabs } from "./ModalTabs";
import { useTranslation } from "react-i18next";

type CardAboutPropsType = {
  teacher: TeacherType;
  open: boolean;
  handleClose: () => void;
};

export const CardAbout: FC<CardAboutPropsType> = ({
  teacher,
  open,
  handleClose,
}) => {
  const { t } = useTranslation("teachers");
  const theme = useTheme();

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "customPalette.flexibleBg",
          px: 0.5,
          borderRadius: 2,
          width: "350px",
          height: "500px"
        }}
      >
        <IconButton onClick={handleClose} sx={{ mt: 0.5 }}>
          <Close />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              width: 90,
              height: 90,
              border: `3px solid ${theme.palette.primary.main}`,
            }}
            src={teacher.avatar}
          />
          <Box sx={{ p: 2 }}>
            <Typography variant="title3">{t(teacher.name as any)}</Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: "customPalette.subtitleGray" }}
            >
              {t(teacher.role as any)}
            </Typography>
          </Box>
        </Box>
        <ModalTabs teacher={teacher} />
      </Box>
    </Modal>
  );
};
