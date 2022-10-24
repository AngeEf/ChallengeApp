module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-unresolved': 0,
    'max-len': 0,
    'no-console': 0,
    'react/prop-types': 0,
    'react/jsx-no-useless-fragment': 0,
    'react/jsx-filename-extension': 0,
    'no-unused-vars': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-nested-ternary': 0,
  },
};
