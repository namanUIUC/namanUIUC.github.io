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
        'paper': '#FFFFFF',
        'primary': '#FD4B22',
        'secondary': '#1676D8',
        'tertiary': '#009262',
        'text': '#10121A',
        'mutedText': '#6B7280',
        'darkPaper': '#10121A',
        'darkPrimary': '#7ECBD9',
        'darkSecondary': '#FEB300',
        'darkTertiary': '#FD4B22',
        'darkText': '#FFFFFF', 
        'darkMutedText': '#8F9097',
      },
    },
  },
  plugins: [],
};
