import tseslint from 'typescript-eslint';

/**
 * Custom configuration used to lint TypeScript codebases.
 * It includes recommended, strict and stylistic rules from
 * `typescript-eslint` and includes base ESLint configuration.
 * @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.Config}
 */
const config = {
  rules: {
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unnecessary-type-parameters': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
  },
};

export default tseslint
  .config(
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: import.meta.dirname,
        },
      },
    },
    config,
  )
  .map((config) => ({
    ...config,
    files: ['**/*.{ts,tsx,mts,cts}'],
  }));
