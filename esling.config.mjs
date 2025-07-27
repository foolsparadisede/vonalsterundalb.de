// eslint.config.mjs
import reactCompiler from "eslint-plugin-react-compiler";
import prettier from "eslint-plugin-prettier";
import path from "node:path";
import {fileURLToPath} from "node:url";
import js from "@eslint/js";
import {FlatCompat} from "@eslint/eslintrc";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends("next/core-web-vitals"),
  {
    plugins: {
      "react-compiler": reactCompiler,
      prettier,
      eslintPluginPrettierRecommended,
    },

    rules: {
      "react/no-unescaped-entities": 0,
      "react-compiler/react-compiler": "error",

      quotes: ["error", "double"],
      "arrow-body-style": ["error", "as-needed"],
      "linebreak-style": ["error", "unix"],
      semi: ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
    },
  },
];
