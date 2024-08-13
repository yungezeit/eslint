import js from '@eslint/js';

/**
 * Custom configuration used to lint ES modules.
 * It includes ESLint's own recommended rules.
 * @type {import('eslint').Linter.Config}
 */
const config = {
  rules: {
    ...js.configs.recommended.rules,
    /** Only allow console.info, console.warn, and console.error. */
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    /** Sparse arrays aren't that confusing and may simplify code. */
    'no-sparse-arrays': 'off',
    /** Allow unused variables that start with an underscore for later use. */
    'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
  },
};

export default [config];
