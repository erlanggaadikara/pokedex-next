"use client";
import Image from "next/image";
import { maxWidth } from "@/config/const";
import { Stack, Tabs, Tab, styled } from "@mui/material";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { grey } from "@mui/material/colors";

export const Menu = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [tabIndex, setTabIndex] = useState(pathname.includes("type") ? 1 : 0);

  const a11yProps = (index: number) => {
    return {
      id: `menu-tab-${index}`,
      "aria-controls": `menu-tabpanel-${index}`,
      sx: {
        textTransform: "none",
        fontFamily:
          index === tabIndex ? "var(--tafel-sans-bold)" : "var(--tafel-sans)",
      },
    };
  };

  const handleNavigateMenu = () => {
    if (tabIndex === 0) {
      setTabIndex(1);
      router.push("/pokemon-type");
    } else {
      setTabIndex(0);
      router.push("/");
    }
  };

  return (
    <Stack
      direction={"row"}
      sx={{
        ...maxWidth,
        margin: "20px auto 0",
        width: "100%",
        alignItems: "flex-start",
      }}
    >
      <Image
        src="/assets/images/pokemon.png"
        width={150}
        height={60}
        alt="pokemon"
        onClick={() => router.push("/")}
        style={{ cursor: "pointer" }}
      />
      <StyledTabs value={tabIndex} onChange={handleNavigateMenu} sx={{ ml: 2 }}>
        <Tab label="Home" {...a11yProps(0)} />
        <Tab label="Pokemon Type" {...a11yProps(1)} />
      </StyledTabs>
    </Stack>
  );
};
interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 80,
    width: "100%",
    backgroundColor: grey[400],
  },
});
