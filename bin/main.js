#! /usr/bin/env node

/* global __dirname */
/* global process */
'use strict';

var fs = require('fs')
	, path = require('path')
	, pkg = require(path.join(__dirname, '../package.json'))
	, cmd = require('commander');

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
	_this: this,
	Folders: [],
	Files: [],
	readAllFiles: function (root) {
		fs.readdir(root, function (error, files) {
			files.forEach(function (elem, index) {
				if (fs.lstatSync(path.join(root, elem)).isDirectory()) {
					checkFileName.Folders.push(elem);
					checkFileName.readAllFiles(path.join(root, elem));
				}
				else {
					checkFileName.Files.push(elem);
				}
			});
		});
		console.log('Folders', checkFileName.Folders.length);
		console.log('Files', checkFileName.Files.length);
	},
	readGitIgnore:function(){

	}
};

//debug notes
console.log("Default args:-----------------------------------------------------------")
if (cmd.customRegex) {
	console.log(cmd.cutomRegex);
}
else if (cmd.exclude) {
	console.log(cmd.exclude);
}
else if (cmd.useGitignore) {
	console.log(cmd.useGitignore);
}
else if (cmd.path) {
	console.log("Path: " + cmd.path);
	checkFileName.readAllFiles(process.cwd());
}