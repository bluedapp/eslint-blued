module.exports = {
  "extends": [
    ".",
    "./rules/typescript-react.json"
  ].map(require.resolve),
}
