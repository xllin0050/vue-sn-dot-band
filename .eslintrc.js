module.exports = {
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-strongly-recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'vue/require-default-prop': 'off',
    'no-console': 'off',
  },
}
