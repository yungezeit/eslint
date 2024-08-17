---
"@yungezeit/eslint-typescript": patch
"@yungezeit/eslint-base": patch
"@yungezeit/eslint-cypress": patch
"@yungezeit/eslint-storybook": patch
"@yungezeit/eslint-vue": patch
---

chore: disable no-unsafe-\* rules because these are too strict and obfuscate actual type errors, strict and any-exclusion should be handled by the type checker
