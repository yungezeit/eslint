/**
 * @typedef {Object} BaseOptions
 * @property {string[]=} internalPatterns - Patterns for internal modules.
 */

import esPreset from './features/es.js';
import importsPreset from './features/imports.js';
import jsonPreset from './features/json.js';
import mdPreset from './features/markdown.js';
import pkgPreset from './features/pkg.js';
import promisesPreset from './features/promises.js';
import regexpPreset from './features/regexp.js';
import yamlPreset from './features/yaml.js';
import { testFiles } from './features/test-files.js';

const ECMA_LATEST = { languageOptions: { ecmaVersion: 'latest' } };

export const flatConfig = [
  ECMA_LATEST,
  ...esPreset,
  ...importsPreset,
  ...jsonPreset,
  ...mdPreset,
  ...pkgPreset,
  ...promisesPreset,
  ...regexpPreset,
  ...yamlPreset,
  testFiles,
  {
    ignores: ['**/*.d.ts'],
  },
];

/**
 * Create a config that enforce import order.
 * @param internalPatterns {string[]} Patterns for internal modules.
 */
export function enforceImportOrder(internalPatterns) {
  return {
    rules: {
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          groups: ['builtin', 'external', 'internal', ['parent', 'index', 'sibling']],
          alphabetize: { order: 'asc', orderImportKind: 'asc' },
          pathGroupsExcludedImportTypes: ['builtin', 'object'],
          pathGroups: [
            {
              pattern: `{` + internalPatterns.join(',') + `}`,
              group: 'internal',
              position: 'after',
            },
          ],
        },
      ],
    },
  };
}

/**
 * Create a base ESLint configuration.
 * @param configs {import('eslint').ESLint.ConfigData[]} Configurations.
 * @param options {BaseOptions} Base preset options.
 */
export function createBaseConfig(configs, options) {
  let finalConfig = [...flatConfig, ...configs];

  if (options.internalPatterns?.length) {
    finalConfig.push(enforceImportOrder(options.internalPatterns));
  }

  return finalConfig;
}

export default flatConfig;
