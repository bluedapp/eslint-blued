module.exports = {
  "extends": [
    ".",
    "./rules/.import",
    "./rules/.react"
  ].map(require.resolve),
  "parser": "babel-eslint",
  "plugins": [
    "typescript"
  ]
}