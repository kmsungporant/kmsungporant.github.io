function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        WitchingHourLight: "#c31432",
        NavyBlueLight: "#0047AB",
        WitchingHourDark: "#240b36",
        SambucusDark: "#181830",
        SambucusLight: "#a1a1cf",
        DarkGray: "#1e1e1e",
      },
      fontFamily: {
        Consolas: ["Consolas"],
        yellowTail: ["YELLOWTAIL"],
        poppins: ["Poppins"],
      },
    },
  },

  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar")],
  variants: { scrollbar: ["dark"] },
};
