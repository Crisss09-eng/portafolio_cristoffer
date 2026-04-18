/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        bg: '#fafaf8',
        surface: '#ffffff',
        primary: '#1a1a18',
        muted: '#6b6b66',
        accent: '#2d6a4f',
        'accent-light': '#e8f5ef',
        border: '#e4e4e0',
      },
    },
  },
  plugins: [],
}
