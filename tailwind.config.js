/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      dark: "#141416",
      light: "#FFFFFF",
      primary: "#B91202",
      "primary-text": "#141416",
      "secondary-text": "#CA4D41",
      "gray-bg-light": "#F5F4FA",
      "card-bg-dark": "#1A1A1C",
      test_yelow: "#FEEC37",
      test_blue: "#006BFF",
      test_red: "#FF0000",
    },

    extend: {
      spacing: {
        container: "80rem",
        "container-fluid": "100%",
      },
    },
  },
  plugins: [],
};
