module.exports = {
  "extends": ['plugin:@typescript-eslint/recommended'].concat([
    "eslint-config-blued",
    "./rules/typescript.json"
  ].map(require.resolve)),
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ]
}
