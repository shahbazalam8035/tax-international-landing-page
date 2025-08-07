/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        // do not include 2xl
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      // override completely to remove 2xl globally
    },
    fontFamily: {
      mullish: "mullish, sans-serif",
      nuniton: "nuniton, sans-serif",
      outfit: "Outfit, sans-serif",
      poppins: "poppins, sans-serif",
      kalam: "Kalam, cursive",
      manrope: ['Manrope', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        "custom-colour":
          "radial-gradient(circle, rgba(134, 78, 255, 0.3) 0%, rgba(255, 255, 255, 0) 70%)",
      },
      boxShadow: {
        "glowing-white": "0 0 20px rgba(255, 255, 255, 0.5)",
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 70))' },
        },
      },
      animation: {
        scroll: 'scroll 90s linear infinite',
      },
    },
  },
  plugins: [],
};
