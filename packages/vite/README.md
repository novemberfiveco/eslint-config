# @novemberfiveco/eslint-config-vite

[← Back to Main README](../../README.md)

Vite ESLint configuration used by November Five. This package extends our base TypeScript configuration with Vite specific rules.

## Installation

```bash
npm install @novemberfiveco/eslint-config-vite --save-dev
```

### Configuration

Create an `eslint.config.mjs` file in your project root with the following content:

```javascript
import novemberFiveConfig from "@novemberfiveco/eslint-config-vite";
import { defineConfig } from "eslint/config";

export default defineConfig([novemberFiveConfig]);
```

## Included Plugins

This configuration includes the following plugins in addition to those from `@novemberfiveco/eslint-config-typescript`:

- [`eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react) - React specific linting rules
- [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks) - Rules for React Hooks
- [`@tanstack/eslint-plugin-query`](https://github.com/TanStack/query/tree/main/packages/eslint-plugin-query) - Rules for React Query
- [`eslint-plugin-storybook`](https://github.com/storybookjs/eslint-plugin-storybook) - Storybook specific rules
