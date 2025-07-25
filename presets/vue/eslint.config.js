import config from './index.js';
export default [
  ...config,
  {
    rules: {
      'import/no-nodejs-modules': 'off',
      'import/named': 'off', // @todo only target *.md.
    },
  },
];
