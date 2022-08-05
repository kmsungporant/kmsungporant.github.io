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
        Cream: "F6E3BA",
      },
      fontFamily: {
        Consolas: ["Consolas"],
        yellowTail: ["YELLOWTAIL"],
        poppins: ["Poppins"],
      },
    },
  },

  plugins: [require("tailwind-scrollbar")],
  variants: { scrollbar: ["dark"] },
};
