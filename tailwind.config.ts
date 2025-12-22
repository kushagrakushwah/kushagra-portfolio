import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['Exo 2', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        neon: {
          cyan: "hsl(var(--neon-cyan))",
          purple: "hsl(var(--neon-purple))",
          green: "hsl(var(--matrix-green))",
        },
        void: {
          black: "hsl(var(--void-black))",
        },
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
        "glitch-1": {
          "0%, 100%": { clipPath: "inset(40% 0 61% 0)" },
          "20%": { clipPath: "inset(92% 0 1% 0)" },
          "40%": { clipPath: "inset(43% 0 1% 0)" },
          "60%": { clipPath: "inset(25% 0 58% 0)" },
          "80%": { clipPath: "inset(54% 0 7% 0)" },
        },
        "glitch-2": {
          "0%, 100%": { clipPath: "inset(50% 0 36% 0)" },
          "20%": { clipPath: "inset(15% 0 66% 0)" },
          "40%": { clipPath: "inset(72% 0 5% 0)" },
          "60%": { clipPath: "inset(61% 0 14% 0)" },
          "80%": { clipPath: "inset(15% 0 71% 0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "border-glow": {
          "0%, 100%": { borderColor: "hsl(var(--neon-cyan))" },
          "50%": { borderColor: "hsl(var(--neon-purple))" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "glitch-1": "glitch-1 0.3s infinite linear alternate-reverse",
        "glitch-2": "glitch-2 0.3s infinite linear alternate-reverse",
        shimmer: "shimmer 2s infinite linear",
        "border-glow": "border-glow 2s infinite ease-in-out",
      },
      backgroundImage: {
        "gradient-neon": "linear-gradient(135deg, hsl(var(--neon-cyan)), hsl(var(--neon-purple)))",
        "gradient-glow": "linear-gradient(180deg, hsl(var(--neon-cyan) / 0.2), transparent)",
      },
      boxShadow: {
        neon: "0 0 5px hsl(var(--neon-cyan)), 0 0 10px hsl(var(--neon-cyan)), 0 0 20px hsl(var(--neon-cyan))",
        "neon-purple": "0 0 5px hsl(var(--neon-purple)), 0 0 10px hsl(var(--neon-purple)), 0 0 20px hsl(var(--neon-purple))",
        "neon-sm": "0 0 5px hsl(var(--neon-cyan)), 0 0 10px hsl(var(--neon-cyan) / 0.5)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
