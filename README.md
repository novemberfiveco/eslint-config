# November Five ESLint Config

A collection of standardized ESLint configurations for various TypeScript environments.

## Packages

This monorepo consists of the following packages:

- [`@novemberfiveco/eslint-config-typescript`](https://github.com/novemberfiveco/eslint-config/blob/master/packages/typescript/README.md) - Our base TypeScript ESLint configuration that all other packages extend from. Can also be used standalone for any TypeScript project or as the foundation for new framework-specific configurations.
- [`@novemberfiveco/eslint-config-next`](https://github.com/novemberfiveco/eslint-config/blob/master/packages/next/README.md) - Next.js ESLint config
- [`@novemberfiveco/eslint-config-vite`](https://github.com/novemberfiveco/eslint-config/blob/master/packages/vite/README.md) - Vite ESLint config
- [`@novemberfiveco/eslint-config-serverless`](https://github.com/novemberfiveco/eslint-config/blob/master/packages/serverless/README.md) - Serverless ESLint config
- [`@novemberfiveco/eslint-config-react-native`](https://github.com/novemberfiveco/eslint-config/blob/master/packages/react-native/README.md) - React Native ESLint config

## Installation

```bash
npm install @novemberfiveco/eslint-config-{package-name} --save-dev
```

### Configuration

Create an `eslint.config.mjs` file in your project root with the following content:

```javascript
import novemberFiveConfig from "@novemberfiveco/eslint-config-{package-name}";
import { defineConfig } from "eslint/config";

export default defineConfig([novemberFiveConfig]);
```

### Customization

You can extend and customize the configuration by adding your own rules and plugins. For example:

```javascript
import novemberFiveConfig from "@novemberfiveco/eslint-config-{package-name}";
import { defineConfig } from "eslint/config";
import pluginBarrelFiles from "eslint-plugin-barrel-files";

export default defineConfig([
  novemberFiveConfig,
  {
    plugins: {
      "barrel-files": pluginBarrelFiles,
    },
    rules: {
      "barrel-files/avoid-barrel-files": [
        "error",
        {
          amountOfExportsToConsiderModuleAsBarrel: 3,
        },
      ],
    },
  },
]);
```

If you find a useful rule or plugin that could benefit everyone, please consider making a PR to add it to the main configuration!

### Ignoring Files and Directories

ESLint provides a `globalIgnores` utility function to specify patterns for files and directories that should be excluded from linting:

```javascript
import novemberFiveConfig from "@novemberfiveco/eslint-config-{package-name}";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  novemberFiveConfig,
  // Add your project-specific ignores (in addition to those already included in the base config)
  globalIgnores(["dist", "coverage", "my-custom-build-output"]),
]);
```

You can verify which files are being ignored using the ESLint Config Inspector mentioned below.

For project-specific ignores, add them directly to your configuration. If you find yourself using the same ignore patterns across multiple projects, consider contributing them to our base TypeScript configuration.

The base TypeScript configuration already includes several commonly ignored patterns. You can see the [current list of automatically ignored paths here](https://github.com/novemberfiveco/eslint-config/blob/master/packages/typescript/index.mjs).

### Version Compatibility

- For ESLint v9 (Flat Config): Use the latest versions
- For ESLint v8 or below: Use versions `<=1.x.x`

## Debugging Your Configuration

### Visual Inspection

We recommend using the [ESLint Config Inspector](https://github.com/eslint/config-inspector) to visualize and debug your ESLint configuration. This tool provides a visual interface to:

- View all active rules and their configurations
- See which files are being linted
- Verify that your `globalIgnores` patterns are correctly excluding files and directories

To use it, simply run:

```bash
npx @eslint/config-inspector@latest
```

### Performance Analysis

If you're experiencing slow linting times, you can use the following debugging options:

1. **Rule Timing Analysis**:

   ```bash
   TIMING=1 eslint .
   ```

   This will show you which rules are taking the most time to execute.

2. **Debug Logging**:

   ```bash
   eslint --debug .
   ```

For more detailed performance troubleshooting, refer to the [TypeScript ESLint Performance Guide](https://typescript-eslint.io/troubleshooting/typed-linting/performance/).

## License

Copyright © [November Five BVBA](https://novemberfive.co). All rights reserved.

Licensed under the [MIT License](LICENSE).
