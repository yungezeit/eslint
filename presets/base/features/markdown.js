import markdown from 'eslint-plugin-markdown';

/**
 * Custom configuration used to lint code within markdown files.
 * It includes `eslint-plugin-markdown` recommended configuration.
 * @type {import('eslint').Linter.Config}
 */
const config = {};

export default [...markdown.configs.recommended, config];
