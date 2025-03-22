## Étape 4 : Gérer les réponses (Gmail → Airtable)
### Objectif : Mettre à jour Airtable si vous recevez une réponse.
1. **Créez un nouveau workflow** :
   - Déclencheur **Cron** (toutes les 6h par exemple).
2. **Nœud Gmail** :
   - **Search Term** : `from:@linkedin.com subject:"Votre candidature"`.
3. **Nœud IF** pour trier les réponses :
   - Condition 1 : `{{ $json["bodyText"].includes("félicitations") }}` → Statut = "Entretien".
   - Condition 2 : `{{ $json["bodyText"].includes("malheureusement") }}` → Statut = "Rejeté".
4. **Nœud Airtable** :
   - **Opération** : "Update" (mettez à jour la ligne avec le nouveau statut).
