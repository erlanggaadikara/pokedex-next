import { capitalWord } from "@/util/string";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";

type TypeLabelProps = {
  text: string;
};

export const TypeLabel = ({ text }: TypeLabelProps) => {
  return (
    <Box
      component={Link}
      sx={{
        borderRadius: 20,
        padding: "2px 1px",
        backgroundColor: "green",
        textAlign: "center",
        width: 100,
      }}
      href={"/pokemon-type?type=" + text}
    >
      <Typography
        sx={{ color: "white", fontFamily: "var(--tafel-sans-semibold)" }}
      >
        {capitalWord(text)}
      </Typography>
    </Box>
  );
};
