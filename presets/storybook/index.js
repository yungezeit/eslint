/**
 * @typedef {Object} StorybookOptions
 * @property {string[]=} internalPatterns - Patterns for internal modules.
 * @property {string=} tsconfigRootDir - Path to tsconfig root dir.
 */

import storybook from 'eslint-plugin-storybook';
import typescriptPreset, { enforceImportOrder } from '@yungezeit/eslint-typescript';

export { enforceImportOrder };

export const flatConfig = [...typescriptPreset, ...storybook.configs['flat/recommended']];

/**
 * Create a ESLint configuration array for a Storybook project.
 * @param configs {import('eslint').ESLint.ConfigData[]} Configurations.
 * @param options {StorybookOptions} Vue preset options
 */
export function createStorybookConfig(configs, options) {
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
