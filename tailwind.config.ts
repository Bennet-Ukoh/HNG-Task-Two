import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "xs": "480px",
      "ss": "620px",
      "sm": "768px",
      "md": "1060px",
      "lg": "1200px",
      "xl": "1700px",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
