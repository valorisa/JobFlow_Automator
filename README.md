# JobFlow Automator

## Description

JobFlow Automator est un projet d'automatisation des candidatures LinkedIn via n8n. Il permet de récupérer les offres d'emploi, de les stocker dans Airtable, et de gérer les réponses automatiquement.

## Fonctionnalités

- Récupération automatique des offres LinkedIn via Gmail
- Stockage des offres dans Airtable
- Notification des nouvelles offres via Slack ou Email
- Gestion des réponses aux candidatures

## Prérequis

- Compte n8n (Cloud ou local)
- Compte Airtable
- Compte Gmail
- Compte Slack (optionnel)

## Installation

1. Clonez ce dépôt :

   ```bash
   git clone https://github.com/votre-utilisateur/JobFlow_Automator.git
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Configurez les variables d'environnement :
   - Créez un fichier `.env` à partir de `.env.example`
   - Remplissez les valeurs nécessaires

4. Démarrez le projet :

   ```bash
   npm start
   ```

## Utilisation

1. Configurez les alertes LinkedIn pour recevoir les offres par email.
2. Configurez n8n pour lire les emails et extraire les liens des offres.
3. Stockez les offres dans Airtable et recevez des notifications pour postuler.
4. Gérez les réponses aux candidatures automatiquement.

## Contribution

Les contributions sont les bienvenues ! Veuillez lire [CONTRIBUTING.md](docs/CONTRIBUTING.md) pour plus de détails.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Auteurs

- [valorisa](https://github.com/valorisa)

## Remerciements

- [n8n](https://n8n.io) pour l'outil d'automatisation.
- [Airtable](https://airtable.com) pour le stockage des données.
- [Slack](https://slack.com) pour les notifications.

Prochaines Étapes

Configurer n8n : Suivez les étapes détaillées dans le README.md pour configurer n8n.

Configurer Airtable : Créez une base Airtable et configurez les colonnes nécessaires.

Configurer Gmail : Autorisez n8n à accéder à votre compte Gmail.

Configurer Slack (optionnel) : Configurez Slack pour recevoir des notifications.

## Documentation

Pour un guide détaillé sur la configuration et l'utilisation de JobFlow Automator, consultez les fichiers suivants :

- [Préparation](docs/preparation.md)
- [Étape 1 : Récupérer les offres LinkedIn](docs/etape1.md)
- [Étape 2 : Stocker les offres dans Airtable](docs/etape2.md)
- [Étape 3 : Recevoir une notification pour postuler](docs/etape3.md)
- [Étape 4 : Gérer les réponses](docs/etape4.md)
- [Conseils de Démarrage](docs/conseils.md)
- [Erreurs Courantes](docs/erreurs.md)
- [Améliorations Possibles](docs/ameliorations.md)
- [Exemples de Workflows](docs/exemples.md)
