import pluginReactQuery from "@tanstack/eslint-plugin-query";
import { defineConfig } from "eslint/config";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginStorybook from "eslint-plugin-storybook";

import typescriptConfig from "@novemberfiveco/eslint-config-typescript";

const config = defineConfig([
  typescriptConfig,
  pluginReact.configs.flat["recommended"],
  pluginReact.configs.flat["jsx-runtime"],
  pluginReactHooks.configs["recommended-latest"],
  pluginReactQuery.configs["flat/recommended"],
  pluginStorybook.configs["flat/recommended"],
  {
    rules: {
      // We don't want console statements in the codebase
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],

      // This rule often results in False Positives.
      "@tanstack/query/exhaustive-deps": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);

export default config;
