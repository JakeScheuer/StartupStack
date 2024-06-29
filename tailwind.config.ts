import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#00c903",
          "primary-focus": "#018a04",
          "primary-content": "#FFFFFF",
          secondary: "#024d04",
          neutral: "#71717A",
          "base-100": "#FFFFFF",
          "base-200": "#F7F8F9",
          "base-300": "#d9d9d9",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#ff1717",
        },
      },
    ],
  },
};
export default config;
