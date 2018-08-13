module.exports = {
  "extends": [
    "eslint-config-blued",
    "./rules/typescript.yml"
  ].map(require.resolve),
  "parser": "typescript-eslint-parser",
  "plugins": [
    "typescript"
  ]
}