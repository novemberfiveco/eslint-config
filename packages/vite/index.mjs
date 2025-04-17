import pluginReactQuery from "@tanstack/eslint-plugin-query";
import { defineConfig } from "eslint/config";
import pluginBarrelFiles from "eslint-plugin-barrel-files";
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
    plugins: {
      "barrel-files": pluginBarrelFiles,
    },
    rules: {
      // We don't want console statements in the codebase
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],

      // We limit the amount of exports in a barrel file, this always causes issues with threeshaking and increased bundle size.
      // read more here: https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-7/
      "barrel-files/avoid-barrel-files": [
        "error",
        {
          amountOfExportsToConsiderModuleAsBarrel: 3,
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
