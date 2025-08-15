module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0e0f1a",
        surface: "#1f232e",
        foreground: "#e6e6e9",
        muted: "#a0a0a8",
        accent: "#0AFF9D"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["SFMono-Regular", "Consolas", "Liberation Mono", "monospace"]
      },
      keyframes: {
        blink: { "0%, 50%": { opacity: "1" }, "50.01%, 100%": { opacity: "0" } }
      },
      animation: {
        blink: "blink 1s steps(2, end) infinite"
      }
    }
  },
  plugins: []
};
