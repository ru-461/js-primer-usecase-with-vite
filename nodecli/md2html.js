const markd = require("marked");

module.exports = (markdown, cliOptions) => {
  return markd.parse(markdown, {
    gfm: cliOptions.gfm,
  });
};
