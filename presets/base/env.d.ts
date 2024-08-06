declare module 'eslint-plugin-markdown' {
  import type { Linter } from 'eslint';
  declare const configs: {
    recommended: Linter.Config[];
  };
}

declare module 'jsonc-eslint-parser' {
  import type { Linter } from 'eslint';
  const fn: Linter.Parser;
  export default fn;
}
