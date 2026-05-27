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
        blush: "#FFF5F7",
        ivory: "#FFFBFC",
        sand: "#FFF0F6",
        "pink-hot": "#FE66C4",
        "pink-rose": "#FA94D1",
        "pink-blush": "#FCD2E4",
        "pink-deep": "#D51888",
        charcoal: "#2A1F24",
        warm: "#FCD2E4",
        /* legacy aliases */
        "dusty-rose": "#FA94D1",
        terracotta: "#FE66C4",
        maroon: "#D51888",
        gold: "#FCD2E4",
      },
      fontFamily: {
        display: ["var(--font-aprila)", "var(--font-fraunces)", "Georgia", "serif"],
        script: ["var(--font-halimum)", "var(--font-pinyon)", "cursive"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      letterSpacing: {
        editorial: "0.2em",
        wide: "0.35em",
      },
      animation: {
        "fade-up": "fadeUp 1.2s ease forwards",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
