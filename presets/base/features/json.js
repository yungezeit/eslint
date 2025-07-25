import eslintPluginJsonc from 'eslint-plugin-jsonc';

/**
 * Custom configuration used to lint JSON/JSONc files.
 * It includes `eslint-plugin-jsonc` recommended rules and turns
 * off formatting rules so they don't conflict with formatters.
 * @type {import('eslint').Linter.Config}
 */
const config = {
  rules: {
    //
  },
};

/** @type {import('eslint').Linter.Config[]} */
const defaultConfig = [
  ...eslintPluginJsonc.configs['flat/recommended-with-jsonc'],
  ...eslintPluginJsonc.configs['flat/prettier'],
  config,
];

export default defaultConfig;
