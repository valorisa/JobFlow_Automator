# **JobFlow Automator**

## **Description**

**JobFlow Automator** est un projet d'automatisation des candidatures LinkedIn via **n8n**, un outil d'automatisation open-source. Ce projet vise à simplifier et accélérer la recherche d'emploi en automatisant les tâches répétitives telles que :

- La récupération des offres d'emploi depuis les alertes LinkedIn.
- Le stockage des offres dans **Airtable** pour un suivi organisé.
- La gestion des réponses aux candidatures via **Gmail**.
- L'envoi de notifications via **Slack** ou **Email** pour rester informé des nouvelles offres.

## **Fonctionnalités**

1. **Récupération automatique des offres LinkedIn** :
   - Les offres d'emploi sont extraites des emails d'alertes LinkedIn.
   - Les liens des offres sont filtrés pour éviter les doublons.

2. **Stockage dans Airtable** :
   - Les offres sont enregistrées dans une base Airtable avec des colonnes pour le lien, la date et le statut (ex: "À postuler", "Postulé", "Rejeté").

3. **Notifications** :
   - Des notifications sont envoyées via Slack ou Email pour informer de nouvelles offres.

4. **Gestion des réponses** :
   - Les réponses aux candidatures sont analysées et le statut des offres est mis à jour dans Airtable.

5. **Extensibilité** :
   - Le projet est conçu pour être facilement extensible avec de nouvelles fonctionnalités (ex: automatisation des candidatures, analyse des offres avec IA).

---

### **Technologies Utilisées**

- **n8n** : Pour l'automatisation des workflows.
- **Airtable** : Pour le stockage et la gestion des offres.
- **Gmail** : Pour la récupération des emails et l'envoi de notifications.
- **Slack** : Pour les notifications en temps réel.
- **JavaScript** : Pour les scripts personnalisés (ex: extraction des liens).
- **Git** : Pour la gestion du versionnement du code.

---

### **Structure du Projet**

```bash
JobFlow_Automator/
├── README.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── .gitignore
├── docs/
│   ├── preparation.md
│   ├── etape1.md
│   ├── etape2.md
│   ├── etape3.md
│   ├── etape4.md
│   ├── conseils.md
│   ├── erreurs.md
│   ├── ameliorations.md
│   └── exemples.md
├── src/
│   ├── workflows/
│   │   └── linkedin_automation.js
│   └── scripts/
│       └── email_parser.js
└── tests/
    ├── test_linkedin_automation.js
    └── test_email_parser.js
```

---

### **Installation**

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/votre-utilisateur/JobFlow_Automator.git
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Configurez les variables d'environnement :
   - Créez un fichier `.env` à partir de `.env.example`.
   - Remplissez les valeurs nécessaires (clés API, identifiants, etc.).

4. Démarrez le projet :

   ```bash
   npm start
   ```

---

### **Utilisation**

1. Configurez les alertes LinkedIn pour recevoir les offres par email.
2. Configurez n8n pour lire les emails et extraire les liens des offres.
3. Stockez les offres dans Airtable et recevez des notifications pour postuler.
4. Gérez les réponses aux candidatures automatiquement.

---

### **Documentation**

Pour un guide détaillé, consultez les fichiers suivants dans le répertoire `docs/` :

- [Préparation](docs/preparation.md)
- [Étape 1 : Récupérer les offres LinkedIn](docs/etape1.md)
- [Étape 2 : Stocker les offres dans Airtable](docs/etape2.md)
- [Étape 3 : Recevoir une notification pour postuler](docs/etape3.md)
- [Étape 4 : Gérer les réponses](docs/etape4.md)
- [Conseils de Démarrage](docs/conseils.md)
- [Erreurs Courantes](docs/erreurs.md)
- [Améliorations Possibles](docs/ameliorations.md)
- [Exemples de Workflows](docs/exemples.md)

---

### **Contribuer**

Les contributions sont les bienvenues ! Pour contribuer au projet :

1. Forkez le dépôt.
2. Créez une nouvelle branche (`git checkout -b nouvelle-fonctionnalite`).
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`).
4. Poussez vos changements (`git push origin nouvelle-fonctionnalite`).
5. Ouvrez une pull request sur GitHub.

Pour plus de détails, consultez le fichier [CONTRIBUTING.md](CONTRIBUTING.md).

---

### **Licence**

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

### **Auteurs**

- [valorisa](https://github.com/votre-utilisateur)

---

### **Remerciements**

- [n8n](https://n8n.io) pour l'outil d'automatisation.
- [Airtable](https://airtable.com) pour le stockage des données.
- [Slack](https://slack.com) pour les notifications.

---

### **Conclusion**

**JobFlow Automator** est un projet innovant qui simplifie la recherche d'emploi en automatisant les tâches répétitives. Que vous soyez un développeur cherchant à contribuer ou un utilisateur cherchant à optimiser votre recherche d'emploi, ce projet est conçu pour vous aider. N'hésitez pas à explorer la documentation et à contribuer ! 😊

Si vous avez besoin de modifications ou d'ajouts, faites-moi savoir ! 🚀