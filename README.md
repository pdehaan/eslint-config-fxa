# eslint-config-fxa

ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs) file for Firefox Accounts projects.

## Installation:
```
$ npm install eslint-config-fxa -D
```
(You'll need to install `eslint` dependency into your project as well.)

## Usage:
1. Create an .eslintrc file in your project's root directory.
2. Add the following boilerplate:
    ```yaml
extends: fxa
```
3. Run `$ eslint .` (if you have ESLint installed globally, or call via `$ ./node_modules/.bin/eslint .` in your Terminal, or simply `eslint .` if you're using an npm `script` task).

## Options:
There are currently three configs:

1. `fxa` (usage: `"extends": "fxa"`) &mdash; Includes base ESLint [environments](http://eslint.org/docs/user-guide/configuring#specifying-environments) and [rules](http://eslint.org/docs/rules/).
2. `client` (usage: `"extends": "fxa/client"`) &mdash; Overrides base `fxa` config, and adds additional environments for 'amd', 'browser', and 'mocha'.
3. `server` (usage: `"extends": "fxa/server"`) &mdash; Overrides base `fxa` config, and disables the [`semi`](http://eslint.org/docs/rules/semi) rule.
