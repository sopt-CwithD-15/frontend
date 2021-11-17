/* "prettier/prettier": ["error", { endOfLine: "auto" }, { usePrettierrc: true }],
윈도우 유저가 개행 CRLF 에러 나면 rules에 추가
*/
module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto', singleQuote: true }, { usePrettierrc: true }],
    'no-unused-vars': 'warn',
    'no-console': 'warn',
  },
};
