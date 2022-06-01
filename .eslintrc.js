module.exports = {
  root: true,
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  extends: ['plugin:vue/vue3-strongly-recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    // override/add rules settings here, such as:
    // 'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'vue/no-unused-vars': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    'no-console': 'off',
  },
}
