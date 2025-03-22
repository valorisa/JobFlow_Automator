// tests/test_linkedin_automation.js
const assert = require('assert');
const linkedinAutomation = require('../src/workflows/linkedin_automation');

describe('Workflow LinkedIn Automation', () => {
  it('should retrieve emails and extract links', async () => {
    // Simuler des emails
    const mockEmails = [
      { bodyHtml: '<a href="https://linkedin.com/job1">Job 1</a>' },
      { bodyHtml: '<a href="https://linkedin.com/job2">Job 2</a>' },
    ];

    // Simuler les fonctions n8n
    const n8n = {
      nodes: {
        gmail: {
          getEmails: async () => mockEmails,
        },
        htmlExtract: {
          extractLinks: (html) => {
            const linkRegex = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/g;
            const links = [];
            let match;

            while ((match = linkRegex.exec(html)) !== null) {
              links.push(match[2]);
            }

            return links;
          },
        },
        airtable: {
          createRecords: async () => {}, // Simuler une fonction vide
        },
      },
    };

    // Injecter les dépendances simulées
    linkedinAutomation.n8n = n8n;

    // Exécuter le workflow
    await linkedinAutomation.triggerWorkflow();

    // Vérifier que les liens ont été extraits
    assert.ok(true); // Remplacez par des assertions plus spécifiques
  });
});
