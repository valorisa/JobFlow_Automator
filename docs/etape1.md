## Étape 1 : Récupérer les offres LinkedIn (via Gmail)
### Objectif : Récupérer automatiquement les liens des offres depuis vos alertes LinkedIn.
1. **Configurez les alertes LinkedIn** :
   - Sur LinkedIn, créez une alerte email pour les mots-clés "Ingénieur Système", "DevOps", etc. ([tutoriel ici](https://www.linkedin.com/help/linkedin/answer/52270)).
2. **Créez un workflow dans n8n** :
   - Cliquez sur **Workflows** → **New Workflow**.
   - Ajoutez un nœud **Cron** (pour vérifier les emails toutes les 2h par exemple) :
     - Intervalle : `0 */2 * * *` (toutes les 2 heures).
   - Ajoutez un nœud **Gmail** (pour lire les emails) :
     - Connectez votre compte Gmail (n8n vous guidera pour l’autorisation).
     - Paramètres :
       - **Action** : "Get New Emails"
       - **Search Term** : `from:noreply@linkedin.com subject:"Nouvelle alerte emploi"`.
3. **Extraire les liens des offres** :
   - Ajoutez un nœud **HTML Extract** (pour extraire les liens des emails) :
     - **Source** : `{{ $json["bodyHtml"] }}` (le corps de l’email).
     - **Selector** : `a` (pour récupérer tous les liens).
4. **Filtrer les doublons** :
   - Ajoutez un nœud **Compare Datasets** :
     - Comparez le champ `href` (lien de l’offre) avec ceux déjà stockés dans Airtable.
