#! /usr/bin/env node
'use strict';

var fs = require('fs')
	, path = require('path')
	, pkg = require(path.join(__dirname, '../package.json'))
	, cmd = require('commander')
	,	chalk = require('chalk');

var lower_case = ''
	, lower_case_with_hyphen = ''
	, lower_case_with_underscore = ''
	, camel_case = ''
	, upper_case = ''
	, exclude = ['node_modules', 'bower_component', '.git', '.svn', '.hg'];

cmd
  .version(pkg.version)
	.description(pkg.description)
	.usage('[--path][--custom-regex][--exclude][--use-gitignore]')
  .option('-c, --custom-regex', 'format type to check.', lower_case)
	.option('-i, --use-gitignore', 'don\'t use ".gitignore"', true)
	.option('-x, --exclude', 'files or Folder to exclude. ', exclude)
  .option('-p, --path <folder path>', 'folder path to run a filename check', process.cwd())
  .parse(process.argv);

var checkFileName = module.exports = {
	Folders: [],
	Files: [],

	readAllFiles: function (srcPath) {
		fs.readdir(srcPath, function (error, files) {
			files.forEach(function (elem, index) {
				if (fs.lstatSync(path.join(srcPath, elem)).isDirectory()) {
					checkFileName.Folders.push(elem);
					checkFileName.readAllFiles(path.join(srcPath, elem));
				}
				else {
					checkFileName.Files.push(elem);
				}
			});
		});
		checkFileName.displayResults();
	},

	timer: setTimeout(function(){},0),

	displayResults: function () {
		if (checkFileName.timer) {
			clearTimeout(checkFileName.timer);
			checkFileName.timer = setTimeout(function () {
				console.log("=============");
				console.log(chalk.blue('Folders:'), chalk.red(checkFileName.Folders.length));
				console.log(chalk.blue('Files:'), chalk.red(checkFileName.Files.length));
				console.log("=============");
			}, 500);
		}
	}
};

//debug notes
console.log("Default args:\n-------------------- ");
if (cmd.customRegex) {
	console.log('Custom Regex:',cmd.customRegex);
}
if (cmd.exclude) {
	console.log('Exclude:',cmd.exclude);
}
if (cmd.useGitignore) {
	console.log('Use Gitignore:',cmd.useGitignore);
}
if (cmd.path) {
	console.log("Path: " + cmd.path);
	checkFileName.readAllFiles(cmd.path);
}
console.log("-------------------- ");