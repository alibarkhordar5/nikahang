import { useTranslation } from "react-i18next";
import { TeacherType } from "./constant";
import { FC } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import {
  Facebook,
  Instagram,
  MusicNote,
  Public,
  School,
  YouTube,
} from "@mui/icons-material";
import { Box, Typography, IconButton } from "@mui/material";

type TimelinePropsType = {
  teacher: TeacherType;
  type: string;
};

export const CustomTimeLine: FC<TimelinePropsType> = ({ type, teacher }) => {
  const { t } = useTranslation("teachers");
  const handleIcon = (type: string) => {
    switch (type) {
      case "Instagram":
        return <Instagram />;
      case "Youtube":
        return <YouTube />;
      case "Facebook":
        return <Facebook />;
    }
  };

  return (
    <>
      <Box>
        <Timeline>
          {type === "classes" ? (
            teacher.classes.map((eachClass) => (
              <TimelineItem sx={{ "&:before": { display: "none" } }}>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot sx={{ my: .5 }}>
                    <School />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent mt={1}>
                  <Typography sx={{ display: "block" }} variant="title3">
                    {t(eachClass.class as any)}
                  </Typography>
                  <Typography variant="title5">
                    {t(eachClass.time as any)}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))
          ) : (
            <>
              <TimelineItem sx={{ "&:before": { display: "none" } }}>
                <TimelineSeparator>
                  <TimelineConnector  />
                  <TimelineDot sx={{ my: .5 }}>
                    <Public />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent mt={1}>
                  {teacher.info.social.map((social) => (
                    <IconButton href={social.link} sx={{ border: 1, mx: 0.5 }}>
                      {handleIcon(social.type)}
                    </IconButton>
                  ))}
                </TimelineContent>
              </TimelineItem>
              <TimelineItem sx={{ "&:before": { display: "none" } }}>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot sx={{ my: .5 }}>
                    <MusicNote />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent mt={2}>
                  <Typography variant="title4">{t("teacherOf")}</Typography>
                  {teacher.info.instruments.map((instrument) => (
                    <Typography
                      variant="title4"
                      sx={{ display: "inline", fontWeight: "bold" }}
                    >
                      {` ${t(instrument.name as any)}`}
                    </Typography>
                  ))}
                </TimelineContent>
              </TimelineItem>
            </>
          )}
        </Timeline>
      </Box>
    </>
  );
};
