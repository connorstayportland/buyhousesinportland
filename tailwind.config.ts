import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0D2B45",
          50: "#E8F0F7",
          100: "#C5D8EB",
          500: "#0D2B45",
          600: "#0A2238",
          700: "#071929",
        },
        amber: {
          DEFAULT: "#F5A40C",
          50: "#FEF7E6",
          100: "#FDE8B3",
          400: "#F7B733",
          500: "#F5A40C",
          600: "#D4890A",
        },
        slate: {
          50: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
