module.exports = {
  "extends": [
    "eslint-config-airbnb-base",
    'eslint-config-airbnb-base/rules/strict',
    "./rules/common.yml",
    "./rules/browser.yml"
  ].map(require.resolve),
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  }
}