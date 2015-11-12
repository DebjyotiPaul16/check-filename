#! /usr/bin/env node
'use strict';

var fs = require('fs')
	, path = require('path')
	,	pkg = require( path.join(__dirname, '../package.json') )
	, cmd = require('commander');

var lower_case = ''
	,	lower_case_with_hyphen = ''
	,	lower_case_with_underscore = ''
	,	camel_case = ''
	, upper_case = ''
	,	exclude = ['node_modules', 'bower_component', '.git', '.svn', '.hg'];

cmd
  .version(pkg.version)
	.description(pkg.description)
	.usage('[--path][--custom-regex][--exclude][--use-gitignore]')
  .option('-c, --custom-regex', 'Format type to check.', lower_case)
	.option('-e, --exclude', 'Files or Folder to exclude. ', exclude)
	.option('-i, --use-gitignore', 'Don\'t use ".gitignore"', true)
  .option('-p, --path <folder path>', 'Folder path to run a filename check', './')
  .parse(process.argv);



//debug notes
console.log("Default args:-")
if(cmd.customRegex){
	console.log(cmd.cutomRegex);
}
if(cmd.exclude){
	console.log(cmd.exclude);
}
if(cmd.useGitignore){
	console.log(cmd.useGitignore);
}
if(cmd.path){
	console.log(cmd.path);
}