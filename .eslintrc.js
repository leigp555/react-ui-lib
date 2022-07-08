module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/jsx-filename-extension': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'no-unused-vars': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'arrow-body-style': 'off',
    'comma-dangle': 'off',
    'no-console': 'off',
    'lines-between-class-members': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/button-has-type': 'off',
    ' spaced-comment': 'off',
    'comma-spacing': 'off'
  },
};
