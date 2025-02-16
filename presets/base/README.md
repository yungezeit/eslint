# @yungezeit/eslint-base

Personal ESLint flat base configuration.

> [!NOTE]
> This preset is used as a dependency by all other presets in this repository.
> Therefore if you plan on using e.g. `@yungezeit/eslint-vue` or `@yungezeit/eslint-typescript`,
> in your project, you don't need to explicitly install this preset.

## Features

- Lint ES modules based on `@eslint/js`'s recommended rules.
- Lint regexes within ES modules using `eslint-plugin-regexp` and its recommended rules.
- Lint JSON and JSONc files using `eslint-plugin-jsonc` and its recommended rules.
- Lint YAML files using `eslint-plugin-yml` and its recommended rules.
- Lint code inside Markdown files using `eslint-plugin-markdown` and its recommended rules.
- Lint and sort `package.json` properties to structural consistency.
- Uses `eslint-plugin-import` to lint import/export statements.

## Install

```bash
# using pnpm
pnpm add -D @yungezeit/eslint-base
# using npm
npm add -D @yungezeit/eslint-base
# using yarn
yarn add -D @yungezeit/eslint-base
# using bun
bun add -D @yungezeit/eslint-base
```

## Usage

### Raw configuration

You may simply spread the raw configuration array:

```js
// eslint.config.js
import basePreset from '@yungezeit/eslint-base';

export default [...basePreset];
```

### Configuration function

Alternatively, you can use the `createBaseConfig` function to create a base ESLint configuration array. Using this function lets you tweak the base configuration behaviour by passing some options as a second argument.

```js
// eslint.config.js
import { createBaseConfig } from '@yungezeit/eslint-base';

export default createBaseConfig([ /** Your configs… */], {
  /** Internal patterns passed to `enforceImportOrder` (see below). */
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
    "json", "jsonc", "json5", "markdown", "yaml",
  ],
  // If you want ESLint to autofix problems on save.
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
  }
}
```


## Imports order

### `enforceImportOrder(internalPatterns?: string[])`

This function creates a configuration with an `import/order` rule that enforces :
1. a specific order of import groups
2. new lines between import groups
2. alphabetized imports

Here's the expected order of import groups :
1. `"builtin"`: builtin node modules.
2. `"external"`: external modules (deps).
3. `"internal"`: internal modules (your own modules).
4. `"parent"`, `"index"` and `"sibling"`: relative imports.

You may pass an array of minimatch patterns to match imports that should be considered internal.

#### Example configuration

```js
import { enforceImportOrder } from '@yungezeit/eslint-base';
const config = enforceImportOrder(['#database', '@components/**']);
```

#### Example output

```js
import fs from 'node:fs';

import chalk from 'chalk';
import { minimatch } from 'minimatch';

import { database, tables } from '#database';
import { Button } from '@components/button';
import { Input } from '@components/input';

import { foo } from '../parent';
import { bar, baz } from '.';
import { bro } from './sibling';
```
