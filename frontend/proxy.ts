import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";

// Next.js 16 renamed the "middleware" file convention to "proxy".
// next-intl's locale routing runs here (locale detection, redirects,
// rewrites, and <link rel="alternate" hreflang> generation).
export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - API routes
  // - Next.js internals (_next, _vercel)
  // - files with an extension (e.g. favicon.ico, images, sitemap.xml)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
