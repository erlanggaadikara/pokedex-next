import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import localFont from "next/font/local";
import "../globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/config/theme";
import { Stack } from "@mui/material";
import { Menu } from "@/component/Menu";
import { Localization } from "@/component/Localization";
import { Locale } from "@/config/type";

const tafelSans = localFont({
  src: "../../fonts/TafelSansPro-Regular.woff",
  variable: "--tafel-sans",
  display: "swap",
});

const tafelSansSemiBold = localFont({
  src: "../../fonts/TafelSansPro-SemiBold.woff",
  variable: "--tafel-sans-semibold",
  display: "swap",
});

const tafelSansBold = localFont({
  src: "../../fonts/TafelSansPro-Bold.woff",
  variable: "--tafel-sans-bold",
  display: "swap",
});

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <Stack>
      <Localization />
      <Menu />
      {children}
    </Stack>
  );
}

export default function RootLayout({
  children,
  modal,
  params,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <body
        className={`${tafelSans.variable} ${tafelSansSemiBold.variable} ${tafelSansBold.variable}`}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Layout>
              {children}
              {modal}
            </Layout>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
