/**
 * @typedef {Object} TsOptions
 * @property {string[]=} internalPatterns - Patterns for internal modules.
 * @property {string=} tsconfigRootDir - Path to tsconfig root dir.
 * @property {boolean=} enableMarkdownTls - Should TypeScript language service be enabled for markdown files?
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
  let finalConfig = createBaseConfig([...flatConfig, ...configs], {
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

    // TypeScript code blocks within markdown files may be validated against your actual tsconfig.
    // Chances are you don't need this because uou're likely writing such code blocks to illustrate
    // consumption abd don't really care about the type system, but could by setting this to `true`.
    if (!options.enableMarkdownTls) {
      finalConfig.push({ ignores: ['**/*.md/*.ts', '**/*.md/*.tsx'] });
    }
  }

  return finalConfig;
}

export default flatConfig;
