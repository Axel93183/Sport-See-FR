# Sport-See-FR Front-End

Ce dossier contient le front-end de l'application Sport-See-FR, qui est une application React.

## Prérequis

Pour exécuter cette application, vous aurez besoin de Node.js et de npm installés sur votre machine. Vous pouvez les télécharger ici : [Node.js](https://nodejs.org/).

## Installation

Suivez ces étapes pour installer et démarrer le front-end de l'application :

1. **Cloner le dépôt**

   Si vous n'avez pas déjà cloné le dépôt, faites-le avec la commande suivante :

   ```bash
   git clone https://github.com/votre-utilisateur/votre-repo.git
   ```

2. **Naviguer vers le dossier du front-end**

   Changez de répertoire pour accéder au dossier du front-end :

   ```bash
   cd votre-repo/Sport-See-FR_Front-End
   ```

3. **Installer les dépendances**

   Installez toutes les dépendances nécessaires en exécutant :

   ```bash
   npm install
   ```

4. **Démarrer l'application**

   Lancez l'application en mode développement :

   ```bash
   npm start
   ```

   Après le démarrage, l'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

## Utilisation avec Docker

### Prérequis

- [Docker Desktop](https://www.docker.com/products/docker-desktop)

### Étapes

1. **Cloner le dépôt**

   Si vous n'avez pas déjà cloné le dépôt, faites-le avec la commande suivante :

   ```bash
   git clone https://github.com/votre-utilisateur/votre-repo.git
   ```

2. **Naviguer vers le dossier du front-end**

   Changez de répertoire pour accéder au dossier du front-end :

   ```bash
   cd votre-repo/Sport-See-FR_Front-End
   ```

3. **Construire l'image Docker**

   Construisez l'image Docker pour le front-end :

   ```bash
   docker build -t sport-see-front-end .
   ```

4. **Démarrer le conteneur Docker**

   Lancez le conteneur Docker :

   ```bash
   docker run -p 3000:3000 sport-see-front-end
   ```

   Après le démarrage, l'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

## Fonctionnement avec le Back-End

### Sans Docker

1. **Démarrer le back-end**

   Suivez les instructions dans le dépôt du back-end pour installer les dépendances et démarrer le serveur back-end.

2. **Configurer le front-end**

   Assurez-vous que le front-end est configuré pour pointer vers l'URL du back-end (par exemple, `http://localhost:3001`).

### Avec Docker

1. **Configurer Docker Compose**

   Utilisez Docker Compose pour orchestrer les conteneurs front-end et back-end. Assurez-vous que votre fichier `docker-compose.yml` est configuré correctement.

   Exemple de `docker-compose.yml` :

   ```yaml
   services:
     front-end:
       build:
         context: ./Sport-See-FR_Front-End
         dockerfile: Dockerfile
       ports:
         - "3000:3000"

     back-end:
       build:
         context: ./Sport-See-FR_Back-End
         dockerfile: Dockerfile
       ports:
         - "3001:3001"
   ```

2. **Démarrer les conteneurs**

   Depuis le dossier racine où se trouve le fichier `docker-compose.yml`, exécutez :

   ```bash
   docker-compose up --build
   ```

3. **Accéder aux applications**

   - Front-End : [http://localhost:3000](http://localhost:3000)
   - Back-End : [http://localhost:3001](http://localhost:3001)

## Structure du Projet

Le dossier `Sport-See-FR_Front-End` contient les fichiers suivants :

```
/Sport-See-FR_Front-End
    /public
        ...fichiers statiques...
    /src
        ...composants React et fichiers JavaScript...
    package.json
    README.md
```

## Scripts Disponibles

Dans ce projet, vous pouvez exécuter :

- `npm start` : Exécute l'application en mode développement.
- `npm test` : Lance le testeur en mode interactif.
- `npm run build` : Construit l'application pour la production dans le dossier `build`.

## En Savoir Plus

Pour en savoir plus sur React, consultez la [documentation React](https://reactjs.org/).
