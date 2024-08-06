import * as regexpPlugin from 'eslint-plugin-regexp';

/**
 * Custom configuration used to lint Regexes.
 * It includes `eslint-plugin-yml` recommended rules and turns
 * off formatting rules so they don't conflict with formatters.
 * @type {import('eslint').Linter.Config}
 */
const config = {
  rules: {
    'yml/no-empty-mapping-value': 'off',
  },
};

export default [regexpPlugin.configs['flat/recommended'], config];
