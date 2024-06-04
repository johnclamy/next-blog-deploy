import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        appGrey: "#E5E5E5",
        appYellow: "#FCA311",
        appBlue: "#14213D",
      },
    },
  },
  plugins: [],
};
export default config;
