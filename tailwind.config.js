/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#000000',
          dark: '#0a0a0a',
          card: '#121212',
          surface: '#18181b',
          border: '#27272a',
          lime: '#ccff00',
          'lime-hover': '#b5e300',
          robinhood: '#00c805',
          'robinhood-hover': '#00b004',
          muted: '#9ca3af',
        }
      },
      fontFamily: {
        display: ['Syne', 'Outfit', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'comic-lime': '4px 4px 0px 0px #ccff00',
        'comic-lime-sm': '2px 2px 0px 0px #ccff00',
        'comic-lime-lg': '6px 6px 0px 0px #ccff00',
        'comic-white': '4px 4px 0px 0px #ffffff',
        'comic-white-sm': '2px 2px 0px 0px #ffffff',
        'comic-black': '4px 4px 0px 0px #000000',
        'comic-robinhood': '4px 4px 0px 0px #00c805',
        'comic-dark': '4px 4px 0px 0px #27272a',
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 28s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}
