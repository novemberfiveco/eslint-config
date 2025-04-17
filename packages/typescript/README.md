# @novemberfiveco/eslint-config-typescript

Base TypeScript ESLint configuration used by November Five. This package provides the foundation for all other framework-specific configurations.

## Installation

```bash
npm install @novemberfiveco/eslint-config-typescript --save-dev
```

### Configuration

Create an `eslint.config.mjs` file in your project root with the following content:

```javascript
import novemberFiveConfig from "@novemberfiveco/eslint-config-typescript";
import { defineConfig } from "eslint/config";

export default defineConfig([novemberFiveConfig]);
```

## Included Plugins

This configuration includes the following plugins:

- [`@eslint/js`](https://github.com/eslint/eslint) - ESLint's built-in recommended rules
- [`typescript-eslint`](https://github.com/typescript-eslint/typescript-eslint) - TypeScript-specific ESLint rules
- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) - Disables rules that conflict with Prettier
- [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import) - Rules for ES6+ import/export syntax
- [`eslint-plugin-no-relative-import-paths`](https://github.com/MelvinVermeer/eslint-plugin-no-relative-import-paths) - Prevents relative import paths
- [`eslint-plugin-simple-import-sort`](https://github.com/lydell/eslint-plugin-simple-import-sort) - Simple import sorting
