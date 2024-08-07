# @yungezeit/eslint-storybook

Personal ESLint flat configuration for Storybook.

> [!NOTE]
> Waiting for [`eslint-plugin-storybook`'s flat config support](https://github.com/storybookjs/eslint-plugin-storybook/pull/156) to be merged and released.

## Install

```bash
# using pnpm
pnpm add -D @yungezeit/eslint-storybook
# using npm
npm add -D @yungezeit/eslint-storybook
# using yarn
yarn add -D @yungezeit/eslint-storybook
# using bun
bun add -D @yungezeit/eslint-storybook
```

## Setup

```js
// eslint.config.js
import storybookPreset from '@yungezeit/eslint-storybook';

export default [...storybookPreset];
```