/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-space': 'hsl(240, 28%, 9%)',
        'space-blue': 'hsl(240, 25%, 16%)',
        'gemini-blue': 'hsl(239, 84%, 60%)',
        'gemini-purple': 'hsl(271, 81%, 56%)',
        'gemini-pink': 'hsl(333, 84%, 59%)',
        'glass-white': 'hsla(0, 0%, 100%, 0.1)',
        'glass-border': 'hsla(0, 0%, 100%, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
} 