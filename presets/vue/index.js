/**
 * @typedef {Object} VueOptions
 * @property {string[]=} internalPatterns - Patterns for internal modules.
 * @property {string=} tsconfigRootDir - Path to tsconfig root dir.
 */

import typescriptPreset, { enforceImportOrder } from '@yungezeit/eslint-typescript';
import vuePreset from './features/vue.js';

export { enforceImportOrder };

export const flatConfig = [
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

/**
 * Create a ESLint configuration array for a Vue project.
 * @param configs {import('eslint').ESLint.ConfigData[]} Configurations.
 * @param options {VueOptions} Vue preset options
 */
export function createVueConfig(configs, options) {
  let finalConfig = [...flatConfig, ...configs];

  if (options.internalPatterns?.length) {
    finalConfig.push(enforceImportOrder(options.internalPatterns));
  }

  if (options.tsconfigRootDir) {
    finalConfig.push({
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: options.tsconfigRootDir,
        },
      },
    });
  }

  return finalConfig;
}

export default flatConfig;
