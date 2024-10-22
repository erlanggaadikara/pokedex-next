import { apiPokemon } from "@/config/api";
import { capitalWord } from "@/util/string";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const DetailEvolution = async ({
  name,
  color,
}: {
  name: string;
  color: string;
}) => {
  const itemPokemon = await apiPokemon.getPokemonByName(name);
  return (
    <Stack
      component={Link}
      sx={{ alignItems: "center" }}
      href={"/detail/" + itemPokemon.id}
    >
      <Stack
        sx={{
          height: 160,
          width: 160,
          borderRadius: "50%",
          border: `10px solid ${color}`,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          height={120}
          width={156}
          src={itemPokemon.sprites.front_default || ""}
          alt="pokemon"
        />
      </Stack>
      <Typography
        sx={{
          fontSize: 18,
          fontFamily: "var(--tafel-sans-bold)",
        }}
      >
        {capitalWord(itemPokemon.name)}
      </Typography>
    </Stack>
  );
};
