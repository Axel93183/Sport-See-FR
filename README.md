# Sport-See-FR

Ce dépôt contient les dossiers pour le front-end et le back-end de l'application Sport-See-FR.

## Prérequis

Assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Utilisation avec Docker

### Étapes

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/Axel93183/Sport-See-FR.git
   cd Sport-See-FR
   ```

2. **Construire et démarrer les conteneurs**

   ```bash
   docker-compose up --build
   ```

3. **Accéder aux applications**

   - Front-End : [http://localhost:3000](http://localhost:3000)
   - Back-End : [http://localhost:3001](http://localhost:3001)

### Commandes Utiles

- **Arrêter les conteneurs** :

  ```bash
  docker-compose down
  ```

- **Recréer les conteneurs** :

  ```bash
  docker-compose up --build
  ```

## Utilisation sans Docker

### Étapes

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/Axel93183/Sport-See-FR.git
   cd Sport-See-FR
   ```

2. **Installer les dépendances pour le front-end**

   ```bash
   cd Sport-See-FR_Front-End
   npm install
   ```

3. **Démarrer le front-end**

   ```bash
   npm start
   ```

4. **Installer les dépendances pour le back-end**

   Ouvrez un nouveau terminal et naviguez vers le dossier back-end :

   ```bash
   cd ../Sport-See-FR_Back-End
   npm install
   ```

5. **Démarrer le back-end**

   ```bash
   npm start
   ```

6. **Accéder aux applications**

   - Front-End : [http://localhost:3000](http://localhost:3000)
   - Back-End : [http://localhost:3001](http://localhost:3001)

## Structure du Projet

```
/Sport-See-FR
    /Sport-See-FR_Front-End
        Dockerfile
        ...fichiers du front-end...
    /Sport-See-FR_Back-End
        Dockerfile
        ...fichiers du back-end...
    docker-compose.yml
```

## Remarques

- Assurez-vous que les ports 3000 et 3001 ne sont pas utilisés par d'autres applications sur votre machine.
- Utilisez un fichier `.dockerignore` pour exclure les fichiers et dossiers inutiles lors de la construction des images Docker.
