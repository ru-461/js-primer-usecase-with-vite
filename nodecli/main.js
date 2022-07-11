// console.log('Hello World');
// console.log(process.argv);

// Import commander
const program = require("commander");

// Import fs
const fs = require("fs");
const { exit } = require("process");
// Import markd
const markd = require("marked");

// Add option
program.option("--gfm", "GFM");
// Parse
program.parse(process.argv);
// Filepath
const filePath = program.args[0];

// Option
const options = program.opts();

// Override
const cliOptions = {
  gfm: options.gfm ?? false,
};

// Output
// console.log(filePath);

// Read Markdown file
fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
  if (err) {
    console.log(err.message);
    process.exit(1);
    return;
  }
  // To html
  const html = markd.parse(file, {
    gfm: cliOptions.gfm,
  });
  console.log(html);
});
