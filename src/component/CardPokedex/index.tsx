import grey from "@mui/material/colors/grey";
import Grid2 from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { TypeLabel } from "../TypeLabel";
import { NamedAPIResource } from "pokenode-ts";
import Image from "next/image";
import { formatNumberHashtag } from "@/util/number";
import { apiPokemon } from "@/config/api";
import Link from "next/link";
import { capitalWord } from "@/util/string";
import { Locale } from "@/config/type";

type CardPokedexProps = {
  index: number;
  item: NamedAPIResource;
  lang: Locale;
};

export const CardPokedex = async ({ index, item, lang }: CardPokedexProps) => {
  const splitUrl = item.url.split("/");
  const id = splitUrl.at(-2) ?? 0;
  const itemPokemon = await apiPokemon.getPokemonById(Number(id));
  return (
    <Paper sx={styles.paperContainer}>
      <Link href={`/detail/${id}`}>
        <Image
          height={200}
          width={236}
          src={itemPokemon.sprites.front_default || ""}
          alt="pokemon"
        />
        <Typography
          sx={{
            color: grey[400],
            fontFamily: "var(--tafel-sans-bold)",
          }}
        >
          {formatNumberHashtag(index + 1)}
        </Typography>
        <Typography
          sx={{
            color: grey[800],
            fontFamily: "var(--tafel-sans-bold)",
            fontSize: "2rem",
          }}
        >
          {capitalWord(item.name)}
        </Typography>
      </Link>
      <Grid2
        container
        columns={10}
        columnSpacing={2}
        rowSpacing={1}
        sx={{ marginTop: 1 }}
      >
        {itemPokemon.types.map((item) => (
          <Grid2
            key={item.slot}
            size={4}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TypeLabel text={item.type.name} />
          </Grid2>
        ))}
      </Grid2>
    </Paper>
  );
};

const styles = {
  paperContainer: {
    backgroundColor: "white",
    width: 300,
    borderRadius: 5,
    padding: 4,
  },
};
