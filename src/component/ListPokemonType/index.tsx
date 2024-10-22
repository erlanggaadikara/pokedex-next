import { apiPokemon } from "@/config/api";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { PaginationPokedex } from "./Pagination";
import { limitOffset } from "@/util/array";
import { ItemPokemonType } from "../ItemPokemonType";
import { capitalWord } from "@/util/string";

type ListPokemonTypeProps = {
  activeType: string;
  offset: number;
  limit: number;
};

export const ListPokemonType = async ({
  activeType = "normal",
  offset = 9,
  limit = 9,
}: ListPokemonTypeProps) => {
  const detailType = await apiPokemon.getTypeByName(activeType);
  const paginationListPokemon = limitOffset(detailType.pokemon, limit, offset);
  return (
    <Stack sx={{ width: "100%", gap: 2 }}>
      <Typography variant="h4" sx={{ fontFamily: "var(--tafel-sans-bold)" }}>
        Pokemon with Type {capitalWord(activeType)}
      </Typography>
      <Paper
        sx={{ minHeight: 450, width: "100%", padding: 4, borderRadius: 5 }}
      >
        <Box sx={{ height: "98%" }}>
          {paginationListPokemon.map((item, index) => (
            <ItemPokemonType key={index} index={index} url={item.pokemon.url} />
          ))}
        </Box>
        <PaginationPokedex count={detailType.pokemon.length} />
      </Paper>
    </Stack>
  );
};
