# @yungezeit/eslint-typescript

Personal ESLint flat configuration with TypeScript support.

## Features

- All features of `@yungezeit/eslint-base`.
- TypeScript support using [`typescript-eslint`](https://github.com/typescript-eslint/typescript-eslint).

## Install

```bash
# using pnpm
pnpm add -D @yungezeit/eslint-typescript
# using npm
npm add -D @yungezeit/eslint-typescript
# using yarn
yarn add -D @yungezeit/eslint-typescript
# using bun
bun add -D @yungezeit/eslint-typescript
```

## Usage

### Raw configuration

You may simply spread the raw configuration array:

```js
// eslint.config.js
import typescriptPreset from '@yungezeit/eslint-typescript';

export default [...typescriptPreset];
```

### Configuration function

Alternatively, you can use the `createTsConfig` function to create/merge a ESLint configuration array for a TypeScript project. Using this function lets you tweak the base configuration behaviour by passing some options as a second argument.

```js
// eslint.config.js
import { createTsConfig } from '@yungezeit/eslint-typescript';

export default createTsConfig([ /** Your configs… */], {
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

If you need type-aware linting, you'll need to turn on the `projectService` in the `languageOptions.parserOptions` configuration object.

You may also need to specify the `tsconfigRootDir` option:

```js
// eslint.config.js
import typescriptPreset from '@yungezeit/eslint-typescript';

export default [...typescriptPreset, {
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: 'path/to/project',
    },
  },
}];
```

When using the `createTsConfig` function, setting the `tsconfigRootDir` option will turn on type-aware linting. Keep in mind that type-aware linting expects `tsconfig`'s `strictNullChecks` compiler option to be enabled.


## Imports order

See the [base preset documentation](../base/README.md#enforceimportorderinternalpatterns-string) for more information.
