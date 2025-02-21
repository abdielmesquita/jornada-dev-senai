import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-pattern": "url('/line-1.svg')",
        "gradient-pattern-invert": "url('/line-2.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
