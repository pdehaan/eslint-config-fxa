'use strict'

module.exports = {
  extends: './index',

  env: {
    amd: true, // defines require() and define() as global variables as per the amd spec
    browser: true, // browser global variables
    mocha: true // adds all of the Mocha testing global variables
  },

  rules: {
    strict: [2, 'global']
  }
}
