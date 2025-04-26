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
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: 'var(--tw-prose-links)',
              '&:hover': {
                color: 'var(--tw-prose-links-hover)',
              },
            },
            'h1, h2, h3, h4': {
              'font-family': '"EB Garamond", serif',
            },
            '--tw-prose-body': '#10121A',
            '--tw-prose-headings': '#10121A',
            '--tw-prose-lead': '#10121A',
            '--tw-prose-links': '#FD4B22',
            '--tw-prose-links-hover': '#d03111',
            '--tw-prose-bold': '#10121A',
            '--tw-prose-counters': '#6B7280',
            '--tw-prose-bullets': '#6B7280',
            '--tw-prose-hr': '#E5E7EB',
            '--tw-prose-quotes': '#1F2937',
            '--tw-prose-quote-borders': '#E5E7EB',
            '--tw-prose-captions': '#6B7280',
            '--tw-prose-code': '#10121A',
            '--tw-prose-pre-code': '#E5E7EB',
            '--tw-prose-pre-bg': '#1F2937',
            '--tw-prose-th-borders': '#D1D5DB',
            '--tw-prose-td-borders': '#E5E7EB',
          },
        },
        invert: {
          css: {
            '--tw-prose-body': '#FFFFFF',
            '--tw-prose-headings': '#FFFFFF',
            '--tw-prose-lead': '#FFFFFF',
            '--tw-prose-links': '#7ECBD9',
            '--tw-prose-links-hover': '#5bb8ca',
            '--tw-prose-bold': '#FFFFFF',
            '--tw-prose-counters': '#8F9097',
            '--tw-prose-bullets': '#8F9097',
            '--tw-prose-hr': '#374151',
            '--tw-prose-quotes': '#F3F4F6',
            '--tw-prose-quote-borders': '#374151',
            '--tw-prose-captions': '#8F9097',
            '--tw-prose-code': '#FFFFFF',
            '--tw-prose-pre-code': '#D1D5DB',
            '--tw-prose-pre-bg': '#2C3039',
            '--tw-prose-th-borders': '#4B5563',
            '--tw-prose-td-borders': '#374151',
          },
        },
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
    },
    function() {
      try {
        return require('@tailwindcss/typography');
      } catch (e) {
        console.warn('Tailwind Typography plugin not installed. Run `npm install @tailwindcss/typography` to enable Markdown styling.');
        return {};
      }
    }(),
  ],
};
