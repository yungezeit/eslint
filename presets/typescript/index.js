import basePreset from '@yungezeit/eslint-base';
import tsPreset from './features/ts.js';
import { testFiles } from './features/test-files.js';

const delegateBaseRule = {
  files: ['**/*.{ts,tsx,mts,cts}'],
  rules: { 'no-undef': 'off', 'no-unused-vars': 'off' },
};

export default [...basePreset, ...tsPreset, testFiles, delegateBaseRule];
