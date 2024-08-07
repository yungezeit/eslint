import typescriptPreset from '@yungezeit/eslint-typescript';
import vuePreset from './features/vue.js';

export default [
  ...typescriptPreset,
  ...vuePreset,
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  },
];
