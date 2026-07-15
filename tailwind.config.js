/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E54B41', // Coral/Vermelho-alaranjado
          50: '#fef1f0',
          100: '#fce2e0',
          200: '#f8c9c6',
          300: '#f2a6a0',
          400: '#eb7b72',
          500: '#e54b41',
          600: '#d22e23',
          700: '#b02117',
          800: '#922017',
          900: '#792016',
          950: '#410c08',
        },
        blue: {
          DEFAULT: '#2563EB', // Azul funcional mantido
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
        },
        dark: {
          DEFAULT: '#141A28', // Azul-marinho profundo da referência
          50: '#f5f7fa',
          100: '#eaeff5',
          200: '#d1dee9',
          300: '#abc4d8',
          400: '#7fa3c1',
          500: '#5e86aa',
          600: '#496b8d',
          700: '#3c5673',
          800: '#334861',
          900: '#2d3d51',
          950: '#141A28',
        },
        surface: {
          50: '#FFFFFF',
          100: '#F9FAFB',
          200: '#F3F4F6',
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient-x': 'gradient-x 3s ease infinite',
        'bg-pan': 'bg-pan 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #3B82F6' },
          '100%': { boxShadow: '0 0 20px #3B82F6, 0 0 10px #3B82F6' },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'bg-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}
