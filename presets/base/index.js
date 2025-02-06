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
 * Create a  config that enforce import order.
 * @param internalPatterns {string[]} Patterns for internal modules.
 * @param pathGroups {any[]} Path groups for import/order.
 */
export function enforceImportOrder(internalPatterns, pathGroups) {
  return {
    rules: {
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          groups: ['builtin', 'external', 'internal', 'parent', 'index', 'sibling'],
          alphabetize: { order: 'asc', orderImportKind: 'asc' },
          pathGroups: [
            ...internalPatterns.map((pattern) => ({
              pattern,
              group: 'internal',
              position: 'after',
            })),
            ...pathGroups,
          ],
        },
      ],
    },
  };
}

export default flatConfig;
