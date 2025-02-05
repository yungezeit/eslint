import esPreset from './features/es.js';
import importsPreset from './features/imports.js';
import jsonPreset from './features/json.js';
import mdPreset from './features/markdown.js';
import pkgPreset from './features/pkg.js';
import promisesPreset from './features/promises.js';
import regexpPreset from './features/regexp.js';
import yamlPreset from './features/yaml.js';

export default [
  {
    languageOptions: {
      ecmaVersion: 'latest',
    },
  },
  ...esPreset,
  ...importsPreset,
  ...jsonPreset,
  ...mdPreset,
  ...pkgPreset,
  ...promisesPreset,
  ...regexpPreset,
  ...yamlPreset,
];
