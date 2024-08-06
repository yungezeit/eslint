import basePreset from '@yungezeit/eslint-base';
import tsPreset from './features/ts.js';

export default [...basePreset, ...tsPreset];
