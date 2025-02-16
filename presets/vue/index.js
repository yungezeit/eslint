/**
 * @typedef {Object} VueOptions
 * @property {string[]=} internalPatterns - Patterns for internal modules.
 * @property {string=} tsconfigRootDir - Path to tsconfig root dir.
 * @property {boolean=} node - Allow node environment.
 */

import typescriptPreset, { createTsConfig, enforceImportOrder } from '@yungezeit/eslint-typescript';
import vuePreset from './features/vue.js';
import globals from 'globals';

export { enforceImportOrder };

export const flatConfig = [
  ...typescriptPreset,
  ...vuePreset,
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser },
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
      },
    },
    settings: {
      'import/resolver': {},
    },
  },
];

/**
 * Create a ESLint configuration array for a Vue project.
 * @param configs {import('@typescript-eslint/utils').TSESLint.FlatConfig.Config[]} Configurations.
 * @param options {VueOptions} Vue preset options
 */
export function createVueConfig(configs, options) {
  return createTsConfig(
    [
      ...flatConfig,
      ...configs,
      {
        files: ['*.vue', '**/*.vue'],
        rules: {
          'vue/quote-props': 'error',
        },
      },
    ],
    {
      internalPatterns: options.internalPatterns,
      tsconfigRootDir: options.tsconfigRootDir,
      node: options.node,
    },
  );
}

export default flatConfig;
