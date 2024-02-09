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
      white: '#ffffff',
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
        '15': '3.75rem', // 60px
        '21': '5.25rem', // 84px
        '25': '6.25rem', // 100px
        '35': '8.75rem', // 140px
        '41': '10.25rem', // 164px
      }
    }
  },
  plugins: [],
};
export default config;
