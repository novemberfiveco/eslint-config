const pluginReactQuery = require("@tanstack/eslint-plugin-query");
const { defineConfig } = require("eslint/config");
const pluginBarrelFiles = require("eslint-plugin-barrel-files");
const pluginReact = require("eslint-plugin-react");
const pluginReactHooks = require("eslint-plugin-react-hooks");
const pluginStorybook = require("eslint-plugin-storybook");
const pluginReactNative = require("eslint-plugin-react-native");
const typescriptConfig = require("@novemberfiveco/eslint-config-typescript");

// TODO: react-native only supports cjs, so let's make this a special case...
const config = defineConfig([
  typescriptConfig,
  pluginReact.configs.flat["recommended"],
  pluginReact.configs.flat["jsx-runtime"],
  pluginReactHooks.configs["recommended-latest"],
  pluginReactQuery.configs["flat/recommended"],
  pluginStorybook.configs["flat/recommended"],

  {
    plugins: {
      "barrel-files": pluginBarrelFiles,
      "react-native": pluginReactNative,
    },
    rules: {
      // We don't want console statements in the codebase
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],

      // We limit the amount of exports in a barrel file, this always causes issues with threeshaking and increased bundle size.
      // read more here: https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-7/
      "barrel-files/avoid-barrel-files": [
        "error",
        {
          amountOfExportsToConsiderModuleAsBarrel: 3,
        },
      ],
      // Disallow using inline styles in components
      "react-native/no-inline-styles": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);

module.exports = config;
