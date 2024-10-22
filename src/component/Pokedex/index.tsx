"use server";
import { maxWidth } from "@/config/const";
import { CardPokedex } from "../CardPokedex";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Grid2";

import grey from "@mui/material/colors/grey";
import amber from "@mui/material/colors/amber";
import { apiPokemon } from "@/config/api";
import { PaginationPokedex } from "./Pagination";
import { Locale } from "@/config/type";

type PokedexProps = {
  offset: number;
  limit: number;
  lang: Locale;
};

export const Pokedex = async ({
  offset = 9,
  limit = 9,
  lang,
}: PokedexProps) => {
  const pokemonlist = await apiPokemon.listPokemons(offset, limit);
  return (
    <Stack
      id="pokedex"
      sx={{ backgroundColor: amber[400], height: "100%", py: 12 }}
    >
      <Stack sx={{ ...maxWidth, alignItems: "center" }}>
        <Typography
          sx={{
            fontFamily: "var(--tafel-sans-bold)",
            fontSize: "3em",
            color: grey[800],
          }}
        >
          Pokédex
        </Typography>
        <Typography
          sx={{
            color: grey[600],
            fontSize: "1em",
          }}
        >
          All Generation totalling
        </Typography>
        <Typography
          sx={{
            color: grey[600],
            fontSize: "1em",
          }}
        >
          {pokemonlist.count} Pokemon
        </Typography>
        <Box sx={{ py: 6, width: "100%" }}>
          <Grid2 container direction={"row"} columnSpacing={5} rowSpacing={5}>
            {pokemonlist.results.map((item, index) => (
              <Grid2
                size={4}
                key={item.name}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CardPokedex index={index} item={item} lang={lang} />
              </Grid2>
            ))}
          </Grid2>
        </Box>
        <PaginationPokedex count={pokemonlist.count} />
      </Stack>
    </Stack>
  );
};
