module.exports = {
  "extends": [
    "blued",
    "./rules/.import",
    "./rules/.react"
  ].map(require.resolve)
}