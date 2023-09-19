/*
 * @rushstack/eslint-patch is used to include plugins as dev
 * dependencies instead of imposing them as peer dependencies
 *
 * https://www.npmjs.com/package/@rushstack/eslint-patch
 */

require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  env: { es6: true, node: true },
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: "./",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:prettier/recommended",
    "@serverless/eslint-config",
  ],
  plugins: [
    "@typescript-eslint",
    "import",
    "prettier",
    "simple-import-sort",
    "unused-imports",
  ],
  rules: {
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
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: false,
      },
    ],
    "@typescript-eslint/array-type": ["error", { default: "generic" }],
    "@typescript-eslint/no-non-null-assertion": ["warn"],
    "@typescript-eslint/no-floating-promises": [
      "error",
      { ignoreVoid: true, ignoreIIFE: true },
    ],
    "import/newline-after-import": ["error", { count: 1 }],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          ["^\\u0000"],
          ["^@?\\w"],
          ["^config"],
          ["^[^.]"],
          ["^utils"],
          ["^types|^constants|^errors|^middlewares"],
          ["^schemas|^serializers|^deserializers"],
          ["^database|dynamodb"],
          ["^clients"],
          ["^repositories"],
          ["^managers"],
          ["^\\."],
        ],
      },
    ],
    "simple-import-sort/exports": "warn",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "unused-imports/no-unused-imports": "error",
    quotes: ["error", "double", { avoidEscape: true }],
    "no-console": "warn",
    radix: "off",
    "dot-notation": "off",
    "no-shadow": "off",
    "consistent-return": "off",
  },
};
