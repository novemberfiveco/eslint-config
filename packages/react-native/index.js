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
    "@react-native-community",
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
    "@typescript-eslint",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/prop-types": "off",
    "react/jsx-key": "error",
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    "jest/no-deprecated-functions": "off",
    "object-curly-spacing": ["warn", "always"],
    "import/no-anonymous-default-export": "off",
    "no-unused-vars": "off",
    "no-console": ["warn", { allow: ["warn", "error", "info"] }],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: false,
      },
    ],
    "@typescript-eslint/array-type": ["warn"],
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
          ["^packages"],
          ["^utils"],
          [
            "^types|^store|^services|^constants|^hooks|^theme|^connectors|^queries",
          ],
          ["^screens"],
          ["^components"],
          ["^\\."],
        ],
      },
    ],
    "simple-import-sort/exports": "warn",
  },
};
