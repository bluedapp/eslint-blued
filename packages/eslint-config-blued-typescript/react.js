module.exports = {
  "extends": [
    ".",
    "./rules/typescript-react.yml"
  ].map(require.resolve),
}