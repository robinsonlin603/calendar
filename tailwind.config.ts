import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "hover":"#e6e6e6",
        "not-current":"#757575",
        "active":" #006edc",
        "today":" #ffff76"
      },
    },
  },
  plugins: [],
};
export default config;
