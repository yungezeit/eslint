# @yungezeit/eslint-cypress

## 0.0.12

### Patch Changes

- 06443e3: Ignore rule `@typescript-eslint/consistent-type-definitions` for Vue projects as TypeScript-aware macros do not support interfaces.

## 0.0.11

### Patch Changes

- fe93592: Allowed using numbers in template expressions`

## 0.0.10

### Patch Changes

- f244254: chore: disable no-unsafe-\* rules because these are too strict and obfuscate actual type errors, strict and any-exclusion should be handled by the type checker

## 0.0.9

### Patch Changes

- a4fd247: Disabled missing `@typescript-eslint/no-unsafe-argument`

## 0.0.8

### Patch Changes

- 68574fb: Made linter a bit more indulgent in test files

## 0.0.7

### Patch Changes

- db009d0: Disabled `@typescript-eslint/no-unsafe-assignment` and `@typescript-eslint/no-unsafe-argument` rules for test files, globally disabled `@typescript-eslint/no-unnecessary-type-parameters` rule for convenience

## 0.0.6

### Patch Changes

- f26be99: Added typescript-eslint parser for vue files

## 0.0.5

### Patch Changes

- fd4713e: Fixed path to test files configuration

## 0.0.4

### Patch Changes

- b24ae17: Restricted ts preset application to TypeScript files

## 0.0.3

### Patch Changes

- 397c61a: Fixed dependencies

## 0.0.2

### Patch Changes

- e2a8b37: Fixed included library files
