import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // Local assets are used by default. Add remote CDNs here when needed.
    remotePatterns: [],
  },
};

export default withNextIntl(nextConfig);
