#!/usr/bin/env node

/**
 * Entry point for the skhelper CLI program.
 * Chris Joakim, 2025
 */

import { SKHelper } from "./SKHelper";

function displayCommandLineExamples() {
    console.log('-');
    console.log('npx -- skhelper version');
    console.log('npx -- skhelper generate');
    console.log('npx -- skhelper report');
    console.log('npx -- skhelper scan');
    console.log('');
}

function main() {
  try {
    let func = process.argv[2];
    let helper = new SKHelper();
    switch (func) {
        case "version":
            console.log(SKHelper.version());
            break;
        case "generate":
            helper.generate();
            break;
        case "report":
            helper.report();
            break;
        case "scan":
            helper.scan();
            break;
        default:
            displayCommandLineExamples();
            break;
    }
  }
  catch (error) {
    console.error(error);
  }
}

main();

export { SKHelper }
