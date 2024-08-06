/**
 * Custom configuration used for typescript test files.
 * @type {import('eslint').Linter.Config}
 */
export const testFiles = {
  files: ['**/*.test.ts'],
  rules: {
    'max-classes-per-file': 'off',
    'no-new': 'off',
  },
};
