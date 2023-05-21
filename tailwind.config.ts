import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  // darkMode: ['class', '[data-mode="dark"]'],
  // darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#3b82f6",

          "secondary": "#6ee9f4",

          "accent": "#20bf6f",

          "neutral": "#221924",

          "base-100": "#374151",

          "info": "#9EB9EA",

          "success": "#1AC77C",

          "warning": "#AF6504",

          "error": "#EA413E",
        },
      },
      {
        mytheme2: {

          "primary": "#569bef",

          "secondary": "#2aaf90",

          "accent": "#d7adea",

          "neutral": "#27313A",

          "base-100": "#F2F6F8",

          "info": "#87BDF8",

          "success": "#107A5C",

          "warning": "#F6BE6A",

          "error": "#E32D26",
        },
      },
    ],
  },
} satisfies Config;
