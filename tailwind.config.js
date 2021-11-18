const colors = require('tailwindcss/colors')

module.exports = {
  enabled: true,
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', 
  theme: {
    extend: {
      keyframes:{
      ripple:  {
      "0%": {
        transform: "scale(1)",
        opacity: 1
      },
      "50%": {
        transform: "scale(10)",
        opacity: 0.375
      },
      "100%": {
        transform: "scale(35)",
        opacity: 0
      },}
      },
      animation:{
        ripple: "0.9s ease 1 forwards ripple",
      },
      colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      },
      spacing: {
        88: '22rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
