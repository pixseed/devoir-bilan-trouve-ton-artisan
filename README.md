# Trouve ton artisan

Devoir bilan : Formation Développeur Web & Web Mobile au Centre Européen de Formation.

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
│   └── pdf
│       ├── markdown-pdf.css
│       ├── project.md
│       └── project.pdf
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

### Installation du projet

Depuis la racine du projet :

```Bash
npm install
```
Cette commande installe :
- les dépendances du backend
- les dépendances du frontend
- les outils globaux (concurrently)

### Scripts disponibles

Le projet utilise des scripts npm pour simplifier le développement :
- `npm run dev` → Lance simultanément le frontend et le backend
- `npm run frontend` → Lance uniquement le frontend (React + Vite)
- `npm run backend` → Lance uniquement le backend (Node.js + Express + Sequelize)

Le lancement simultané est géré grâce à **concurrently**.

### Lancement en développement

```Bash
npm run dev
```

Cette commande lance simultanément :
- le serveur backend (port 3000)
- l’application frontend (port 5173)

### Accès à l’application

**Frontend** : http://localhost:5173⁠
**Backend** : http://localhost:3000⁠

### Configuration Backend

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

### Initialisation de la base de données

1. Créer/Réinitialiser la base de données :

```SQL
-- via MySQL Workbench
source database/SQL/schema.sql;
```

2. Insérer les données :

```SQL
source database/SQL/seed.sql;
```

### Lancement manuel (optionnel)

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