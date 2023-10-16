import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#d0e9ff",
          200: "#a2d3ff",
          300: "#73beff",
          400: "#44a8ff",
          500: "#1692ff",
          600: "#007be6",
          700: "#0062b7",
          800: "#004989",
          900: "#00305a",
        },
        secondary: {
          100: "#ffe6d0",
          200: "#ffcda2",
          300: "#ffb473",
          400: "#ff9b44",
          500: "#ff8316",
          600: "#e66b00",
          700: "#b75600",
          800: "#894000",
          900: "#5a2a00",
        },
        white: {
          100: "#f2f2f2",
          200: "#e6e6e6",
          300: "#d9d9d9",
          400: "#cccccc",
          500: "#c0c0c0",
          600: "#b3b3b3",
          700: "#a6a6a6",
          800: "#999999",
          900: "#8d8d8d",
        },
        black: {
          100: "#737373",
          200: "#666666",
          300: "#5a5a5a",
          400: "#4d4d4d",
          500: "#404040",
          600: "#333333",
          700: "#262626",
          800: "#1a1a1a",
          900: "#0d0d0d",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
