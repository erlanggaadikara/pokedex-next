import { Main } from "@/component/Main";
import { Pokedex } from "@/component/Pokedex";
import { getDictionary } from "./dictionaries";

interface HomeProps {
  searchParams: { [key: string]: string | string[] | undefined };
  params: { lang: "en-Us" | "idn" };
}

export default async function Home({ searchParams, params }: HomeProps) {
  const offset = searchParams["offset"] ?? 9;
  const limit = searchParams["limit"] ?? 9;

  const t = await getDictionary(params.lang);

  return (
    <>
      <Main
        mainDesc={t.home.mainDesc}
        mainTitle={t.home.mainTitle}
        ctaText={t.home.mainCta}
      />
      <Pokedex
        offset={Number(offset)}
        limit={Number(limit)}
        lang={params.lang}
      />
    </>
  );
}
