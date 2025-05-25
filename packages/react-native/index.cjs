const pluginReactQuery = require("@tanstack/eslint-plugin-query");
const { defineConfig } = require("eslint/config");
const pluginReact = require("eslint-plugin-react");
const pluginReactHooks = require("eslint-plugin-react-hooks");
const pluginStorybook = require("eslint-plugin-storybook");
const pluginReactNative = require("eslint-plugin-react-native");
const pluginConfigPrettier = require("eslint-config-prettier/flat");
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const globals = require("globals");
const pluginImport = require("eslint-plugin-import");
const pluginSimpleImportSort = require("eslint-plugin-simple-import-sort");
const pluginNoRelativeImportPaths = require("eslint-plugin-no-relative-import-paths");

// This file differentiates from all the rest because react-native does not play nicely with esm yet. ref: https://github.com/facebook/metro/issues/916
// I just copied over the typescript config here and added the react-native specific rules.
const config = defineConfig([
  eslint.configs.recommended,
  tseslint.configs.recommended,
  pluginConfigPrettier,
  pluginReact.configs.flat["recommended"],
  pluginReact.configs.flat["jsx-runtime"],
  pluginReactHooks.configs["recommended-latest"],
  pluginReactQuery.configs["flat/recommended"],
  pluginStorybook.configs["flat/recommended"],

  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.vitest,
        ...globals.jest,
      },
    },
    plugins: {
      import: pluginImport,
      "simple-import-sort": pluginSimpleImportSort,
      "no-relative-import-paths": pluginNoRelativeImportPaths,
      "react-native": pluginReactNative,
    },
    rules: {
      /** Shared rules from Typescript config */
      // To minimise the impact during ESLint v9 migration I turned this rule off. ideally this should be turned on
      "no-empty": "off",

      "no-duplicate-imports": "warn",
      "no-restricted-globals": [
        "error",
        {
          name: "origin",
          message:
            "Use 'window.origin' instead of 'origin' to avoid global references.",
        },
        {
          name: "location",
          message:
            "Use 'window.location' instead of 'location' to avoid global references.",
        },
        {
          name: "event",
          message:
            "Use 'window.event' instead of 'event' to avoid global references.",
        },
      ],
      "no-relative-import-paths/no-relative-import-paths": [
        "warn",
        {
          allowSameFolder: true,
          rootDir: "src",
          allowedDepth: 1,
        },
      ],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/array-type": [
        "warn",
        { default: "generic", readonly: "generic" },
      ],
      "import/no-anonymous-default-export": "off",
      "import/newline-after-import": ["error", { count: 1 }],
      "simple-import-sort/exports": "warn",
      "simple-import-sort/imports": [
        "warn",
        {
          groups: [
            ["^\\u0000"],
            ["^@?\\w"],
            ["^config"],
            ["^[^.]"],
            ["^assets"],
            ["^packages"],
            ["^utils"],
            ["^style"],
            [
              "^types|^interfaces|^errors|^store|^constants|^middlewares|^theme|^services|^hooks|^connectors|^queries|^datasources|^repositories",
            ],
            ["^data"],
            ["^models|^schemas|^serializers|^deserializers"],
            ["^use-cases"],
            ["^database|^dynamodb|^clients|^managers"],
            ["^native"],
            ["^pages|^screens"],
            ["^components"],
            ["^\\."],
          ],
        },
      ],
      /** Ending off Shared rules from Typescript config */

      // We don't want console statements in the codebase
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],

      // Disallow using inline styles in components
      "react-native/no-inline-styles": "error",

      // This rule often results in False Positives.
      "@tanstack/query/exhaustive-deps": "off",

      // Since react-native does not play nicely with esm yet, we still need require statements.
      "@typescript-eslint/no-require-imports": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);

module.exports = config;
