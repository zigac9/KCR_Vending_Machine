import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        coffe: {
          50: "#EDE0D4",
          100: "#E6CCB2",
          200: "#DDB892",
          300: "#B08968",
          400: "#7F5539",
          500: "#3F2A0A",

        },
        coffe2: {
          50: "#EDE0D4",
          100: "#E6CCB2",
          200: "#DDB892",
          300: "#5e503f",
          400: "#7F5539",
          500: "#3F2A0A",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
