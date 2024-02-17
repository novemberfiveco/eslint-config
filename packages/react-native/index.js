/*
 * @rushstack/eslint-patch is used to include plugins as dev
 * dependencies instead of imposing them as peer dependencies
 *
 * https://www.npmjs.com/package/@rushstack/eslint-patch
 */

require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,

  env: { es6: true },

  extends: [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],

  plugins: [
    "react",
    "react-hooks",
    "jest",
    "import",
    "prettier",
    "simple-import-sort",
    "react-native",
    "@react-native",
    "@typescript-eslint",
  ],

  settings: {
    react: {
      version: "detect",
    },
  },

  // Map from global var to bool specifying if it can be redefined
  globals: {
    __DEV__: true,
    __dirname: false,
    __fbBatchedBridgeConfig: false,
    AbortController: false,
    Blob: true,
    alert: false,
    cancelAnimationFrame: false,
    cancelIdleCallback: false,
    clearImmediate: true,
    clearInterval: false,
    clearTimeout: false,
    console: false,
    document: false,
    ErrorUtils: false,
    escape: false,
    Event: false,
    EventTarget: false,
    exports: false,
    fetch: false,
    File: true,
    FileReader: false,
    FormData: false,
    global: false,
    Headers: false,
    Intl: false,
    Map: true,
    module: false,
    navigator: false,
    process: false,
    Promise: true,
    requestAnimationFrame: true,
    requestIdleCallback: true,
    require: false,
    Set: true,
    setImmediate: true,
    setInterval: false,
    setTimeout: false,
    queueMicrotask: true,
    URL: false,
    URLSearchParams: false,
    WebSocket: true,
    window: false,
    XMLHttpRequest: false,
  },

  rules: {
    // Typescript rules

    "@typescript-eslint/no-shadow": 2, // disallow declaration of variables already declared in the outer scope
    "no-shadow": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: false,
      },
    ],
    "@typescript-eslint/array-type": [
      "warn",
      { default: "generic", readonly: "generic" },
    ],
    "@typescript-eslint/no-non-null-assertion": ["warn"],
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

    // Import rules and sorting

    "import/no-anonymous-default-export": "off",
    "import/newline-after-import": ["error", { count: 1 }],
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          ["^\\u0000"],
          ["^@?\\w"],
          ["^config"],
          ["^[^.]"],
          ["^assets"],
          ["^utils"],
          [
            "^types|^store|^services|^constants|^hooks|^theme|^connectors|^queries|^datasources|^models",
          ],
          ["^screens"],
          ["^components"],
          ["^\\."],
        ],
      },
    ],
    "simple-import-sort/exports": "warn",

    // General things

    curly: 1, // specify curly brace conventions for all control statements
    radix: 1, // require use of the second argument for parseInt()
    "object-curly-spacing": ["warn", "always"],
    "no-unused-vars": "off",
    "no-console": ["warn", { allow: ["warn", "error", "info"] }],
    "valid-typeof": 1, // Ensure that the results of typeof are compared against a valid string
    "consistent-return": 1, // require return statements to either always or never specify values

    // React specific things

    "react/prop-types": "off",
    "react/jsx-sort-props": 1, // Enforce props alphabetical sorting
    "react/jsx-key": "error",
    "react/self-closing-comp": [
      // Components without children should always be self-closing
      "error",
      {
        component: true,
        html: true,
      },
    ],
    "react/no-unstable-nested-components": 2, // Prevent usage of unstable components in components

    // React-native specific things

    "react-native/no-inline-styles": 2, // disallow using inline styles in components

    "react-hooks/exhaustive-deps": [
      "warn",
      {
        additionalHooks: "(useDeepCompareEffect)",
      },
    ],

    // Jest specific things

    "jest/no-deprecated-functions": "off",
  },
};
