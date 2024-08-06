import tseslint from 'typescript-eslint';
import baseConfig from '@yungezeit/eslint-base';

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
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
  },
};

/**@type {any} */
const basePresets = baseConfig;

export default tseslint.config(
  ...basePresets,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  config,
);
