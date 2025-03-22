## Étape 3 : Recevoir une notification pour postuler
### Objectif : Être alerté quand une nouvelle offre est trouvée.
1. **Ajoutez un nœud Slack ou Email** :
   - Pour Slack :
     - Connectez votre workspace Slack.
     - **Channel** : Choisissez un canal (ex: #candidatures).
     - **Message** : `Nouvelle offre à postuler : {{ $json["fields"]["Lien"] }}`.
   - Pour Email (nœud **Gmail** en mode "Send") :
     - **To** : Votre adresse email.
     - **Subject** : "Nouvelle offre LinkedIn !".
     - **Body** : "Postulez ici : {{ $json["fields"]["Lien"] }}".
