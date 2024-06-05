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
      'white': 'rgb(255, 255, 255)',
      'transparent-white': 'rgba(255, 255, 255, 0.6)',
      'soft-gray': '#e7e7e7',
      'gray': '#818181',
    }
  },
  plugins: [],
};
export default config;
