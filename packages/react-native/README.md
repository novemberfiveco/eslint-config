# @novemberfiveco/eslint-config-react-native

[← Back to Main README](../../README.md)

React Native ESLint configuration used by November Five. This package extends our base TypeScript configuration with React Native specific rules.

## Installation

```bash
npm install @novemberfiveco/eslint-config-react-native --save-dev
```

### Configuration

Create an `eslint.config.cjs` file in your project root with the following content:

```javascript
const novemberFiveConfig = require("@novemberfiveco/eslint-config-react-native");
const { defineConfig } = require("eslint/config");

module.exports = defineConfig([novemberFiveConfig]);
```

## Included Plugins

This configuration includes the following plugins in addition to those from `@novemberfiveco/eslint-config-typescript`:

- [`@tanstack/eslint-plugin-query`](https://github.com/TanStack/query/tree/main/packages/eslint-plugin-query) - Rules for React Query
- [`eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react) - React specific linting rules
- [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks) - Rules for React Hooks
- [`eslint-plugin-react-native`](https://github.com/Intellicode/eslint-plugin-react-native) - React Native specific rules
