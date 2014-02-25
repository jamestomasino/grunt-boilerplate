# Grunt Boilerplate #

## Overview ##

The grunt-boilerplate is a sample project with grunt automation tasks to serve as a starting point for new projects (hence: boilerplate). It represents a lot of personal decisions on how best to organize files and structure code. It's certainly not the best way for all people, so use your own judgement on what parts to keep or toss.

## Installation ##

### Requirements ###

- *[nodejs](http://nodejs.org/)* - Use a package installer, homebrew, whatever
- *grunt-cli* - `npm install -g grunt-cli`
- (Optional) *Live-Reload Plugin* - Update your browser on code changes
	- [Chrome Plugin](https://chrome.google.com/webstore/detail/	jnihajbhpnppcggbcgedagnkighmdlei)
	- [Safari Plugin](https://github.com/downloads/mockko/livereload/LiveReload-1.6.2.safariextz)
	- [Firefox Plugin](https://addons.mozilla.org/firefox/addon/livereload/)
	- IE Plugin - Why are you developing in IE?

### Installation ###

Standard:

- Clone the repo
- Run `npm install` in the root folder
- Run `grunt` once to set up all your hooks

Or, to install all the node modules globally:

- Clone the repo
- Run `./setup_global` in the root folder
- Run `grunt` once to set up all your hooks

## Components ##

### Grunt ###

[Grunt](http://gruntjs.com/) automation tasks make building your project easier. There's many such systems out there, but Grunt's support is widespread and plugins numerous.

### grunt ###

The default grunt task performs the following operations:

- *exec:install_hooks* - installs repo hooks (see below)
- *jshint* - linting for your javascript
- *jsonlint* - lintint for your json
- *qunit* - unit tests in the jQuery way
- *compass:dist* - builds your CSS for deployment
- *snockets* - builds your javascript for deployment
- *beep:error* - beeps if there was an error

### grunt watch ###

The `grunt watch` task will watch for filesystem changes and perform the following operations if it detects a change:

- *watch:scripts* - lints, tests, and builds (un-minified) any javascript files on change
- *watch:css* - builds (un-minified) css from your scss files on change
- *livereload* - triggers a livereload in your browser if the plugin is enabled

### grunt lint ###

The `grunt lint` task will run linting tests on your javascript and json files.

### grunt test ###

The `grunt test` task will run qunit, testing all your unit tests.
 
### grunt travis ###

If you use [Travis-CI](http://travis-ci.com), this task will be triggered to ensure your build is passing. It runs both the linting tests and the qunit tests.

### No-Framework MVC / Observer Patterns ###

The only libraries included in the boilerplate are `modernizr`, which enables HTML5 features in older browsers; and `jQuery 1.10` which enables easy access to the HTML DOM.

There is also a stubbed out example of an MVC implementation using a pure javascript `Events` class to implement observer patterns.

### Hooks ###

Instead of relying on each member of your team to add and update their `.git/hooks/` files individually, the hooks are instead kept in the repo itself. Upon running the `grunt` task for the first time, all possible hooks are symlinked to the `hooks/hooks-wrapper` file. When the hook is triggered, that wrapper will look in the `hooks/` folder for an executable file with the proper name (normal hook name convention) and execute it. If no file exists, it ends cleanly.

This means that you can add as many hooks directly into your repo as you like, and you can also add custom local hooks that can be individually ignored as well.

#### pre-commit ###

The `pre-commit` hook that is bundled in the boilerplate requires all commits to pass the `grunt lint` task, which ensures all javascript and json files are properly formatted. Once that is complete, the hook edits this `README.md` file, stripping the _COMMIT LOG_ below, and updating it with a daily breakdown of commits made to the project. Due to limitations of `pre-commit` hooks, the only thing left out from this list will be the most recent commit message.

## TODO ##

## COMMIT LOG ##

####2014-01-30####

 * updated readme (`James Tomasino`)
 * cleaning up unnecessary * (`James Tomasino`)
 * setup_global reads from package.json (`James Tomasino`)
 * added global setup script to simlink global node modules and ignore them (`James Tomasino`)

####2014-01-17####

 * fixing package json to be about the boilerplate (`James Tomasino`)
 * adding travis.yml (`James Tomasino`)
 * __properly stripping old changelog from file and replacing it now__ (`James Tomasino`)
 * __changelog only regenerates at end of readme__ (`James Tomasino`)
 * added lots to the readme (`James Tomasino`)
 * adding exit from pre-commit hook if linting fails, before readme updated (`James Tomasino`)
 * adding exit from pre-commit hook if linting fails, before readme updated (`James Tomasino`)
 * adding exit from pre-commit hook if linting fails, before readme updated (`James Tomasino`)
 * adding exit from pre-commit hook if linting fails, before readme updated (`James Tomasino`)
 * sed -i has extension issues on mac. patched to fix (`James Tomasino`)

####2014-01-16####

 * abandoned stash attempt. it breaks grunt every time (`James Tomasino`)
 * tweaking pre-commit stash behavior to support grunt (`James Tomasino`)
 * adding a stash before testing on commit (`James Tomasino`)
 * reverting. README is always 1 commit behind presently (`James Tomasino`)
 * attempting to insert updated readme on post-commit hook (`James Tomasino`)
 * added auto-generated readme changelog (`James Tomasino`)
 * adding pre-commit hook (`James Tomasino`)
 * adding first attempt at auto-hook installation (`James Tomasino`)
 * clearing up grunt errors on initial commit (`James Tomasino`)
 * adding initial files (`James Tomasino`)
 * Initial commit (`James Tomasino`)
