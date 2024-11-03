/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#18181B',
        layout: '#27272A',
      },
      spacing: {
        'calc-h-screen-minus-h-32': 'calc(100vh - 8rem)',
      },
    },
  },
  plugins: [],
};
