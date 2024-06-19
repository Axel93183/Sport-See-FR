# Sport-See-FR Back-End

Ce dossier contient tout le code source pour exécuter la micro-API pour le tableau de bord d'analyse sportive SportSee.

## 1. Informations Générales

Pour démarrer ce projet, vous êtes libre d'utiliser Docker ou non. Dans cette documentation, nous verrons plusieurs méthodes pour lancer le projet facilement.

## 2. Projet (**sans Docker**)

### 2.1 Prérequis

- NodeJS (**version 12.18**)
- Yarn

Si vous travaillez avec plusieurs versions de NodeJS, nous vous recommandons d'installer nvm. Cet outil vous permettra de gérer facilement vos versions de NodeJS.

### 2.2 Lancement du projet

- Forkez le dépôt
- Clonez-le sur votre ordinateur.
- La commande `yarn` vous permettra d'installer les dépendances.
- La commande `yarn dev` vous permettra de lancer l'API micro.

## 3. Projet (**avec Docker**)

### 3.1 Prérequis

- Docker Desktop

### 3.2 Démarrage du projet

- La commande `docker image build --no-cache -t micro-api .` vous permettra de construire votre image.
- La commande `docker container run --name micro-api -p 3001:3001 -dt micro-api yarn` vous permettra de créer votre conteneur Docker et d'exécuter votre image sur le port 3001.
- La commande `docker container stop micro-api` vous permettra d'arrêter votre micro-api.
- La commande `docker container rm micro-api` vous permettra de supprimer votre conteneur micro-api.

### 3.3 Vscode et conteneurs distants

Enfin, si vous avez VsCode, vous pouvez facilement lancer votre projet dans un environnement Docker.

Vous aurez besoin de l'extension Remote Development. Une fois cette extension installée, cliquez simplement sur le bouton `Reopen in Container`.

Une fois dans le conteneur, exécutez la commande `yarn dev`.

## 4. Endpoints

### 4.1 Endpoints disponibles

Ce projet inclut quatre endpoints que vous pourrez utiliser :

- `http://localhost:3001/user/${userId}` - récupère les informations d'un utilisateur. Ce premier endpoint inclut l'identifiant de l'utilisateur, les informations de l'utilisateur (prénom, nom et âge), le score du jour (todayScore) et les données clés (calories, macronutriments, etc.).
- `http://localhost:3001/user/${userId}/activity` - récupère l'activité d'un utilisateur jour par jour avec les kilogrammes et les calories.
- `http://localhost:3001/user/${userId}/average-sessions` - récupère les sessions moyennes d'un utilisateur par jour. La semaine commence le lundi.
- `http://localhost:3001/user/${userId}/performance` - récupère la performance d'un utilisateur (énergie, endurance, etc.).

**Attention, actuellement seuls deux utilisateurs ont été simulés. Ils ont respectivement les identifiants 12 et 18.**

### 4.2 Exemples de requêtes

- `http://localhost:3001/user/12/performance` - Récupère la performance de l'utilisateur avec l'identifiant 12
- `http://localhost:3001/user/18` - Récupère les informations principales de l'utilisateur 18.
