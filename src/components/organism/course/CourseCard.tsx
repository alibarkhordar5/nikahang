import {
  Typography,
  Grid,
  CardMedia,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
} from "@mui/material";
import Link from "next/link";
import { FC } from "react";
import { useTranslation } from "react-i18next";

type CourseCardPropsType = {
  course: any;
};

export const CourseCard: FC<CourseCardPropsType> = ({ course }) => {
  const { t } = useTranslation("course");

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Card
        elevation={6}
        component={Link}
        href={`/courses/${course.id}`}
        sx={{
          minWidth: 300,
          maxWidth: 400,
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        <CardMedia component="img" height="140" image={course.image} />
        <CardContent>
          <Chip
            label={t(course.category as any)}
            color="primary"
            size="small"
            variant="outlined"
            sx={{ px: 1, my: 1 }}
          />
          <Typography my={1} variant="h5">
            {course.title}
          </Typography>
          <Typography sx={{ height: 100, overflow: "hidden" }}>
            {course.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{ mx: "auto", px: 5, mb: 1.5 }}
            variant="contained"
            size="large"
          >
            {t("start")}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
