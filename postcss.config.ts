// postcss.config.ts
import type { Plugin } from 'postcss';

const config: { plugins: { [key: string]: Plugin } } = {
  plugins: {
    tailwindcss: {
      postcssPlugin: ''
    },
    autoprefixer: {
      postcssPlugin: ''
    },
  },
};

export default config;
