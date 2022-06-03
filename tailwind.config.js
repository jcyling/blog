module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
    },
    theme: {
      fontFamily: {
        "roboto": ["Roboto", "sans-serif"]
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
