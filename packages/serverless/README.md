# @novemberfiveco/eslint-config-serverless

[← Back to Main README](../../README.md)

Serverless ESLint configuration used by November Five. This package extends our base TypeScript configuration with Serverless specific rules.

## Installation

```bash
npm install @novemberfiveco/eslint-config-serverless --save-dev
```

### Configuration

Create an `eslint.config.mjs` file in your project root with the following content:

```javascript
import novemberFiveConfig from "@novemberfiveco/eslint-config-serverless";
import { defineConfig } from "eslint/config";

export default defineConfig([novemberFiveConfig]);
```

## Included Plugins

This configuration includes the following plugins in addition to those from `@novemberfiveco/eslint-config-typescript`:

- [`eslint-plugin-drizzle`](https://github.com/drizzle-team/eslint-plugin-drizzle) - Drizzle ORM specific rules
