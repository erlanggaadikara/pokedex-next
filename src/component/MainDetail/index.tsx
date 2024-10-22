"use client";
import { Button, Stack, Typography } from "@mui/material";
import { TypeLabel } from "../TypeLabel";
import { Pokemon } from "pokenode-ts";
import Image from "next/image";
import { capitalWord } from "@/util/string";
import { amber, yellow } from "@mui/material/colors";
import { useRouter } from "next/navigation";

type MainDetailProps = {
  pokemon: Pokemon;
  isModal?: boolean;
};

export const MainDetail = ({ pokemon, isModal = false }: MainDetailProps) => {
  const router = useRouter();
  return (
    <Stack direction={"row"}>
      <Stack
        sx={{
          width: 280,
          height: 280,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          height={200}
          width={246}
          src={pokemon.sprites.front_default || ""}
          alt="pokemon"
        />
      </Stack>
      <Stack sx={{ width: "100%" }}>
        <Typography variant="h3" sx={{ fontFamily: "var(--tafel-sans-bold)" }}>
          {capitalWord(pokemon.name)}
        </Typography>
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "space-between",
            width: "60%",
            margin: "10px 0",
          }}
        >
          <Stack direction={"row"} sx={{ gap: 1 }}>
            <Typography sx={{ fontFamily: "var(--tafel-sans-bold)" }}>
              Weight:
            </Typography>
            <Typography>{pokemon.weight}</Typography>
          </Stack>
          <Stack direction={"row"} sx={{ gap: 1 }}>
            <Typography sx={{ fontFamily: "var(--tafel-sans-bold)" }}>
              Height:
            </Typography>
            <Typography>{pokemon.height}</Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} sx={{ gap: 4 }}>
          <Typography sx={{ fontFamily: "var(--tafel-sans-bold)" }}>
            Ability:
          </Typography>
          <ul>
            {pokemon.abilities.map((item, index) => (
              <Typography key={index} component={"li"}>
                {item.ability.name}
              </Typography>
            ))}
          </ul>
        </Stack>
        <Stack direction={"row"} sx={{ gap: 4, marginTop: 2 }}>
          <Typography sx={{ fontFamily: "var(--tafel-sans-bold)" }}>
            Type:
          </Typography>
          {pokemon.types.map((item, index) => (
            <TypeLabel key={index} text={item.type.name} />
          ))}
        </Stack>
        {isModal && (
          <Button
            sx={{
              backgroundColor: amber[600],
              color: "white",
              width: "130px",
              fontFamily: "var(--tafel-sans-bold)",
              marginTop: 2,
              borderRadius: 3,
            }}
            onClick={() => window.location.reload()}
          >
            More Detail
          </Button>
        )}
      </Stack>
    </Stack>
  );
};
