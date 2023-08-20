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
    },
  },
  plugins: [],
};
