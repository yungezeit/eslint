# @yungezeit/eslint-vue

Personal ESLint flat configuration with TypeScript support. It relies on both `@yungezeit/eslint-base` and `@yungezeit/eslint-typescript` presets along with `eslint-plugin-vue` and its recommended rules.

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

## Setup

```js
// eslint.config.js
import vuePreset from '@yungezeit/eslint-vue';

export default [...vuePreset];
```