const visit = require("unist-util-visit");

const CAPS_RE = /([A-Z]{2,})/g;

module.exports = ({ markdownAST }, pluginOptions = {}) => {
  visit(markdownAST, `text`, node => {
    if (node.value.match(CAPS_RE)) {
      const processedText = node.value.replace(
        CAPS_RE,
        `<span class="${pluginOptions.className || "caps"}">$1</span>`
      );
      node.type = `html`;
      node.value = processedText;
    }
  });

  return markdownAST;
};
