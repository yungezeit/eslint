import esPreset from './features/es.js';
import jsonPreset from './features/json.js';
import yamlPreset from './features/yaml.js';
import mdPreset from './features/markdown.js';
import pkgPreset from './features/pkg.js';

export default [...esPreset, ...jsonPreset, ...yamlPreset, ...pkgPreset, ...mdPreset];
