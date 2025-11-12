
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#111314",
        card: "rgba(255,255,255,0.06)",
        border: "rgba(255,255,255,0.12)",
        elow: "#FF2D2E"
      },
      boxShadow: {
        glow: "0 0 40px rgba(255,255,255,0.15)",
        ring: "0 0 60px rgba(255,45,46,0.35)",
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-6px)" } },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(255,45,46,0.0)" },
          "50%": { boxShadow: "0 0 60px rgba(255,45,46,0.35)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite"
      },
      backdropBlur: {
        xs: "2px"
      },
      borderRadius: {
        xxl: "1.5rem"
      }
    },
  },
  plugins: [],
}
