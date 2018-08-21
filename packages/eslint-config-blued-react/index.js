module.exports = {
  "extends": [
    "eslint-config-blued",
    "eslint-config-airbnb/rules/react",
    "eslint-config-airbnb/rules/react-a11y",
    "./rules/import.yml",
    "./rules/react.yml"
  ].map(require.resolve),
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ]
}