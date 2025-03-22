// src/workflows/linkedin_automation.js
const n8n = require('n8n-core'); // Supposons que n8n-core est une bibliothèque pour interagir avec n8n

module.exports = {
  async triggerWorkflow() {
    try {
      // Étape 1 : Récupérer les emails depuis Gmail
      const emails = await n8n.nodes.gmail.getEmails({
        searchTerm: 'from:noreply@linkedin.com subject:"Nouvelle alerte emploi"',
      });

      // Étape 2 : Extraire les liens des offres
      const links = emails.map(email => {
        return n8n.nodes.htmlExtract.extractLinks(email.bodyHtml, 'a');
      }).flat();

      // Étape 3 : Filtrer les doublons
      const uniqueLinks = [...new Set(links)];

      // Étape 4 : Stocker les offres dans Airtable
      await n8n.nodes.airtable.createRecords({
        baseId: 'VOTRE_BASE_ID',
        table: 'Candidatures',
        records: uniqueLinks.map(link => ({
          fields: {
            Lien: link,
            Date: new Date().toISOString(),
            Statut: 'À postuler',
          },
        })),
      });

      console.log('Workflow exécuté avec succès !');
    } catch (error) {
      console.error('Erreur lors de l\'exécution du workflow :', error);
    }
  },
};
