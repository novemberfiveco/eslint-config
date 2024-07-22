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
    project: "./tsconfig.eslint.json",
    tsconfigRootDir: "./",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:prettier/recommended",
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
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: false,
      },
    ],
    "@typescript-eslint/array-type": [
      "error",
      { default: "generic", readonly: "generic" },
    ],
    "@typescript-eslint/no-non-null-assertion": ["warn"],
    "@typescript-eslint/no-floating-promises": [
      "error",
      { ignoreVoid: true, ignoreIIFE: true },
    ],
    "@typescript-eslint/restrict-template-expressions": "off",
    "import/newline-after-import": ["error", { count: 1 }],
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
    "unused-imports/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    quotes: ["error", "double", { avoidEscape: true }],
    "no-console": "warn",
    radix: "off",
    "dot-notation": "off",
    "no-shadow": "off",
    "consistent-return": "off",
    "no-case-declarations": "off",
  },
};
