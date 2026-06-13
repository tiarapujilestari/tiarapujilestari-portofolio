/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "#0b131f",
        cardBg: "#111a24",
        neonCyan: "#00f3ff",
        neonBlue: "#0066cc",
      },
      boxShadow: {
        "neon-glow": "0 0 15px rgba(0, 243, 255, 0.5)",
        "neon-text": "0 0 10px rgba(0, 243, 255, 0.6)",
      },
    },
  },
  plugins: [],
};
