/*
 * @rushstack/eslint-patch is used to include plugins as dev
 * dependencies instead of imposing them as peer dependencies
 *
 * https://www.npmjs.com/package/@rushstack/eslint-patch
 */

require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  env: { es6: true },
  extends: [
    "next",
    "plugin:storybook/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier", "simple-import-sort", "@typescript-eslint"],
  rules: {
    "object-curly-spacing": ["warn", "always"],
    "import/no-anonymous-default-export": "off",
    "react/jsx-key": "error",
    "no-unused-vars": "off",
    "no-console": ["warn", { allow: ["warn", "error", "info"] }],
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
          ["^pages"],
          ["^components"],
          ["^\\."],
        ],
      },
    ],
    "simple-import-sort/exports": "warn",
  },
};
