import basePreset from '@yungezeit/eslint-base';
import tsPreset from './features/ts.js';
import { testFiles } from './features/test-files.js';

export default [...basePreset, ...tsPreset, testFiles];
