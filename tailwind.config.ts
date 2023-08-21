import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "color-bg": "#09595A",
        "color-button": "#576702",
        "color-button-hover": "#3F4A05",
        "color-text-black": "#191414",
        "color-text-white": "#FFFFFF",
        "color-form-bg": "rgba(87, 103, 2, 0.35)",
      },
    },
  },

  plugins: [],
};
export default config;
