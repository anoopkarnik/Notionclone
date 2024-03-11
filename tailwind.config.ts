import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "washed-purple": {
          "50": "#f8f7ff",
          "100": "#e8e7ff",
          "200": "#dddcff",
          "300": "#cdcbff",
          "400": "#c4c1ff",
          "500": "#b5b2ff",
          "600": "#a5a2e8",
          "700": "#817eb5",
          "800": "#64628c",
          "900": "#4c4b6b"
         },
         "washed-blue": {
          "50": "#f0f3ff",
          "100": "#d0daff",
          "200": "#bac9ff",
          "300": "#9ab0ff",
          "400": "#86a1ff",
          "500": "#6889ff",
          "600": "#5f7de8",
          "700": "#4a61b5",
          "800": "#394b8c",
          "900": "#2c3a6b"
         },
         "primary-blue": {
          "50": "#e6f0ff",
          "100": "#b1d1ff",
          "200": "#8cbaff",
          "300": "#579bff",
          "400": "#3687ff",
          "500": "#0469ff",
          "600": "#0460e8",
          "700": "#034bb5",
          "800": "#023a8c",
          "900": "#022c6b"
         },
         "primary-purple": {
          "50": "#f1e6ff",
          "100": "#d3b0ff",
          "200": "#bd8aff",
          "300": "#9f54ff",
          "400": "#8d33ff",
          "500": "#7000ff",
          "600": "#6600e8",
          "700": "#5000b5",
          "800": "#3e008c",
          "900": "#2f006b"
         },
         "Neutrals": {
          "1": "#ffffff",
          "2": "#fcfcfd",
          "3": "#f5f5f6",
          "4": "#f0f0f1",
          "5": "#d9d9dc",
          "6": "#c0bfc4",
          "7": "#8e8c95",
          "8": "#5b5966",
          "9": "#474553",
          "10": "#292637",
          "11": "#211f30",
          "12": "#171427",
          "13": "#030014"
         },
         "brand": {
          "washed-purple": "#b5b2ff",
          "washed-blue": "#6889ff",
          "primary-blue": "#0469ff",
          "primary-purple": "#7000ff",
          "dark": "#030014"
         }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config