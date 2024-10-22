"use client";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

type PaginationPokedexProps = {
  count: number;
};

export const PaginationPokedex = ({ count }: PaginationPokedexProps) => {
  const router = useRouter();
  const searchQuery = useSearchParams();
  const paramLimit = searchQuery.get("limit") || 9;

  const createQueryString = useCallback(
    (name: string, value: string | number) => {
      const params = new URLSearchParams(searchQuery.toString());
      params.set(name, String(value));

      return params.toString();
    },
    [searchQuery]
  );

  const handlePagination = (page: number) => {
    const offset = page * 9;
    router.push("?" + createQueryString("offset", offset), { scroll: false });
  };

  const handleLimit = (limit: number) => {
    router.push("?" + createQueryString("limit", limit), { scroll: false });
  };

  const countPage = Math.floor(count / Number(paramLimit));

  return (
    <Stack direction={"row"} sx={{ ...styles.pageControlWrapper }}>
      <Stack direction={"row"} sx={styles.controlTotalPageWrapper}>
        <Typography sx={{ fontFamily: "var(--tafel-sans-bold)", fontSize: 12 }}>
          Per Page:
        </Typography>
        <FormControl size="small" sx={{ maxHeight: 32 }}>
          <Select
            value={paramLimit || 9}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={styles.select}
            onChange={(e) => handleLimit(e.target.value as number)}
          >
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={18}>18</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Pagination
        count={countPage}
        showFirstButton
        showLastButton
        variant="outlined"
        shape="rounded"
        sx={styles.pagination}
        onChange={(_, val) => handlePagination(val)}
      />
      <Stack direction={"row"}>
        <Typography sx={{ fontFamily: "var(--tafel-sans-bold)", fontSize: 12 }}>
          Total Data: {count}
        </Typography>
      </Stack>
    </Stack>
  );
};

const styles = {
  pagination: {
    "& .MuiPaginationItem-root": {
      color: "blue",
      border: "2px solid blue",
      fontFamily: "var(--tafel-sans-semibold)",
      height: 28,
      width: 28,
      fontSize: 12,
      borderRadius: 2,
    },
  },
  select: {
    height: 28,
    color: "blue",
    fontSize: 12,
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "blue",
      borderWidth: "2px",
      borderRadius: 2,
    },
    "& .MuiSelect-icon": {
      color: "blue",
    },
  },
  controlTotalPageWrapper: {
    justifyContent: "space-around",
    alignItems: "center",
    color: "blue",
    gap: 2,
  },
  pageControlWrapper: {
    justifyContent: "space-around",
    alignItems: "center",
    color: "blue",
    width: "100%",
  },
};
