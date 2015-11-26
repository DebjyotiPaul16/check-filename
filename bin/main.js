#! /usr/bin/env node
'use strict';

var fs = require('fs')
	, path = require('path')
	, pkg = require(path.join(__dirname, '../package.json'))
	, cmd = require('commander')
	, chalk = require('chalk')
	,	checkFileName = require('check_file_name');

var lowerCase = /^([a-z]+|[^a-z0-9][a-z]+)$/
	, lowerCaseWithHyphen = ''
	, lowerCaseWithUnderscore = ''
	, camelCase = ''
	, upperCase = ''
	, exclude = ['node_modules', 'bower_component', '.git', '.svn', '.hg'];

cmd
	.version(pkg.version)
	.description(pkg.description)
	.usage('[--path][--custom-regex][--exclude][--use-gitignore]')
	.option('-c, --custom-regex', 'format type to check.')
	.option('-i, --use-gitignore', 'don\'t use ".gitignore"')
	.option('-p, --path <folder path>', 'folder path to run a filename check', process.cwd())
	.option('-x, --exclude', 'files or Folder to exclude. ')
	.parse(process.argv);

//debug notes
// console.log("Default args:\n--------------------");
if (cmd.customRegex) {
	// console.log('Custom Regex:',cmd.customRegex);
}
if (cmd.exclude) {
	// console.log('Exclude:',cmd.exclude);
}
if (cmd.useGitignore) {
	// console.log('Use Gitignore:',cmd.useGitignore);
}
if (cmd.path) {
	// console.log("Path: " + cmd.path);
	checkFileName.readAllFiles(cmd.path);
}
// console.log("--------------------");