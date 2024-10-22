import { capitalWord } from "@/util/string";
import { Typography, Stack } from "@mui/material";
import {
  blueGrey,
  orange,
  yellow,
  green,
  blue,
  red,
} from "@mui/material/colors";
import { PokemonStat } from "pokenode-ts";

type StatsProps = {
  stats: PokemonStat[];
};

export const Stats = ({ stats }: StatsProps) => {
  return (
    <>
      <Typography sx={{ fontFamily: "var(--tafel-sans-bold)", fontSize: 20 }}>
        Stats:
      </Typography>
      <Stack direction={"row"} sx={{ gap: 2, marginTop: 2 }}>
        {stats.map((item, index) => (
          <Stack
            key={index}
            sx={{
              height: 160,
              width: 200,
              borderRadius: "50%",
              border: `20px solid ${configStatsColor[index]}`,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "var(--tafel-sans-bold)",
                fontSize: 30,
                color: configStatsColor[index],
              }}
            >
              {item.effort}
            </Typography>
            {capitalWord(item.stat.name)}
          </Stack>
        ))}
      </Stack>
    </>
  );
};

const configStatsColor = [
  blueGrey[400],
  orange[800],
  yellow[800],
  green[600],
  blue[700],
  red[800],
];
