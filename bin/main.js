#! /usr/bin/env node

/* global __dirname */
/* global process */
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
  .option('-c, --custom-regex', 'format type to check.', lower_case)
	.option('-e, --exclude', 'files or Folder to exclude. ', exclude)
	.option('-i, --use-gitignore', 'don\'t use ".gitignore"', true)
  .option('-p, --path <folder path>', 'folder path to run a filename check', './')
  .parse(process.argv);

var checkFilename = module.exports = function(){

	return this;
};

var getPath = function(){

};

//debug notes
console.log("Default args:-")
console.log("Current dir:",__dirname);
if(cmd.customRegex){
	console.log(cmd.cutomRegex);

}
else if(cmd.exclude){
	console.log(cmd.exclude);
}
else if(cmd.useGitignore){
	console.log(cmd.useGitignore);
}
else if(cmd.path){
	console.log("Path: "+cmd.path);
}
