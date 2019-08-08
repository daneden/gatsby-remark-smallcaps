const visit = require("unist-util-visit");

const CAPS_RE = /([A-Z]{2,})/g;

const DEFAULT_OPTIONS = {
  className: "caps"
};

module.exports = ({ markdownAST }, pluginOptions = DEFAULT_OPTIONS) => {
  visit(markdownAST, `text`, node => {
    if (node.value.match(CAPS_RE)) {
      const processedText = node.value.replace(
        CAPS_RE,
        `<span class="${pluginOptions.className}">$1</span>`
      );
      node.type = `html`;
      node.value = processedText;
    }
  });

  return markdownAST;
};
