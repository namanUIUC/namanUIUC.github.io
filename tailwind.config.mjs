/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'eb-garamond': ['"EB Garamond"', 'serif'],
        'spectral': ['Spectral', 'serif'],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },
      colors: {
        'paper': '#FAF6F0',
        'primary': '#9C8564',
        'secondary': '#5E7C5D',
        'tertiary': '#7F95A3',
        'text': '#2D2B26',
        'mutedText': '#726E67',
        'darkPaper': '#1C1B18',
        'darkPrimary': '#D6BA9F',
        'darkSecondary': '#A8C0A4',
        'darkTertiary': '#AABAC9',
        'darkText': '#F2EDE7', 
        'darkMutedText': '#C9C2B8',
      },
    },
  },
  plugins: [],
};
