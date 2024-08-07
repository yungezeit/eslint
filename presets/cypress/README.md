# @yungezeit/eslint-cypress

Personal ESLint flat configuration for cypress.

## Install

```bash
# using pnpm
pnpm add -D @yungezeit/eslint-cypress
# using npm
npm add -D @yungezeit/eslint-cypress
# using yarn
yarn add -D @yungezeit/eslint-cypress
# using bun
bun add -D @yungezeit/eslint-cypress
```

## Setup

```js
// eslint.config.js
import cypressPreset from '@yungezeit/eslint-cypress';

export default [...cypressPreset];
```