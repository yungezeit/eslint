import eslintPluginYml from 'eslint-plugin-yml';

/**
 * Custom configuration used to lint YAML/YML files.
 * It includes `eslint-plugin-yml` recommended rules and turns
 * off formatting rules so they don't conflict with formatters.
 * @type {import('eslint').Linter.Config}
 */
const config = {
  rules: {
    'yml/no-empty-mapping-value': 'off',
  },
};

export default [
  ...eslintPluginYml.configs['flat/standard'],
  ...eslintPluginYml.configs['flat/prettier'],
  config,
];
