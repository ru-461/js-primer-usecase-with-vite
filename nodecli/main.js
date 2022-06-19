// console.log('Hello World');
// console.log(process.argv);

// Import commander
const program = require("commander");

// Parse
program.parse(process.argv);

// Filepath
const filePath = program.args[0];

// Output
console.log(filePath);
