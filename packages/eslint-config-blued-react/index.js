module.exports = {
  "extends": [
    "eslint-config-blued",
    "./rules/import.yml",
    "./rules/react.yml"
  ].map(require.resolve),
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ]
}