/*
 * @Description:
 * @Date: 2022-09-03 15:38:11
 * @LastEditors: siwenfeng
 * @LastEditTime: 2022-09-03 16:02:15
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    '@typescript-eslint/ban-types': 'off',
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'upd',
        'del',
        'fix',
        'refactor',
        'test',
        'perf',
        'docs',
        'style',
        'revert'
      ]
    ],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never']
  }
}
