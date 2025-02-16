/**
 * @typedef {Object} TsOptions
 * @property {string[]=} internalPatterns - Patterns for internal modules.
 * @property {string=} tsconfigRootDir - Path to tsconfig root dir.
 * @property {boolean=} node - Allow node environment.
 */

import basePreset, { createBaseConfig, enforceImportOrder } from '@yungezeit/eslint-base';
import tsPreset from './features/ts.js';
import { testFiles } from './features/test-files.js';

const delegateBaseRule = {
  files: ['**/*.{ts,tsx,mts,cts}'],
  rules: { 'no-undef': 'off', 'no-unused-vars': 'off' },
};

export { enforceImportOrder };

export const flatConfig = [...basePreset, ...tsPreset, testFiles, delegateBaseRule];

/**
 * Create a ESLint configuration array for a TypeScript project.
 * @param configs {import('@typescript-eslint/utils').TSESLint.FlatConfig.Config[]} Configurations.
 * @param options {TsOptions} TypeScript preset options.
 */
export function createTsConfig(configs, options) {
  let finalConfig = createBaseConfig([...configs, ...flatConfig], {
    internalPatterns: options.internalPatterns,
    node: options.node,
  });

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
