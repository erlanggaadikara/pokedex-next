import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import { cookies } from "next/headers";

const locales = ["en-Us", "idn"];
const defaultLocale = "en-Us";
const cookieName = "i18nlang";

const getLocale = (req: NextRequest) => {
  const res = NextResponse.next();
  if (hasCookie(cookieName, { req, res }))
    return getCookie(cookieName, { req, res });

  const acceptLang = req.headers.get("Accept-Language");
  if (!acceptLang) return defaultLocale;

  const headers = { "accept-language": acceptLang };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
};

export function middleware(request: NextRequest) {
  const res = NextResponse.next();
  if (request.nextUrl.pathname.startsWith("/_next")) return res;

  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  const response = NextResponse.redirect(request.nextUrl);

  return response;
}

export const config = {
  matcher: ["/((?!_next|assets/images|favicon.ico).*)"],
};
