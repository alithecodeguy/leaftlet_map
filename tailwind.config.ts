import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        iransansx_fa: ['var(--font-iransansx_fa)'],
      },
      backgroundImage: {
        bg_pattern: "url('/images/png/alithecodeguy.png')",
      },
      backgroundSize: {
        '20%': '20%',
        '16': '4rem',
      },
    },
  },
  plugins: [],
};
export default config;
