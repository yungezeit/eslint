import basePreset, { enforceImportOrder } from '@yungezeit/eslint-base';
import tsPreset from './features/ts.js';
import { testFiles } from './features/test-files.js';

const delegateBaseRule = {
  files: ['**/*.{ts,tsx,mts,cts}'],
  rules: { 'no-undef': 'off', 'no-unused-vars': 'off' },
};

/**
 * Create a TypeScript ESLint configuration.
 * @param internalPatterns {string[]} Patterns for internal modules.
 * @param pathGroups {any[]} Path groups for import/order.
 */
export function createBaseConfig(internalPatterns, pathGroups) {
  return [...flatConfig, enforceImportOrder(internalPatterns, pathGroups)];
}

export const flatConfig = [...basePreset, ...tsPreset, testFiles, delegateBaseRule];

export default flatConfig;
