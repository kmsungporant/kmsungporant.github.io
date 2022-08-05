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
        dark: {
          primary: "#2C3639",
          secondary: "#3F4E4F",
          tertiary: "#A27B5C",
          quaternary: "#DCD7C9",
        },
        light: {
          Primary: "2C3333",
          Secondary: "395B64",
          Tertiary: "A5C9CA",
          Quaternary: "E7F6F2",
        },
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
