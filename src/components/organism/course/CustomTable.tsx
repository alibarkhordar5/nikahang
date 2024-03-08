import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Box,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { FC } from "react";

type ClassTimeTableProps = {
  course: any;
};

export const ClassTimeTable: FC<ClassTimeTableProps> = ({ course }) => {
  const { t } = useTranslation("course");
  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      fontWeight: "bold",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    <TableContainer elevation={5} component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ minWidth: 200 }}>
              {t("tableTeacher")}
            </StyledTableCell>
            <StyledTableCell sx={{ minWidth: 100 }} align="right">
              {t("tableDay")}
            </StyledTableCell>
            <StyledTableCell sx={{ minWidth: 100 }} align="right">
              {t("tableStart")}
            </StyledTableCell>
            <StyledTableCell sx={{ minWidth: 100 }} align="right">
              {t("tableEnd")}
            </StyledTableCell>
            <StyledTableCell sx={{ minWidth: 100 }} align="right">
              {t("tableStatus")}
            </StyledTableCell>
            <StyledTableCell sx={{ minWidth: 100 }} align="right">
              {""}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {course.courseTime.map((course: any, index: number) => (
            <TableRow key={index}>
              <StyledTableCell component="th" scope="row">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar src={course.teacherAvatar} />
                  <Box mx={2}>
                    <Typography sx={{ display: "block" }} variant="subtitle1">
                      {course.teacherName}
                    </Typography>
                    <Typography variant="text0">{`استاد ${course.teacherInstruments}`}</Typography>
                  </Box>
                </Box>
              </StyledTableCell>
              <StyledTableCell align="right">{course.day}</StyledTableCell>
              <StyledTableCell align="right">
                {course.startTime}
              </StyledTableCell>
              <StyledTableCell align="right">{course.endTime}</StyledTableCell>
              <StyledTableCell align="right">{course.status}</StyledTableCell>
              <StyledTableCell align="right">
                <Button variant="contained">{t("start")}</Button>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
