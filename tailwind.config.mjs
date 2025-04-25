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
  corePlugins: {
    container: false
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.btn-rounded': {
          '@apply text-darkText dark:text-text text-sm font-medium inline-flex items-center px-2.5 py-1 rounded-full cursor-pointer transition-colors': {},
          '@apply bg-primary dark:bg-darkPrimary': {},
          '@apply border border-primary dark:border-darkPrimary border-opacity-20 dark:border-opacity-20': {},
          '&:hover': {
            '@apply bg-opacity-90 dark:bg-opacity-90': {},
          },
        },
        
        '.badge': {
          '@apply inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-full transition-colors': {},
          '@apply bg-secondary dark:bg-darkSecondary bg-opacity-10 dark:bg-opacity-10': {},
          '@apply text-secondary dark:text-darkSecondary': {},
        },
        '.badge-primary': {
          '@apply bg-primary dark:bg-darkPrimary bg-opacity-10 dark:bg-opacity-10': {},
          '@apply text-primary dark:text-darkPrimary': {},
        },
        '.badge-secondary': {
          '@apply bg-secondary dark:bg-darkSecondary bg-opacity-10 dark:bg-opacity-10': {},
          '@apply text-secondary dark:text-darkSecondary': {},
        },
        '.badge-tertiary': {
          '@apply bg-tertiary dark:bg-darkTertiary bg-opacity-10 dark:bg-opacity-10': {},
          '@apply text-tertiary dark:text-darkTertiary': {},
        },
        
        '.btn-flat': {
          '@apply bg-opacity-10 text-xs font-medium px-2 py-0.5 rounded uppercase transition-colors': {},
          '@apply hover:bg-opacity-20 dark:hover:bg-opacity-20': {},
        },
        '.btn-flat-primary': {
          '@apply bg-primary dark:bg-darkPrimary bg-opacity-10 dark:bg-opacity-10': {},
          '@apply text-primary dark:text-darkPrimary': {},
        },
        '.btn-flat-secondary': {
          '@apply bg-secondary dark:bg-darkSecondary bg-opacity-10 dark:bg-opacity-10': {},
          '@apply text-secondary dark:text-darkSecondary': {},
        },
        '.btn-flat-tertiary': {
          '@apply bg-tertiary dark:bg-darkTertiary bg-opacity-10 dark:bg-opacity-10': {},
          '@apply text-tertiary dark:text-darkTertiary': {},
        },
      })
    }
  ],
};
