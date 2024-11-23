/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js}",
    "./dist/**/*.{html,js}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem'
      },
      fontFamily: {
        'noto': ['Noto Serif', 'serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            fontSize: theme('fontSize.xl[0]'),
            lineHeight: theme('fontSize.xl[1].lineHeight'),
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            'figure': {
              margin: '3rem auto',
            },
            'figure > img': {
              borderRadius: '0.5rem',
              width: '100%',
            },
            'figure > figcaption': {
              textAlign: 'center',
              color: 'rgb(163 163 163)',
              fontSize: '0.875rem',
              marginTop: '0.75rem',
            },
            '[class~="lead"]': {
              color: theme('colors.neutral.400'),
            },
            a: {
              color: theme('colors.neutral.200'),
              '&:hover': {
                color: theme('colors.neutral.100'),
              },
            },
            strong: {
              color: theme('colors.neutral.200'),
            },
            'ol[type="A"]': {
              '--list-counter-style': 'upper-alpha',
            },
            'ol[type="a"]': {
              '--list-counter-style': 'lower-alpha',
            },
            'ol[type="A" s]': {
              '--list-counter-style': 'upper-alpha',
            },
            'ol[type="a" s]': {
              '--list-counter-style': 'lower-alpha',
            },
            'ol[type="I"]': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i"]': {
              '--list-counter-style': 'lower-roman',
            },
            'ol[type="I" s]': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i" s]': {
              '--list-counter-style': 'lower-roman',
            },
            'ol[type="1"]': {
              '--list-counter-style': 'decimal',
            },
            'ol > li': {
              position: 'relative',
            },
            'ol > li::before': {
              content: 'counter(list-item, var(--list-counter-style, decimal)) "."',
              position: 'absolute',
              fontWeight: '400',
              color: theme('colors.neutral.500'),
            },
            'ul > li': {
              position: 'relative',
            },
            'ul > li::before': {
              content: '""',
              position: 'absolute',
              backgroundColor: theme('colors.neutral.500'),
              borderRadius: '50%',
            },
            hr: {
              borderColor: theme('colors.neutral.800'),
              marginTop: '2em',
              marginBottom: '2em',
            },
            blockquote: {
              fontWeight: '500',
              fontStyle: 'italic',
              color: theme('colors.neutral.200'),
              borderLeftWidth: '0.25rem',
              borderLeftColor: theme('colors.neutral.800'),
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
              marginTop: '1.6em',
              marginBottom: '1.6em',
              paddingLeft: '1em',
            },
            h1: {
              color: theme('colors.neutral.200'),
              fontWeight: '700',
            },
            h2: {
              color: theme('colors.neutral.200'),
              fontWeight: '600',
            },
            h3: {
              color: theme('colors.neutral.200'),
              fontWeight: '600',
            },
            h4: {
              color: theme('colors.neutral.200'),
              fontWeight: '600',
            },
            'figure figcaption': {
              color: theme('colors.neutral.400'),
            },
            code: {
              color: theme('colors.neutral.200'),
              fontWeight: '500',
            },
            'a code': {
              color: theme('colors.neutral.200'),
            },
            pre: {
              color: theme('colors.neutral.200'),
              backgroundColor: theme('colors.neutral.900'),
            },
            'pre code': {
              backgroundColor: 'transparent',
              borderWidth: '0',
              borderRadius: '0',
              padding: '0',
              fontWeight: '400',
              color: 'inherit',
              fontSize: 'inherit',
              fontFamily: 'inherit',
              lineHeight: 'inherit',
            },
          },
        },
        neutral: {
          css: {
            '--tw-prose-body': 'inherit',
            '--tw-prose-headings': 'inherit',
            '--tw-prose-lead': 'inherit',
            '--tw-prose-links': 'inherit',
            '--tw-prose-bold': 'inherit',
            '--tw-prose-counters': 'inherit',
            '--tw-prose-bullets': 'inherit',
            '--tw-prose-hr': 'inherit',
            '--tw-prose-quotes': 'inherit',
            '--tw-prose-quote-borders': 'inherit',
            '--tw-prose-captions': 'inherit',
            '--tw-prose-code': 'inherit',
            '--tw-prose-pre-code': 'inherit',
            '--tw-prose-pre-bg': 'inherit',
            '--tw-prose-th-borders': 'inherit',
            '--tw-prose-td-borders': 'inherit',
          },
        },
        slate: {
          css: {
            '--tw-prose-body': theme('colors.slate.700'),
            '--tw-prose-headings': theme('colors.slate.900'),
            '--tw-prose-lead': theme('colors.slate.600'),
            '--tw-prose-links': theme('colors.slate.900'),
            '--tw-prose-bold': theme('colors.slate.900'),
            '--tw-prose-counters': theme('colors.slate.500'),
            '--tw-prose-bullets': theme('colors.slate.300'),
            '--tw-prose-hr': theme('colors.slate.200'),
            '--tw-prose-quotes': theme('colors.slate.900'),
            '--tw-prose-quote-borders': theme('colors.slate.200'),
            '--tw-prose-captions': theme('colors.slate.500'),
            '--tw-prose-code': theme('colors.slate.900'),
            '--tw-prose-pre-code': theme('colors.slate.900'),
            '--tw-prose-pre-bg': theme('colors.slate.50'),
            '--tw-prose-th-borders': theme('colors.slate.300'),
            '--tw-prose-td-borders': theme('colors.slate.200'),
            '--tw-prose-invert-body': theme('colors.slate.300'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.slate.400'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.slate.400'),
            '--tw-prose-invert-bullets': theme('colors.slate.600'),
            '--tw-prose-invert-hr': theme('colors.slate.700'),
            '--tw-prose-invert-quotes': theme('colors.slate.100'),
            '--tw-prose-invert-quote-borders': theme('colors.slate.700'),
            '--tw-prose-invert-captions': theme('colors.slate.400'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.slate.300'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.slate.600'),
            '--tw-prose-invert-td-borders': theme('colors.slate.700'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  colors: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
      950: '#082f49',
    },
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
      950: '#0a0a0a',
    },
    slate: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#04081a',
    },
    mocha: {
      base: '#1e1e2e',
      surface0: '#313244',
      surface1: '#45475a',
      text: '#cdd6f4',
      subtext: '#a6adc8',
      overlay0: '#6c7086',
      blue: '#89b4fa',
      lavender: '#b4befe',
      mauve: '#cba6f7',
      red: '#f38ba8',
      peach: '#fab387'
    }
  },
}
