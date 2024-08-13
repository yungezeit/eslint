/**
 * Custom configuration used for typescript test files.
 * @type {import('eslint').Linter.Config}
 */
export const testFiles = {
  files: ['**/*.test.ts'],
  rules: {
    // Be a bit more indulgent in test files.
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-declaration-merging': 'off',
    '@typescript-eslint/no-unsafe-enum-comparison': 'off',
    '@typescript-eslint/no-unsafe-function-type': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-unary-minus': 'off',

    // The following rules may be annoying when testing.
    'max-classes-per-file': 'off',
    'no-new': 'off',
  },
};
