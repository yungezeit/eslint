# @yungezeit/eslint-base

Personal ESLint flat base configuration.

## Features

- Lint ES modules based on `@eslint/js`'s recommended rules
- Lint regexes within ES modules using `eslint-plugin-regexp` and its recommended rules.
- Lint JSON and JSONc files using `eslint-plugin-jsonc` and its recommended rules.
- Lint YAML files using `eslint-plugin-yml` and its recommended rules.
- Lint code inside Markdown files using `eslint-plugin-markdown` and its recommended rules.
- Lint and sort `package.json` properties to structural consistency.

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

## Setup

```js
// eslint.config.js
import basePreset from '@yungezeit/eslint-base';

export default [...basePreset];
```