# Trouve ton artisan

Devoir bilan : Formation Développeur Web & Web Mobile au Centre Européen de Formation.

## Objectif
Création d'un site permettant aux particuliers de trouver facilement
un artisan selon sa spécialité ou via une recherche.

Le projet doit respecter plusieurs contraintes :

- Interface responsive
- Navigation simple
- Accessibilité
- Intégration avec une API backend
- Base de données contenant les artisans et les catégories

## Stack technique

**Frontend**
- React
- Bootstrap
- Sass

**Backend**
- Node.js
- Express
- Sequelize

**Base de données**
- MySQL

## Structure du projet

```
devoir-bilan-trouve-ton-artisan
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   └── issue-template.md
│   └── pull_request_template.md
├── backend
├── database
├── docs/
│   ├── diagrammes
│   ├── figma/
│   │   ├── models
│   │   │   ├── model-desktop.png
│   │   │   ├── model-mobile.png
│   │   │   └── model-tablet.png
│   │   └── wireframes
│   │   │   ├── wireframe-desktop.png
│   │   │   ├── wireframe-mobile.png
│   │   │   └── wireframe-tablet.png
│   └── pdf
│       ├── markdown-pdf.css
│       ├── project.md
│       └── project.pdf
├── frontend/
│   └── src/
│       └── assets/
│           ├── icons/
│           ├── images/
│           └── logos/
│               └── logo-trouve-ton-artisan.png
├── .gitignore
└── README.md
```

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
