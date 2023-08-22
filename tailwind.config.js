import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tan: "#EDE5E1",
        "tan-hover": "#DCCDC5",
        "otto-black": "#181818",
        "questbin-blue": "#465b87",
        "astral-purple": "#8B559B",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "clamp-h1": "clamp(1.875rem, 5vw, 2.0625rem)",
        "clamp-h2": "clamp(20px, 3vw, 24px)",
        "clamp-p": "clamp(16px, 3vw, 24px)",
        "clamp-tag": "clamp(16px, 3vw, 18px)",
      },
    },
  },
  plugins: [],
};
