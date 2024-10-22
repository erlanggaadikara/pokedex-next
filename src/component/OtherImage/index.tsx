import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { PokemonSprites } from "pokenode-ts";

type OtherImageProps = {
  sprites: PokemonSprites;
};

export const OtherImage = ({ sprites }: OtherImageProps) => {
  return (
    <>
      <Typography sx={{ fontFamily: "var(--tafel-sans-bold)", fontSize: 20 }}>
        Other Images:
      </Typography>
      <Stack direction={"row"}>
        <Image
          height={200}
          width={246}
          src={sprites.back_default || ""}
          alt="pokemon"
        />
        <Image
          height={200}
          width={246}
          src={sprites.front_shiny || ""}
          alt="pokemon"
        />
        <Image
          height={200}
          width={246}
          src={sprites.back_shiny || ""}
          alt="pokemon"
        />
        {sprites.front_female && (
          <Image
            height={200}
            width={246}
            src={sprites.front_female}
            alt="pokemon"
          />
        )}
        {sprites.back_female && (
          <Image
            height={200}
            width={246}
            src={sprites.back_female}
            alt="pokemon"
          />
        )}
      </Stack>
    </>
  );
};
