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
        background: "#050A14",
        foreground: "#E8F0FE",
        cyan: {
          DEFAULT: "#00D4FF",
          400: "#00D4FF",
          500: "#00BFDF",
        },
        violet: {
          DEFAULT: "#7B2FBE",
          400: "#9B4FDE",
          500: "#7B2FBE",
          600: "#6A1FAD",
        },
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      animation: {
        "gradient-x": "gradient-x 8s ease infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
    },
  },
  plugins: [],
};
export default config;
