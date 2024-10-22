"use client";
import { maxWidth } from "@/config/const";
import { Box, Button, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Image from "next/image";

type MainProps = {
  mainTitle: string;
  mainDesc: string;
  ctaText: string;
};

export const Main = ({ mainTitle, mainDesc, ctaText }: MainProps) => {
  const clickToScroll = () => {
    const idPokedex = document.getElementById("pokedex");
    if (idPokedex) idPokedex.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Stack direction={"row"} sx={styles.container}>
      <Stack spacing={4}>
        <Typography variant="h1" sx={styles.mainTitle}>
          {mainTitle}
        </Typography>
        <Typography variant="h5" sx={{ color: grey[600] }}>
          {mainDesc}
        </Typography>
        <Button
          variant="contained"
          sx={styles.ctaButton}
          onClick={clickToScroll}
        >
          {ctaText}
        </Button>
      </Stack>
      <Box>
        <Image
          src="/assets/images/banner.png"
          width={300}
          height={500}
          alt="banner pokemon"
          style={{ height: "auto" }}
        />
      </Box>
    </Stack>
  );
};

const styles = {
  container: {
    ...maxWidth,
    justifyContent: "space-between",
    height: "100vh",
    alignItems: "center",
  },
  ctaButton: {
    color: "white",
    fontFamily: "var(--tafel-sans-bold)",
    borderRadius: 3,
    fontSize: "1em",
    height: 60,
    width: "15em",
  },
  mainTitle: {
    fontFamily: "var(--tafel-sans-bold)",
    fontSize: "4em",
    width: "10em",
    color: grey[800],
  },
};
