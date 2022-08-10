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
          primary: "#A27B5C",
          secondary: "#DCD7C9",
          tertiary: "#3F4E4F",
          background: "#2C3639",
        },
        light: {
          primary: "#395B64",
          secondary: "#2C3333",
          tertiary: "#A5C9CA",
          background: "#E7F6F2",
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
