import globals from "globals";
import pluginJs from "@eslint/js";


export default [

  // to match .js files & detect type of language
  {files: ["**/*.js"], languageOptions: {sourceType: "script"}},


  // determine env that  run code 
  {languageOptions: { globals: globals.browser }},

  //  recommended rules 
  // pluginJs.configs.recommended,



];