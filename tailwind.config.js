/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem'
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        neutral: {
          950: '#0a0a0a',
          900: '#171717',
          800: '#262626',
          700: '#404040',
          600: '#525252',
          500: '#737373',
          400: '#a3a3a3',
          300: '#d4d4d4',
          200: '#e5e5e5',
          100: '#f5f5f5',
        },
      },
      boxShadow: {
        'custom': '2px 2px 0 #0a0a0a',
        'custom-hover': '3px 3px 0 #0a0a0a',
        'custom-active': '1px 1px 0 #0a0a0a',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addComponents, theme }) {
      addComponents({
        '.textarea-custom': {
          backgroundColor: theme('colors.neutral.800'),
          borderWidth: '2px',
          borderColor: theme('colors.neutral.900'),
          boxShadow: theme('boxShadow.custom'),
          borderRadius: theme('borderRadius.md'),
          color: theme('colors.neutral.200'),
          fontFamily: theme('fontFamily.mono'),
          '&:focus': {
            boxShadow: theme('boxShadow.custom-hover'),
          },
        },
        '.btn-custom': {
          backgroundColor: theme('colors.neutral.800'),
          borderWidth: '2px',
          borderColor: theme('colors.neutral.900'),
          boxShadow: theme('boxShadow.custom'),
          borderRadius: theme('borderRadius.md'),
          color: theme('colors.neutral.200'),
          fontWeight: theme('fontWeight.bold'),
          fontFamily: theme('fontFamily.mono'),
          '&:hover': {
            backgroundColor: theme('colors.neutral.700'),
          },
          '&:active': {
            boxShadow: theme('boxShadow.custom-active'),
            transform: 'translate(1px, 1px)',
          },
        },
      })
    },
  ],
}
