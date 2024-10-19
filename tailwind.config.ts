import { type Config } from "tailwindcss";
import typography from "typography";
import daisyui from "daisyui";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  plugins: [
    typography,
    daisyui,
  ],
  daisyui: {
    themes: ["valentine"],
  },
  theme: {
    extend: {},
  },
} satisfies Config;
