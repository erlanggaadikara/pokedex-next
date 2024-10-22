import { apiEvolution, apiPokemon } from "@/config/api";
import { Stack, Typography } from "@mui/material";
import { green, orange, red, yellow } from "@mui/material/colors";
import { NamedAPIResource, PokemonSpecies } from "pokenode-ts";
import { DetailEvolution } from "./DetailEvolution";
import { ArrowForward, ArrowRight } from "@mui/icons-material";

type EvolutionProps = {
  species: NamedAPIResource;
};

export const Evolution = async ({ species }: EvolutionProps) => {
  const splitUrl = species.url.split("/");
  const id = splitUrl.at(-2) ?? 0;
  const speciesDetail = await apiPokemon.getPokemonSpeciesById(Number(id));

  const splitUrlSpecEvol = speciesDetail.evolution_chain.url.split("/");
  const idEvol = splitUrlSpecEvol.at(-2) ?? 0;

  const evolutionChain = await apiEvolution.getEvolutionChainById(
    Number(idEvol)
  );
  return (
    <>
      <Typography
        sx={{
          fontFamily: "var(--tafel-sans-bold)",
          marginTop: 8,
          marginBottom: 2,
          fontSize: 20,
        }}
      >
        Evolution:
      </Typography>
      <Stack direction={"row"} sx={{ alignItems: "center", gap: 4 }}>
        <DetailEvolution
          name={evolutionChain.chain.species.name}
          color={configEvolColor[0]}
        />
        {evolutionChain.chain.evolves_to.length > 0 && (
          <>
            <ArrowForward
              sx={{ height: 100, fontSize: 100, marginBottom: "44px" }}
            />
            <DetailEvolution
              name={evolutionChain.chain.evolves_to[0].species.name}
              color={configEvolColor[1]}
            />
            {evolutionChain.chain.evolves_to[0].evolves_to.length > 0 && (
              <>
                <ArrowForward
                  sx={{ height: 100, fontSize: 100, marginBottom: "44px" }}
                />
                <DetailEvolution
                  name={
                    evolutionChain.chain.evolves_to[0].evolves_to[0].species
                      .name
                  }
                  color={configEvolColor[2]}
                />
              </>
            )}
          </>
        )}
      </Stack>
    </>
  );
};

const configEvolColor = [green[400], yellow[400], orange[400], red[800]];
