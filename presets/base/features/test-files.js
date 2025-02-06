const exts = `ts,tsx,cts,mts,js,jsx,cjs,mjs`;
/**
 * Custom configuration used for typescript test files.
 * @type {import('eslint').Linter.Config}
 */
export const testFiles = {
  files: [`**/*.test.{${exts}}`, `**/tests/**/*.{${exts}}`],
  rules: {
    'import/no-nodejs-modules': 'off',
  },
};
