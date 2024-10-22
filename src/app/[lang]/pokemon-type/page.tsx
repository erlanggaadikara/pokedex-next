import { ListPokemonType } from "@/component/ListPokemonType";
import { ListType } from "@/component/ListType";
import { maxWidth } from "@/config/const";
import { Stack } from "@mui/material";

interface PokemonTypeProps {
  searchParams: { [key: string]: string | undefined };
}

export default function Type({ searchParams }: PokemonTypeProps) {
  const offset = searchParams["offset"] ?? 9;
  const limit = searchParams["limit"] ?? 9;
  return (
    <Stack direction={"row"} sx={styles.container}>
      <ListType activeType={searchParams.type || "normal"} />
      <ListPokemonType
        activeType={searchParams.type || "normal"}
        offset={Number(offset)}
        limit={Number(limit)}
      />
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
