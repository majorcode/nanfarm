module.exports = {
  content: [
    "./routes/**/*.{js,jsx,ts,tsx}",
    "./islands/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
  daisyui: {
    themes: ["valentine"]
  },
  theme: {
    extend: {},
  },
}
