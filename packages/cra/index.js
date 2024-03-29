/*
 * @rushstack/eslint-patch is used to include plugins as dev
 * dependencies instead of imposing them as peer dependencies
 *
 * https://www.npmjs.com/package/@rushstack/eslint-patch
 */

require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  parserOptions: {
    sourceType: "module",
  },
  env: { es6: true },
  extends: [
    "react-app",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:testing-library/react",
    "plugin:react-hooks/recommended",
    "plugin:jest-dom/recommended",
  ],
  plugins: ["prettier", "import", "simple-import-sort"],
  rules: {
    "object-curly-spacing": ["warn", "always"],
    "import/no-anonymous-default-export": "off",
    "react/jsx-key": "error",
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
    "no-unused-vars": "off",
    "no-console": ["warn", { allow: ["warn", "error", "info"] }],
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
          ["^react$|^@?\\w"],
          ["^@?\\w"],
          ["^config"],
          ["^[^.]"],
          ["^assets"],
          ["^packages"],
          ["^utils"],
          [
            "^types|^store|^services|^constants|^hooks|^theme|^connectors|^queries",
          ],
          ["^pages"],
          ["^components"],
          ["^\\."],
        ],
      },
    ],
    "simple-import-sort/exports": "warn",
  },
};
