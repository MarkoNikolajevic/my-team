import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: (theme: any) => ({
      center: true,
      padding: {
        DEFAULT: theme('spacing.6'),
        md: theme('spacing.10'),
      },
    }),
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      black: '#000',
      'midnightGreen': '#014e56',
      'lightCoral': '#f67e7e',
      'raptureBlue': '#79c8c7',
      'policeBlue': '#2c6269',
      'deepJungleGreen': '#004047',
      'sacramentoStateGreen': '#012f34',
      'darkGreen': '#002529'
    },
    extend: {
      fontSize: {
        xxs: '0.625rem', // 10px
        '3.5xl': [
          '2rem',
          {
            lineHeight: '2rem'
          }
        ],
        '4.5xl': [
          '2.5rem',
          {
            lineHeight: '2.5rem'
          }
        ],
        '6.5xl': [
          '4rem',
          {
            lineHeight: '3.5rem'
          }
        ]
      },
      spacing: {
        '4.5': '1.125rem', // 18px
        '13': '3.25rem', // 52px
        '15': '3.75rem', // 60px
        '18': '4.5rem', // 72px
        '21': '5.25rem', // 84px
        '22': '5.5rem', // 88px
        '25': '6.25rem', // 100px
        '27': '6.75rem', // 108px
        '29': '7.25rem', // 116px
        '30': '7.5rem', // 120px
        '35': '8.75rem', // 140px
        '41': '10.25rem', // 164px
        '50': '12.5rem', // 200px
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
};
export default config;
