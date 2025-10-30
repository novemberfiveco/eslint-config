import pluginNext from "@next/eslint-plugin-next";
import pluginReactQuery from "@tanstack/eslint-plugin-query";
import { defineConfig } from "eslint/config";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginStorybook from "eslint-plugin-storybook";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";

import typescriptConfig from "@novemberfiveco/eslint-config-typescript";

const config = defineConfig([
  typescriptConfig,
  pluginReact.configs.flat["recommended"],
  pluginReact.configs.flat["jsx-runtime"],
  pluginReactHooks.configs.flat["recommended-latest"],
  pluginReactQuery.configs["flat/recommended"],
  pluginStorybook.configs["flat/recommended"],
  pluginNext.flatConfig["recommended"],
  pluginJsxA11y.flatConfigs["recommended"],
  {
    rules: {
      // We don't want console statements in the codebase
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],

      // This rule often results in False Positives.
      "@tanstack/query/exhaustive-deps": "off",
      // Make sure our a11y plugin catches Next.js Image components
      "jsx-a11y/alt-text": [
        "error",
        {
          elements: ["img"],
          img: ["Image"],
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);

export default config;
