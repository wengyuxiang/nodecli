#! /usr/bin/env node

var program=require("commander");
program
  .version(require('../package.json').version)
  .usage('[options] [project name]')
  .parse(process.argv);

var projectName=program.args[0];
console.log(program.args[0]);
