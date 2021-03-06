'use strict'

module.exports = {
  extends: 'eslint:recommended',

  env: {
    es6: true, // enable all ECMAScript 6 features except for modules
    node: true // Node.js global variables and Node.js-specific rules
  },
  rules: {
    'camelcase': 'off',
    'comma-dangle': 'off',
    'comma-style': ['error', 'last'],
    'consistent-return': 'off',
    'curly': ['error', 'all'],
    'dot-notation': 'off',
    'eol-last': 'error',
    'eqeqeq': ['error', 'allow-null'],
    'global-strict': 'off',
    'handle-callback-err': 'warn',
    'indent': ['error', 2], // 2 spaces indentation
    'key-spacing': 'off',
    'new-cap': 'off',
    'no-cond-assign': ['error', 'except-parens'],
    'no-debugger': 'error',
    'no-empty': 'off',
    'no-eval': 'error',
    'no-irregular-whitespace': 'error',
    'no-loop-func': 'off',
    'no-multi-spaces': 'off',
    'no-multiple-empty-lines': ['error', {'max': 2}],
    'no-new': 'error',
    'no-process-exit': 'off',
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-shadow': 'off',
    'no-spaced-func': 'off',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-underscore-dangle': 'off',
    'no-unused-vars': ['error', {'vars': 'all', 'args': 'none'}],
    'no-use-before-define': ['error', 'nofunc'],
    'no-with': 'error',
    'quotes': ['error', 'single', 'avoid-escape'],
    'semi': ['error', 'always'],
    'space-unary-ops': 'off',
    'strict': 'off',
    'valid-typeof': 'error',
    'wrap-iife': 'off',
    'yoda': 'off'
  }
}
