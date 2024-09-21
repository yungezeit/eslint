import tseslint from 'typescript-eslint';

/**
 * Custom configuration used to lint TypeScript codebases.
 * It includes recommended, strict and stylistic rules from
 * `typescript-eslint` and includes base ESLint configuration.
 * @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.Config}
 */
const config = {
  rules: {
    /** Forcing `import type { }` makes imports clearer and my relieve parsers. */
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    /**
     * There are some legit cases where index access is necessary.
     * But keep in mind that members visibilities are lost when using index access.
     */
    '@typescript-eslint/dot-notation': 'off',
    /** Sometimes we just have no choice. */
    '@typescript-eslint/no-explicit-any': 'off',
    /** Sometimes we just have no choice. */
    '@typescript-eslint/no-non-null-assertion': 'off',
    /** This rule may be a bit unstable. */
    '@typescript-eslint/no-unnecessary-type-parameters': 'off',
    /** Using numbers in template expressions is rather safe and frequent. */
    '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],

    /** Allow unused variables that start with an underscore for later use. */
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],

    // Let the type-checker do its job, these are too strict and obfuscate actual type errors.
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-declaration-merging': 'off',
    '@typescript-eslint/no-unsafe-enum-comparison': 'off',
    '@typescript-eslint/no-unsafe-function-type': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-unary-minus': 'off',
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
