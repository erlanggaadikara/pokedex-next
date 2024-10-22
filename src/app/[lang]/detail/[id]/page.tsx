import { Evolution } from "@/component/Evolution";
import { MainDetail } from "@/component/MainDetail";
import { OtherImage } from "@/component/OtherImage";
import { Stats } from "@/component/Stats";
import { apiPokemon } from "@/config/api";
import { maxWidth } from "@/config/const";
import { Stack } from "@mui/material";

export default async function Detail({ params }: any) {
  const itemPokemon = await apiPokemon.getPokemonById(Number(params.id));
  return (
    <Stack sx={styles.container}>
      <MainDetail pokemon={itemPokemon} />
      <OtherImage sprites={itemPokemon.sprites} />
      <Stats stats={itemPokemon.stats} />
      <Evolution species={itemPokemon.species} />
    </Stack>
  );
}

const styles = {
  container: {
    ...maxWidth,
    marginTop: 10,
    paddingBottom: 20,
  },
};
