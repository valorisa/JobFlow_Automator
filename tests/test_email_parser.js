// tests/test_email_parser.js
const assert = require('assert');
const emailParser = require('../src/scripts/email_parser');

describe('Email Parser', () => {
  it('should extract links from HTML content', () => {
    const htmlContent = `
      <a href="https://linkedin.com/job1">Job 1</a>
      <a href="https://linkedin.com/job2">Job 2</a>
    `;

    const links = emailParser.extractLinks(htmlContent);

    assert.deepStrictEqual(links, [
      'https://linkedin.com/job1',
      'https://linkedin.com/job2',
    ]);
  });

  it('should return an empty array if no links are found', () => {
    const htmlContent = '<p>No links here</p>';
    const links = emailParser.extractLinks(htmlContent);

    assert.deepStrictEqual(links, []);
  });
});
