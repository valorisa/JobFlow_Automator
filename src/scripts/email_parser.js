// src/scripts/email_parser.js
module.exports = {
  extractLinks(htmlContent) {
    const linkRegex = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/g;
    const links = [];
    let match;

    while ((match = linkRegex.exec(htmlContent)) !== null) {
      links.push(match[2]);
    }

    return links;
  },
};
