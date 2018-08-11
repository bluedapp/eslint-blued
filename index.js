module.exports = {
  "extends": [
    "eslint-config-airbnb",
    "./rules/.common",
    "./rules/.browser"
  ].map(require.resolve),
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  }
}