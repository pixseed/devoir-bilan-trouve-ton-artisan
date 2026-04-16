# Trouve ton artisan

Devoir bilan : Formation Développeur Web & Web Mobile au Centre Européen de Formation.

---

## Sommaire

- [Trouve ton artisan](#trouve-ton-artisan)
  - [Sommaire](#sommaire)
  - [Objectif](#objectif)
  - [Stack technique](#stack-technique)
  - [Structure du projet](#structure-du-projet)
  - [UX/UI Design](#uxui-design)
    - [Design System](#design-system)
    - [Wireframes](#wireframes)
      - [Wireframe Mobile](#wireframe-mobile)
      - [Wireframe Tablet](#wireframe-tablet)
      - [Wireframe Desktop](#wireframe-desktop)
    - [Models](#models)
      - [Model Mobile](#model-mobile)
      - [Model Tablet](#model-tablet)
      - [Model Desktop](#model-desktop)
  - [DataBase](#database)
    - [Relations](#relations)
    - [Modèle Conceptuel de Données (MCD)](#modèle-conceptuel-de-données-mcd)
    - [Modèle Logique de Données graphique - Diagram EER (MLD)](#modèle-logique-de-données-graphique---diagram-eer-mld)
    - [Modèle Logique de Données textuel - Schéma relationnel (MLD)](#modèle-logique-de-données-textuel---schéma-relationnel-mld)
    - [Documentation des données](#documentation-des-données)
    - [Script SQL](#script-sql)
    - [Modélisation des données (Sequelize)](#modélisation-des-données-sequelize)
  - [Installation \& Lancement](#installation--lancement)
    - [Prérequis](#prérequis)
    - [1. Installation du projet](#1-installation-du-projet)
    - [2. Configuration Backend](#2-configuration-backend)
    - [3. Lancement de la base de données](#3-lancement-de-la-base-de-données)
    - [4. Initialisation de la base de données](#4-initialisation-de-la-base-de-données)
    - [5. Lancement en développement](#5-lancement-en-développement)
    - [5.bis Lancement manuel (optionnel)](#5bis-lancement-manuel-optionnel)
    - [6. Accès à l’application](#6-accès-à-lapplication)
  - [API Endpoints](#api-endpoints)
    - [Artisans](#artisans)
    - [Catégories](#catégories)
  - [API Documentation (Postman)](#api-documentation-postman)
    - [Fonctionnalité testées :](#fonctionnalité-testées-)
    - [Cas de test couverts :](#cas-de-test-couverts-)
    - [Utilisation :](#utilisation-)


---

## Objectif
Création d'un site permettant aux particuliers de trouver facilement
un artisan selon sa spécialité ou via une recherche.

Le projet doit respecter plusieurs contraintes :

- Interface responsive
- Navigation simple
- Accessibilité
- Intégration avec une API backend
- Base de données contenant les artisans, les spécialités et les catégories

## Stack technique

**Frontend**
- React
- Bootstrap
- Sass

**Backend**
- Node.js
- Express
- Sequelize
- dotenv

**Base de données**
- MySQL  / MariaDB
- MySQL Workbench

---

## Structure du projet

```
devoir-bilan-trouve-ton-artisan
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   └── issue-template.md
│   └── pull_request_template.md
│
├── backend/
│   ├── config/
│   │    └── database.js
│   ├── controllers/
│   │   ├── artisanController.js
│   │   └── categoryController.js
│   ├── middleware/
│   ├── models/
│   │   ├── Artisan.js
│   │   ├── Category.js
│   │   ├── index.js
│   │   └── Specialty.js
│   ├── routes/
│   │   ├── artisans.js
│   │   └── categories.js
│   ├── utils/
│   │   ├── dbStats.js
│   │   └── dbTest.js
│   ├── app.js
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── database/
│   ├── DATA/
│   │   ├── data.png
│   │   └── data.xlsx
│   ├── MCD/
│   │   ├── MCD_trouve_ton_artisan_url.url
│   │   ├── MCD_trouve_ton_artisan.mcd
│   │   └── MCD_trouve_ton_artisan.svg
│   ├── MLD/
│   │    ├── MLD_Diagram_EER_trouve_ton_artisan.mwb
│   │    ├── MLD_Diagram_EER_trouve_ton_artisan.mwb.bak
│   │    ├── MLD_Diagram_EER_trouve_ton_artisan.png
│   │    ├── MLD_trouve_ton_artisan.md
│   │    └── MLD_trouve_ton_artisan.pdf
│   └── SQL/
│       ├── queries.sql
│       ├── schema.sql
│       └── seed.sql
│
├── docs/
│   ├── diagrammes
│   ├── figma/
│   │   ├── models
│   │   │   ├── model-desktop.png
│   │   │   ├── model-mobile.png
│   │   │   └── model-tablet.png
│   │   └── wireframes
│   │       ├── wireframe-desktop.png
│   │       ├── wireframe-mobile.png
│   │       └── wireframe-tablet.png
│   ├── pdf
│   │   ├── markdown-pdf.css
│   │   ├── project.md
│   │   └── project.pdf
│   └── postman
│       ├── pm_collection.json
│       └── pm_environment.json
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   │   ├── icons/
│   │   │   ├── images/
│   │   │   └── logos/
│   │   │       └── logo-trouve-ton-artisan.png
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Artisan_Details.jsx
│   │   │   ├── Artisans_list.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Not_Found.jsx
│   │   │   └── Under_Construction.jsx
│   │   ├── router/
│   │   │   └── index.jsx
│   │   ├── services/
│   │   ├── styles/
│   │   │   └── main.scss
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

Le **backend** est structuré selon **une architecture en couches** :
- config
- controllers
- middleware
- models
- routes

Le **frontend** est structuré selon **une architecture modulaire** :
- assets
- pages
- components
- router
- services
- styles

---

## UX/UI Design

[Lien vers la maquette Figma : Kernec_Cedric_Devoir_Bilan_Trouve_Ton_Artisan](https://www.figma.com/design/C0moU99nW9cfFlHHRzYXxc/Kernec_Cedric_Devoir_Bilan_Trouve_Ton_Artisan?node-id=38-3103&t=fcY6xDrTEQbigvnm-1)

### Design System
- Token (primitive / semantic / component)
- Composants réutilisables

### Wireframes

#### Wireframe Mobile
![Wireframe Mobile](./docs/figma/wireframes/wireframe-mobile.png)
#### Wireframe Tablet
![Wireframe Tablet](./docs/figma/wireframes/wireframe-tablet.png)
#### Wireframe Desktop
![Wireframe Desktop](./docs/figma/wireframes/wireframe-desktop.png)

### Models

#### Model Mobile
![Model Mobile](./docs/figma/models/model-mobile.png)
#### Model Tablet
![Wireframe Tablet](./docs/figma/models/model-tablet.png)
#### Model Desktop
![Wireframe Desktop](./docs/figma/models/model-desktop.png)

---

## DataBase

La base de données a été conçu sur une logique de modélisation en deux étapes :
- Modèle Conceptuel de Données (MCD)
- Modèle Logique de Données (MLD)

Elle respecte le tableau de données transmis par le client :
![Tableau de données - PNG](./database/DATA/data.png)

et repose sur 3 entités principales :
- `catégories`
- `specialties`
- `artisans`

### Relations

- Une catégorie peut être attachée à plusieurs spécialités (1,N)
- Une spécialité est attachée à une seule catégorie (1,1)
- Une spécialité peut caractériser plusieurs artisans (1,N)
- Un artisan est caractérisé par une seule spécialité (1,1)

### Modèle Conceptuel de Données (MCD)

![MCD - Modèle Conceptuel de Données - Trouve ton artisan](./database/MCD/MCD_trouve_ton_artisan.svg)

### Modèle Logique de Données graphique - Diagram EER (MLD)

![MLD - Modèle Logique de Données - Trouve ton artisan](./database/MLD/MLD_Diagram_EER_trouve_ton_artisan.png)

### Modèle Logique de Données textuel - Schéma relationnel (MLD)

![MLD - Modèle Logique de Donnée - Schéma relationnel - PNG](./database/MLD/MLD_trouve_ton_artisan.png)
📄 [database/MLD/MLD_trouve_ton_artisan.pdf](./database/MLD/MLD_trouve_ton_artisan.pdf)

### Documentation des données

Un dictionnaire de données détaillé est disponible dans le projet afin de décrire :
- les champs
- les types
- les contraintes

👉 Voir : 📄 [database/db_doc.pdf](./database/db_doc.pdf)

### Script SQL

Les scripts SQL sont organisés comme suit :
- `schema.sql` → Création des la DB et des tables
- `seed.sql` → Insertion des données initiales
- `queries.sql` → Requête métier principales :
  - top artisans du mois
  - filtrage par catégorie
  - recherche par mot-clé (nom, spécialité, ville)
  - recherche combinée (filtrage par catégorie et recherche par mot-clé)
  - détail d'un artisan

### Modélisation des données (Sequelize)

Les modèles Sequelize implémentent la structure définie dans le MLD.

Ces relations sont implémentées via Sequelize avec les méthodes :
- `hasMany()` → indique qu'un modèle possède plusieurs instances d'un autre modèle (relation 1 → N).
- `belongsTo()` → indique qu'un modèle appartient à un autre modèle (relation N → 1).

Des alias (`as`) sont utilisés afin de faciliter les requêtes imbriquées avec `include`.

---

## Installation & Lancement

### Prérequis

Avant de lancer le projet, assurez-vous d’avoir installé :
- Node.js
- npm
- MySQL ou MariaDB

>Scripts disponibles
>  
>Le projet utilise des scripts npm pour simplifier le développement :
>- `npm run dev` → Lance simultanément le frontend et le backend
>- `npm run frontend` → Lance uniquement le frontend (React + Vite)
>- `npm run backend` → Lance uniquement le backend (Node.js + Express + Sequelize)
> 
>Le lancement simultané est géré grâce à **concurrently**.

### 1. Installation du projet

Depuis la racine du projet :

```Bash
npm install
```
Cette commande installe :
- les dépendances du backend
- les dépendances du frontend
- les outils globaux (concurrently)

### 2. Configuration Backend

**Fichier .env**

Créer un fichier `.env` dans le dossier `backend/` :

```Environment
DB_NAME=trouve_ton_artisan
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
DB_DIALECT=mysql
PORT=3000
```

### 3. Lancement de la base de données

Avant de lancer l'API, assurez-vous d'avoir lancé votre serveur MySQL.

Example avec XAMPP :
- Lancer XAMPP
- Démarrer le service MySQL

### 4. Initialisation de la base de données

1. Créer/Réinitialiser la base de données :

```SQL
-- via MySQL Workbench
source database/SQL/schema.sql;
```

2. Insérer les données :

```SQL
source database/SQL/seed.sql;
```

### 5. Lancement en développement

```Bash
npm run dev
```

Cette commande lance simultanément :
- le serveur backend (port 3000)
- l’application frontend (port 5173)

### 5.bis Lancement manuel (optionnel)

Si vous souhaitez lancer les services séparément :

**Backend**

```Bash
cd backend
npm install
node server.js
```

**Frontend**

```Bash
cd frontend
npm install
npm run dev
```

### 6. Accès à l’application

Une fois le projet lancé :
- Accéder au **Frontend** : http://localhost:5173⁠
- Accéder au **Backend** : http://localhost:3000⁠

Vous pouvez tester les [endpoints](#api-endpoints) via Postman (voir la section [API Documentation (Postamn)](#api-documentation-postman))

---

## API Endpoints

### Artisans

- GET /artisans/top → Top artisans du mois
- GET /artisans/search?q=keyword&category=id → Recherche d'artisans
- GET /artisans/:id → Détail d'un artisan
- POST /artisans/:id/contact → Envoie d'un formulaire de contact à l'artisan

Body attendu :
{
  "name": "string",
  "email": "string",
  "object": "string",
  "message": "string"
}
### Catégories

- GET /categories → Liste des catégories
- GET /categories/:id/artisans → Artisans par catégorie

---

## API Documentation (Postman)

Une collection Postman et son environnement sont disponibles pour tester l'ensemble des endpoints de l'API.

📁 Emplacement :  
`/docs/postman/pm_collection.json`  
`/docs/postman/pm_environment.json`

### Fonctionnalité testées :
- Récupération des artisans et des catégories
- Recherche (globale et par catégorie)
- Détail d'un artisan
- Contact d'un artisan

### Cas de test couverts :
- ✅ 200 (cas nominal)
- ❌ 400 (requête invalide)
- ❌ 404 (ressource non trouvée)

### Utilisation :
1. [Lancer le serveur](#installation--lancement)
2. Importer la collection dans Postman `pm_collection.json`
3. Importer l'environnement dans Postman `pm_environment.json`
4. Sélectionner l'environnement dans Postman
5. Lancer les requêtes