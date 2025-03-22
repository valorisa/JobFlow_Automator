## Étape 2 : Stocker les offres dans Airtable
### Objectif : Garder une trace de toutes les offres.
1. **Créez une base Airtable** :
   - Créez une table "Candidatures" avec ces colonnes :
     - **Lien** (URL)
     - **Date**
     - **Statut** (Ex: "À postuler", "Postulé", "Rejeté")
2. **Ajoutez un nœud Airtable** dans n8n :
   - Connectez Airtable (clé API dans les paramètres de votre compte Airtable).
   - **Base** : Sélectionnez votre base.
   - **Table** : "Candidatures".
   - **Opération** : "Create" (ajouter une nouvelle ligne).
