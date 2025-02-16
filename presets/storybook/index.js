/**
 * @typedef {Object} StorybookOptions
 * @property {string[]=} internalPatterns - Patterns for internal modules.
 * @property {string=} tsconfigRootDir - Path to tsconfig root dir.
 * @property {boolean=} node - Allow node environment.
 */

import storybook from 'eslint-plugin-storybook';
import typescriptPreset, { createTsConfig, enforceImportOrder } from '@yungezeit/eslint-typescript';

export { enforceImportOrder };

export const flatConfig = [...typescriptPreset, ...storybook.configs['flat/recommended']];

/**
 * Create a ESLint configuration array for a Storybook project.
 * @param configs {import('@typescript-eslint/utils').TSESLint.FlatConfig.Config[]} Configurations.
 * @param options {StorybookOptions} Vue preset options
 */
export function createStorybookConfig(configs, options) {
  return createTsConfig([...flatConfig, ...configs], {
    internalPatterns: options.internalPatterns,
    tsconfigRootDir: options.tsconfigRootDir,
    node: options.node,
  });
}

export default flatConfig;
