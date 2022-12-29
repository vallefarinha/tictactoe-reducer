module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier'
  ],
  overrides: [
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 'latest',
    "babelOptions": {
      "presets": ["@babel/preset-react"]
   },
    sourceType: 'module',
  },
  plugins: [
    'react'
  ],
  rules: {
    "react/jsx-filename-extension":[
      "warn",
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "react/react-in-jsx-scope": "off",
    "comma-dangle": "off",
    'react/jsx-one-expression-per-line': 0,
}
};