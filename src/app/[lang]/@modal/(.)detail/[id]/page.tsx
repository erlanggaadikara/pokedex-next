"use client";
import { MainDetail } from "@/component/MainDetail";
import { apiPokemon } from "@/config/api";
import { Close } from "@mui/icons-material";
import { Stack } from "@mui/material";
import Modal from "@mui/material/Modal";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Pokemon } from "pokenode-ts";
import { useEffect, useState } from "react";

export default function DetailModal({ params }: any) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const { id } = params;
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    if (modal) {
      window.location.reload();
    } else {
      const fetch = async () => {
        const itemPokemon = await apiPokemon.getPokemonById(Number(id));
        setPokemon(itemPokemon);
      };

      fetch();
    }
  }, []);

  const handleClose = () => {
    setPokemon(undefined);
    router.back();
  };

  useEffect(() => {
    if (pathname.includes("/detail/")) setPokemon(undefined);
  }, [pathname]);

  if (!pokemon) return <></>;

  return (
    <Modal
      open={!!pokemon}
      onClose={handleClose}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      disableScrollLock
    >
      <Stack
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
          padding: "16px 14px",
          width: "50vw",
        }}
      >
        <Stack direction={"row-reverse"} sx={{ width: "100%" }}>
          <Close
            fontSize="small"
            onClick={handleClose}
            sx={{ cursor: "pointer" }}
          />
        </Stack>
        <MainDetail pokemon={pokemon} isModal />
      </Stack>
    </Modal>
  );
}
