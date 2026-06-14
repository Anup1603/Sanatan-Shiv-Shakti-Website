import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sanatan Shiv Shakti",
    short_name: "Shiv Shakti",
    description:
      "Non-political, youth-led spiritual and charitable organization in Howrah, West Bengal.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffaf2",
    theme_color: "#c2410c",
    lang: "en",
    categories: ["nonprofit", "spirituality", "community"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
