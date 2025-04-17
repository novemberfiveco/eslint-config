# November Five ESLint Config

A collection of standardized ESLint configurations for various TypeScript environments.

## Packages

This monorepo consists of the following packages:

- `@novemberfiveco/eslint-config-typescript` - Our base TypeScript ESLint configuration that all other packages extend from. Can also be used standalone for any TypeScript project or as the foundation for new framework-specific configurations.
- `@novemberfiveco/eslint-config-next` - Next.js ESLint config (extends `@novemberfiveco/eslint-config-typescript`)
- `@novemberfiveco/eslint-config-vite` - Vite ESLint config (extends `@novemberfiveco/eslint-config-typescript`)
- `@novemberfiveco/eslint-config-serverless` - Serverless ESLint config (extends `@novemberfiveco/eslint-config-typescript`)
- `@novemberfiveco/eslint-config-react-native` - [React Native ESLint config](https://github.com/novemberfiveco/eslint-config/blob/master/packages/react-native/README.md) (extends `@novemberfiveco/eslint-config-typescript`)

## Installation

```bash
npm install @novemberfiveco/eslint-config-{package-name} --save-dev
```

### Version Compatibility

- For ESLint v9 (Flat Config): Use the latest versions
- For ESLint v8 or below: Use versions `<=1.x.x`

## Debugging Your Configuration

### Visual Inspection

We recommend using the [ESLint Config Inspector](https://github.com/eslint/config-inspector) to visualize and debug your ESLint configuration. This tool provides a visual interface to:

- View all active rules and their configurations
- See which files are being linted

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
