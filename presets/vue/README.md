# @yungezeit/eslint-vue

Personal ESLint flat configuration with Vue and TypeScript support.

## Features

- All features of `@yungezeit/eslint-base`.
- All features of `@yungezeit/eslint-typescript`.
- Vue support using [`eslint-plugin-vue`](https://eslint.vuejs.org/).


## Install

```bash
# using pnpm
pnpm add -D @yungezeit/eslint-vue
# using npm
npm add -D @yungezeit/eslint-vue
# using yarn
yarn add -D @yungezeit/eslint-vue
# using bun
bun add -D @yungezeit/eslint-vue
```

## Usage

### Raw configuration

You may simply spread the raw configuration array:


```js
// eslint.config.js
import vuePreset from '@yungezeit/eslint-vue';

export default [...vuePreset];
```

### Configuration function

Alternatively, you can use the `createVueConfig` function to create/merge a ESLint configuration array for a Vue project. Using this function lets you tweak the base configuration behaviour by passing some options as a second argument.

```js
// eslint.config.js
import { createVueConfig } from '@yungezeit/eslint-vue';

export default createVueConfig([ /** Your configs… */], {
  /** Path to tsconfig root dir (see "Type-aware" linting below) */
  tsconfigRootDir: 'path/to/project',
  /** Internal patterns passed to `enforceImportOrder` (see "Imports order" below). */
  internalPatterns: [],
});
```

### VSCode

You may want to add the following settings to your `.vscode/settings.json`:

```jsonc
{
  // Turn on ESLint for preset's supported languages if needed.
  "eslint.validate": [
    "vue",
    "javascript", "javascriptreact",
    "typescript", "typescriptreact",
    "json", "jsonc", "json5", "markdown", "yaml",
  ],
  // If you want ESLint to autofix problems on save.
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
  }
}
```

## Type-aware linting

See the [TypeScript preset documentation](../typescript/README.md#type-aware-linting) for more information.


## Imports order

See the [base preset documentation](../base/README.md#enforceimportorderinternalpatterns-string) for more information.
