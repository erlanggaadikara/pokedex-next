"use client";
import {
  FormControl,
  InputBase,
  MenuItem,
  Select,
  Stack,
  styled,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import LanguageIcon from "@mui/icons-material/Language";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import { deleteCookie, setCookie } from "cookies-next";

const BootstrapInput = styled(InputBase)(() => ({
  "& .MuiInputBase-input": {
    position: "relative",
    border: "none",
    fontSize: 14,
    padding: "0",
    color: grey[500],
  },
}));

export const Localization = () => {
  const pathname = usePathname();
  const router = useRouter();

  const lang = useMemo(() => {
    const splitPath = pathname.split("/")[1];
    return splitPath;
  }, [pathname]);

  const handleChange = () => {
    const changed = lang === "idn" ? "en-Us" : "idn";
    const toPathname = pathname.replace(lang, changed);
    setCookie("i18nlang", changed, { priority: "high" });
    router.push(toPathname);
  };

  return (
    <Stack
      sx={{ backgroundColor: grey[200], width: "100%" }}
      direction={"row-reverse"}
    >
      <Stack direction={"row"} sx={{ alignItems: "center", py: 1, px: 2 }}>
        <LanguageIcon sx={{ fontSize: 14, color: grey[500], mr: 1 }} />
        <FormControl size="small" sx={{ maxHeight: 32 }}>
          <Select
            value={lang}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            onChange={handleChange}
            input={<BootstrapInput />}
          >
            <MenuItem value={"en-Us"}>English</MenuItem>
            <MenuItem value={"idn"}>Bahasa Indonesia</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  );
};
