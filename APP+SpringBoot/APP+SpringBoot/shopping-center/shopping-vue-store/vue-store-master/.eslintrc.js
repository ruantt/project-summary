module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'goodsion' ? 'error' : 'off',
    // 'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'goodsion' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
