import { apiPokemon } from "@/config/api";
import { capitalWord } from "@/util/string";
import { Box, Stack, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import Link from "next/link";

type ListTypeProps = {
  activeType: string;
};

export const ListType = async ({ activeType = "normal" }: ListTypeProps) => {
  const listType = await apiPokemon.listTypes();
  return (
    <Stack sx={{ width: "20vw" }}>
      <Typography sx={{ fontFamily: "var(--tafel-sans-bold)" }}>
        Pokemon Type
      </Typography>
      <Box component="ul" sx={{ marginLeft: 3 }}>
        {listType.results.map((item, index) => (
          <Stack
            component={Link}
            key={index}
            sx={{ cursor: "pointer" }}
            href={"?type=" + item.name}
          >
            <Typography
              component="li"
              sx={{
                color: activeType === item.name ? blue[600] : grey[600],
              }}
            >
              {capitalWord(item.name)}
            </Typography>
          </Stack>
        ))}
      </Box>
    </Stack>
  );
};
