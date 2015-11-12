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
	,	exclude = ['node_modules', 'bower_component', '.git', '.svn'];

cmd
  .version(pkg.version)
	.description(pkg.description)
  .option('-c, --custom', 'Format type to check', lower_case)
	.option('-e, --exclude', 'Format type to check', exclude)
  .option('-p, --path <folder path>', 'Folder path to run a filename check', './')
  .parse(process.argv);

