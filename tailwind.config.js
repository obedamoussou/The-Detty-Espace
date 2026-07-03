/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['"Anton"', 'system-ui', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      colors: {
        night: {
          950: '#0d0805',
          900: '#140d08',
          850: '#1a110b',
          800: '#231710',
        },
        sand: {
          50: '#fdf9f3',
          100: '#f8efe2',
          200: '#f0e2cd',
        },
        ember: {
          400: '#ff8a4c',
          500: '#f2691f',
          600: '#e2560f',
          700: '#c0430a',
        },
      },
      keyframes: {
        'flicker': {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.85', filter: 'brightness(1.25)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'shimmer': {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        flicker: 'flicker 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s infinite',
      },
    },
  },
  plugins: [],
}
