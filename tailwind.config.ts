import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        // Palette derived directly from the Tested Services logo (blue droplet + green cross/wordmark)
        ink: "#0A1A2A",
        slate: {
          650: "#4B5768",
        },
        brand: {
          // Logo blue (droplet + "ed" in wordmark)
          950: "#041F33",
          900: "#073955",
          800: "#0A5478",
          700: "#0B7FC4",
          600: "#1591D6",
          500: "#2DA3E0",
          400: "#5CBBE8",
          300: "#8ACEEF",
          200: "#B7E1F5",
          100: "#DFF1FB",
          50: "#F0F9FE",
        },
        emerald: {
          // Logo green (cross icon + "test" + cursive "Services")
          900: "#173C1D",
          800: "#1F5A28",
          700: "#2E8B3B",
          600: "#3DA84B",
          500: "#52BC5F",
          400: "#7DD088",
          300: "#A4E0AC",
          200: "#C6ECCB",
          100: "#DFF5E1",
          50: "#F1FBF2",
        },
        orange: {
          600: "#ea580c",
          500: "#f97316", // Corporate Orange
          400: "#fb923c",
          300: "#fdba74",
          200: "#fed7aa",
          100: "#ffedd5",
          50: "#fff7ed",
        },
        surface: {
          DEFAULT: "#FAFBFD",
          muted: "#F1F5F9",
          soft: "#F8FAFC",
          blue: "#F4F9FF",
          cyan: "#F5FBFA",
        },
        premiumCanvas: {
          hero: "#F8F4E6",
          about: "#F0F3F5",
          services: "#FFFFFF",
          industries: "#0F172A",
          global: "#F1F5F2",
          whyUs: "#FAEDE6",
          experts: "#FFFFFF",
          process: "#F0F7F9",
          beMonitoring: "#EBEDF0",
          gxp: "#1E293B",
          consulting: "#F6EFE0",
          projectManagement: "#ECE9F1",
          faq: "#EBEBE8",
          contact: "#111827",
        },
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(11, 59, 107, 0.06)",
        card: "0 8px 30px -8px rgba(11, 59, 107, 0.14)",
        "card-hover": "0 16px 44px -10px rgba(11, 59, 107, 0.22)",
        glow: "0 0 0 1px rgba(61,168,75,0.15), 0 8px 30px -6px rgba(61,168,75,0.35)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(11,59,107,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,59,107,0.05) 1px, transparent 1px)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-ring": "pulseRing 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(61,168,75,0.45)" },
          "70%": { boxShadow: "0 0 0 14px rgba(61,168,75,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(61,168,75,0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
