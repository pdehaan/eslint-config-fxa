'use strict'

module.exports = {
  'env': {
    'es6': true, // enable all ECMAScript 6 features except for modules
    'node': true // Node.js global variables and Node.js-specific rules
  },
  'rules': {
    'camelcase': 0,
    'comma-dangle': 0,
    'complexity': [2, 6],
    'consistent-this': [1, 'self'],
    'consistent-return': 0,
    'curly': [2, 'all'],
    'dot-notation': 0,
    'eol-last': 2,
    'eqeqeq': [2, 'allow-null'],
    'global-strict': [0, 'never'],
    'handle-callback-err': 1,
    'key-spacing': 0,
    'new-cap': 0,
    'no-cond-assign': [2, 'except-parens'],
    'no-debugger': 2,
    'no-empty': 0,
    'no-eval': 2,
    'no-irregular-whitespace': 2,
    'no-loop-func': 0,
    'no-multi-spaces': 0,
    'no-multiple-empty-lines': [2, {'max': 2}],
    'no-new': 2,
    'no-process-exit': 0,
    'no-script-url': 2,
    'no-sequences': 2,
    'no-shadow': 0,
    'no-spaced-func': 0,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-underscore-dangle': 0,
    'no-unused-vars': [1, {'vars': 'all', 'args': 'none'}],
    'no-use-before-define': true,
    'no-with': 2,
    'quotes': [2, 'single'],
    'semi': [2, 'always'],
    'space-unary-ops': 0,
    'strict': 2,
    'valid-typeof': 1,
    'wrap-iife': 0,
    'yoda': 0
  }
}
