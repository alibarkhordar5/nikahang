import { FC } from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { MainIcon } from "src/components/atoms/MainIcon";
import { footerLinks, socialMedia } from "./constant";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export const Footer: FC = () => {
  const { t } = useTranslation("footer");

  return (
    <Box sx={{ backgroundColor: "#2b2b2b", color: "#e6e6e6", py: 3 }}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} md>
            <Stack justifyContent="space-between" height="100%">
              <Stack spacing={2}>
                <MainIcon
                  imgUrl={"/images/logo/music-logo-white-fit.png"}
                  color="#e6e6e6"
                />
                <Typography
                  variant="subtitle2"
                  textAlign="justify"
                  maxWidth={300}
                >
                  {t("about")}
                </Typography>
              </Stack>
              <Typography
                variant="text0"
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                &copy; {t("reserved")}
                <Link
                  href="https://abolfazl-shafaghi.ir/"
                  target="_blank"
                  rel="noopener"
                  style={{
                    textDecoration: "none",
                    color: "#4361ee",
                    marginInlineStart: 5,
                  }}
                >
                  Abolfazl
                </Link>
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md>
            <Stack justifyContent="space-between" spacing={2} height="100%">
              <Grid container>
                {footerLinks.map(({ title, links }, index) => (
                  <Grid key={index} item xs>
                    <Stack spacing={1}>
                      <Typography variant="text0" fontWeight={700}>
                        {t(title as any)}
                      </Typography>
                      <Stack spacing={1}>
                        {links.map(({ title: text, url }, idx) => (
                          <Typography
                            color="#e6e6e6"
                            component={Link}
                            sx={{
                              textDecoration: "none",
                              "&:hover": { textDecoration: "underline" },
                            }}
                            href={url}
                            key={idx}
                            variant="text1"
                          >
                            {t(text as any)}
                          </Typography>
                        ))}
                      </Stack>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
              <Stack
                direction="row"
                alignItems="center"
                spacing={{ xs: 1, md: 3 }}
              >
                {socialMedia.map(({ icon: Icon, link, color }, index) => (
                  <IconButton key={index} sx={{ fontSize: { xs: 18, md: 23 } }}>
                    <Icon
                      sx={{
                        color: "#EEEEEE",
                        "&:hover": { color },
                        fontSize: { xs: 18, md: 23 },
                      }}
                    />
                  </IconButton>
                ))}
              </Stack>
              <Typography
                variant="text0"
                sx={{ display: { xs: "flex", md: "none" } }}
              >
                &copy; {t("reserved")}
                <Link
                  href="https://abolfazl-shafaghi.ir/"
                  target="_blank"
                  rel="noopener"
                  style={{
                    textDecoration: "none",
                    color: "#4361ee",
                    marginInlineStart: 5,
                  }}
                >
                  Abolfazl
                </Link>
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
