import { defineConfig } from "eslint/config";
import pluginDrizzle from "eslint-plugin-drizzle";

import typescriptConfig from "@novemberfiveco/eslint-config-typescript";

const config = defineConfig([
  typescriptConfig,
  {
    plugins: {
      drizzle: pluginDrizzle,
    },
    rules: {
      ...pluginDrizzle.configs.recommended.rules,
    },
  },
]);

export default config;
