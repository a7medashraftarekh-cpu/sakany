import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-cairo)", "Tajawal", "sans-serif"]
      },
      colors: {
        brand: {
          950: "#0b1220",
          900: "#0f1b30",
          800: "#152541",
          700: "#1d3358",
          600: "#284a7a",
          500: "#3563a3"
        },
        gold: {
          50: "#fbf3e3",
          200: "#f0dba6",
          400: "#dcae4c",
          500: "#c8963a",
          600: "#a8792c"
        },
        success: "#1f9d55",
        danger: "#d94848",
        warn: "#d99a2b"
      },
      borderRadius: {
        xl2: "1.25rem"
      },
      boxShadow: {
        card: "0 4px 24px -8px rgba(11,18,32,0.15)"
      }
    }
  },
  plugins: []
};

export default config;
