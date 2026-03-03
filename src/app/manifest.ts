import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Buy Houses in Portland",
    short_name: "BuyHousesPDX",
    description:
      "Licensed Oregon agents helping Portland homeowners sell off-market to cash buyers and investors.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#0D2B45",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
