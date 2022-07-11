// console.log('Hello World');
// console.log(process.argv);

// Import commander
const program = require("commander");

// Import fs
const fs = require("fs");
const { exit } = require("process");

// Parse
program.parse(process.argv);

// Filepath
const filePath = program.args[0];

// Output
// console.log(filePath);

// Read Markdown file
fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
  if (err) {
    console.log(err.message);
    process.exit(1);
    return;
  }
  console.log(file);
});
