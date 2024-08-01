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
        "gradient-linear": "linear-gradient(90deg, var(--gradient-step-04), var(--gradient-step-03), var(--gradient-step-02), var(--gradient-step-01))",
      },
    },
  },
  plugins: [],
};
export default config;
