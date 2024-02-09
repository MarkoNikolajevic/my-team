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
      },
    }),
    extend: {
      colors: {
        'midnightGreen': '#014e56',
        'lightCoral': '#f67e7e',
        'raptureBlue': '#79c8c7',
        'policeBlue': '#2c6269',
        'deepJungleGreen': '#004047',
        'sacramentoStateGreen': '#012f34',
        'darkGreen': '#002529'
      },
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
        ]
      },
      spacing: {
        '4.5': '1.125rem', // 18px
        '25': '6.25rem', // 100px
      }
    }
  },
  plugins: [],
};
export default config;
