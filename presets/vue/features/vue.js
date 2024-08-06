import pluginVue from 'eslint-plugin-vue';

/**
 * Custom configuration used to lint Vue codebases.
 * It includes recommended rules from `eslint-plugin-vue`
 * and includes TypeScript configuration.
 * @type {import('eslint').Linter.Config}
 */
const config = {
  rules: {
    'vue/no-v-html': 'off',
    'vue/no-setup-props-destructure': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-vars': ['error', { ignorePattern: '^_' }],
    'vue/v-bind-style': ['error', 'shorthand'],
  },
};

export default [...pluginVue.configs['flat/recommended'], config];
