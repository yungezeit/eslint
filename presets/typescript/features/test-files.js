/**
 * Custom configuration used for typescript test files.
 * @type {import('eslint').Linter.Config}
 */
export const testFiles = {
  files: ['**/*.test.ts'],
  rules: {
    // The following rules may be annoying when testing.
    'max-classes-per-file': 'off',
    'no-new': 'off',
  },
};
