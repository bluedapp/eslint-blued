module.exports = {
  "extends": [
    ".",
    "./rules/.typescript"
  ].map(require.resolve),
  "parser": "typescript-eslint-parser",
  "plugins": [
    "typescript"
  ]
}