import { defineConfig, globalIgnores } from "eslint/config";
import pluginConfigPrettier from "eslint-config-prettier/flat";
import pluginImport from "eslint-plugin-import";
import pluginNoRelativeImportPaths from "eslint-plugin-no-relative-import-paths";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

const config = defineConfig([
  eslint.configs.recommended,
  tseslint.configs.recommended,
  pluginConfigPrettier,
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
    },
    rules: {
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
    },
  },
  // Extend this file with more ignores if needed. This is just a starting point.
  globalIgnores([
    ".next",
    ".open-next",
    ".sst",
    "src/services/avo/Avo.ts",
    "src/services/api/dato/graphql-env.d.ts",
    "playwright-report",
    "graphql-env.d.ts",
    "global.d.ts",
    "build",
    "android",
    "ios",
    "public/sw.js",
    ".svgr",
  ]),
]);

export default config;
