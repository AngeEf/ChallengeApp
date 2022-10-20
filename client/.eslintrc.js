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
    'react/jsx-filename-extension': 0
  },
};
