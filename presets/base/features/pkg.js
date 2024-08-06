import eslintPluginJsonc from 'eslint-plugin-jsonc';

/**
 * Custom configuration used to lint package.json files.
 * @type {import('eslint').Linter.Config}
 */
const config = {
  files: ['package.json'],
  rules: {
    'jsonc/sort-keys': [
      'error',
      {
        pathPattern: '^$',
        order: [
          'publisher',
          'name',
          'displayName',
          'type',
          'version',
          'private',
          'packageManager',
          'description',
          'author',
          'license',
          'funding',
          'homepage',
          'repository',
          'bugs',
          'keywords',
          'categories',
          'sideEffects',
          'exports',
          'main',
          'module',
          'unpkg',
          'jsdelivr',
          'types',
          'typesVersions',
          'bin',
          'icon',
          'files',
          'engines',
          'activationEvents',
          'contributes',
          'scripts',
          'peerDependencies',
          'peerDependenciesMeta',
          'dependencies',
          'optionalDependencies',
          'devDependencies',
          'pnpm',
          'overrides',
          'resolutions',
          'husky',
          'simple-git-hooks',
          'lint-staged',
          'eslintConfig',
        ],
      },
      {
        pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
        order: { type: 'asc' },
      },
      {
        pathPattern: '^exports.*$',
        order: ['types', 'require', 'import'],
      },
    ],
  },
};

export default [...eslintPluginJsonc.configs['flat/recommended-with-jsonc'], config];
