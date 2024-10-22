import { apiPokemon } from "@/config/api";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { TypeLabel } from "../TypeLabel";
import { formatNumberHashtag } from "@/util/number";
import Link from "next/link";
import { capitalWord } from "@/util/string";

type ItemPokemonTypeProps = {
  index: number;
  url: string;
};

export const ItemPokemonType = async ({ index, url }: ItemPokemonTypeProps) => {
  const splitUrl = url.split("/");
  const id = splitUrl.at(-2) ?? 0;
  const itemPokemon = await apiPokemon.getPokemonById(Number(id));
  const hrefLink = "/detail/" + id + "?modal=false";
  return (
    <Stack direction={"row"} sx={{ alignItems: "center", gap: 2 }}>
      <Link href={hrefLink}>
        <Image
          height={120}
          width={146}
          src={itemPokemon.sprites.front_default || ""}
          alt="pokemon"
        />
      </Link>
      <Box
        href={hrefLink}
        component={Link}
        sx={{ width: 150, display: "flex", justifyContent: "center" }}
      >
        <Typography sx={{ fontSize: 20, fontFamily: "var(--tafel-sans-bold)" }}>
          {formatNumberHashtag(index + 1)}
        </Typography>
      </Box>
      <Box
        href={hrefLink}
        component={Link}
        sx={{ width: 200, display: "flex", justifyContent: "center" }}
      >
        <Typography
          sx={{
            fontSize: 20,
            fontFamily: "var(--tafel-sans-bold)",
            width: 200,
          }}
        >
          {capitalWord(itemPokemon.name)}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        {itemPokemon.types.map((item, index) => (
          <TypeLabel key={index} text={item.type.name} />
        ))}
      </Box>
    </Stack>
  );
};
