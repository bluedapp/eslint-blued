module.exports = {
  "extends": [
    "eslint-config-blued",
    "./rules/typescript.json"
  ].map(require.resolve).concat('plugin:@typescript-eslint/recommended'),
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ]
}
