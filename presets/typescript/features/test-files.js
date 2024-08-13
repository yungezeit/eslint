/**
 * Custom configuration used for typescript test files.
 * @type {import('eslint').Linter.Config}
 */
export const testFiles = {
  files: ['**/*.test.ts'],
  rules: {
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    'max-classes-per-file': 'off',
    'no-new': 'off',
  },
};
