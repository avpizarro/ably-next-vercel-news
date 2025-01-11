// const { dirname } = require("path");
// const { fileURLToPath } = require("url");
// const { FlatCompat } = require("@eslint/eslintrc");

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals")];

export default eslintConfig;

// Using a simpler eslint config to avoid parsing issue when deploying
// import { defineConfig } from "eslint-config-next";

// export default defineConfig({
//   extends: ["next/core-web-vitals"],
// });