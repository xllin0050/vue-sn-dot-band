module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['plugin:vue/vue3-strongly-recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ['vue'],
  rules: {
    // override/add rules settings here, such as:
    'vue/no-unused-vars': 'off',
    'vue/require-default-prop': 'off',
    'no-console': 'off',
  },
}
