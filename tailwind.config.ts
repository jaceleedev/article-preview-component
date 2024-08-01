import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-grayish-blue': '#ECF2F8',
        'grayish-blue': '#9DAEC2',
        'desaturated-dark-blue': '#6E8098',
        'dark-grayish-blue': '#48556A',
      },
      fontFamily: {
        manrope: ['var(--font-manrope)'],
      },
    },
  },
  plugins: [],
};
export default config;
