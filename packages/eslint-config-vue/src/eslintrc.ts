export const eslintConfig = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    extraFileExtensions: [".vue"],
  },
  extends: [
    "@akualabs",
    "plugin:vue/vue3-strongly-recommended",
  ],
  rules: {
    "vue/multi-word-component-names": 0,
    "vue/html-closing-bracket-spacing": ["error", {
      "startTag": "never",
      "endTag": "never",
      "selfClosingTag": "never",
    }],
    "vue/html-quotes": [2, "double", { "avoidEscape": true }],
    "vue/max-attributes-per-line": 0,
    "vue/component-tags-order": ["error", {
      "order": ["script", "template", "style"],
    }],
  },
};

module.exports = eslintConfig;
export default eslintConfig;
