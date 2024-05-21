import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'navy': '#0a192f',
      'gold': '#e89c31',
      'white': '#ffffff',
      'gray': '#8892b0',
    }
  },
  plugins: [],
};
export default config;
