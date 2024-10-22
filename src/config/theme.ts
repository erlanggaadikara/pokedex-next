"use client";
import { amber } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: amber,
  },
  typography: {
    fontFamily:
      "var(--tafel-sans), var(--tafel-sans-semibold), var(--tafel-sans-bold)",
  },
});

export default theme;
