/**
 * Coding challenge by IOOF Holdings
 * https://github.com/ioof-holdings/recruitment/wiki/Robot-Challenge
 * 
 * Implementation of 
 * Zird Triztan E. Driz
 * https://github.com/OxygenJam
 * 
 * Require NodeJS to run
 */


const parser = require("./input-parse");
var stdin = process.openStdin();


stdin.addListener("data", function(d){
    const input = d.toString().trim();

    parser.parseInput(input);
});

