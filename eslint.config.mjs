import globals from "globals";
import pluginJs from "@eslint/js";
import latestFunctionRule from "./rules/latest-function.js";  // Import your custom rule
import noFix from "./rules/no-fix.js";
export default [
  // Match .js files and set the language options
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script",
    },
  },

  // Set the environment (browser in this case)
  {
    languageOptions: {
      globals: globals.browser,
    },
  },

  // Register the custom rule as part of a local plugin
  {
    plugins: {
      "custom-rules": {
        rules: {
          "latest-function": latestFunctionRule,  // Register the custom rule
          "no-fix": noFix,
        },
      },
    },
    rules: {
      "eqeqeq": "error",          // Use built-in ESLint rules
      "no-eval": "error",
      "curly": "error",
      "no-else-return": "warn",

      // Use your custom rule here
      "custom-rules/latest-function": "error",
      
      "custom-rules/no-fix": "error",
    },
  },
];
