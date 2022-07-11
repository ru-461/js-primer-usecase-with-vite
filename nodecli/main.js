const program = require("commander");
const fs = require("fs");
const mk2html = require("./md2html");

program.option("--gfm", "Enable GFM");
program.parse(process.argv);
const filePath = program.args[0];

const cliOptions = {
  gfm: false,
  ...program.opts(),
};

// Read Markdown file
fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
  if (err) {
    console.log(err.message);
    process.exit(1);
    return;
  }
  const html = mk2html(file, cliOptions);
  console.log(html);
});
