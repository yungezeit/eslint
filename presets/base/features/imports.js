import { flatConfigs } from 'eslint-plugin-import';

export default [
  flatConfigs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      // Let IDE/runtime resolve handle those.
      'import/names': 'off',
      'import/namespace': 'off',
      'import/no-unresolved': 'off',
      // …
      'import/no-dynamic-require': 'warn',
      'import/no-nodejs-modules': 'warn',
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    },
  },
];
