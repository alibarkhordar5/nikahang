import { FC, useState } from "react";
import { TeacherType } from "./constant";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Avatar,
  Button,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { CardAbout } from "./CardAbout";
import { Info } from "@mui/icons-material";

type TeacherCardPropsType = {
  teacher: TeacherType;
};

export const TeacherCard: FC<TeacherCardPropsType> = ({ teacher }) => {
  const { t } = useTranslation("teachers");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();

  return (
    <>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card
          elevation={6}
            sx={{
              maxWidth: "300px",
              py: 4,
              px: 9,
              textAlign: "center",
            }}
          >
            <CardHeader
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              avatar={
                <Avatar
                  sx={{ ml: 2, width: 100, height: 100 }}
                  src={teacher.avatar}
                />
              }
            />
            <CardContent>
              <Typography variant="title3">{t(teacher.name as any)}</Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "customPalette.subtitleGray" }}
              >
                {t(teacher.role as any)}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={handleOpen}
                startIcon={<Info />}
                sx={{ px: 5 }}
              >
                {t("cardButton")}
              </Button>
              <CardAbout
                teacher={teacher}
                open={open}
                handleClose={handleClose}
              />
            </CardActions>
          </Card>
        </Grid>
    </>
  );
};