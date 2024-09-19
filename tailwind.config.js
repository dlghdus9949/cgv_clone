/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, rgb(215, 67, 87), rgb(241, 79, 58) 59%, rgb(239, 100, 47))",
      },
    },
  },
  plugins: [],
};
