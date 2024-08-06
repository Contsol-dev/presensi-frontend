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
        h1: "#A4161A",
        bg: "#212529",
        grey: "#6C757D",
        button: "#E5383B",
        abu: "#E9E9E9",
        search: "#404040",
        koneng: "#E2BE00",
        error: "#FF0606",
        hijau: "#20DB1C",
        card: "#213555",
        "custom-gray": "rgba(217, 217, 217, 0.35)",
        linear: {
          "43.15": "#BA181B",
          "96.26": "#C90090",
        },
      },
      direction: {
        ltr: "ltr",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "95vw": "95vw",
        "30%": "20%",
        "90%": "90%",
        "10%": "10%",
      },
      boxShadow: {
        navbar: "7px 4px 58px 0px rgba(0, 0, 0, 0.25)",
        total: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        quote: "3px 13px 44px 0px rgba(0, 0, 0, 0.25)",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    minWidth: {
      "150px": "150px",
    },
    minHeight: {
      "112px": "112px",
    },
  },
  plugins: [],
};

export default config;
