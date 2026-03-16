<h1>Projet : Trouve ton artisan</h1>

<h2>Devoir Bilan : "Créez le site Web 'Trouve ton artisan' avec React.JS"</h2>

Formation Développeur Web & Web Mobile - Centre Européen de Formation

<div class="project-info">

**Auteur :** Cédric Kernec  
**GitHub :** *https://github.com/**pixseed***  
**Formation :** DWWM - CEF  
**Technologie :** React, React Router, Vite, Node.js, Express, Sequelize, MySQL    
**Date :** 03/2026

</div>

<div class="page-break"></div>

## Sommaire

- [Sommaire](#sommaire)
- [1. Contexte du projet](#1-contexte-du-projet)
- [2. Présentation du client](#2-présentation-du-client)
- [3. Expression des besoins](#3-expression-des-besoins)
- [4. Contraintes techniques](#4-contraintes-techniques)
- [5. Fonctionnalités principales](#5-fonctionnalités-principales)
  - [5.1. Navigation](#51-navigation)
  - [5.2. Header](#52-header)
  - [5.3. Footer](#53-footer)
  - [5.4. Page d'accueil](#54-page-daccueil)
  - [5.5. Page liste des artisans](#55-page-liste-des-artisans)
  - [5.6. Page fiche artisan](#56-page-fiche-artisan)
- [6. Architecture de l'application](#6-architecture-de-lapplication)
- [7. Livrables attendus](#7-livrables-attendus)

<div class="page-break"></div>

## 1. Contexte du projet

Le client est la région Auvergne-Rhône-Alpes.

L'objectif est de proposer un site permettant aux particuliers de trouver facilement
un artisan selon sa spécialité ou via une recherche.

Le projet doit respecter plusieurs contraintes :

- Interface responsive
- Navigation simple
- Accessibilité
- Intégration avec une API backend
- Base de données contenant les artisans et les catégories

---

## 2. Présentation du client

La région Auvergne-Rhône-Alpes souhaite mettre à disposition un service numérique
permettant de valoriser les artisans locaux et faciliter leur mise en relation
avec les particuliers.

Site institutionnel :
https://www.auvergnerhonealpes.fr/

---

## 3. Expression des besoins

L'application doit permettre de :

- Consulter une liste d'artisans
- Filtrer les artisans par catégorie
- Rechercher par nom
- Consulter la fiche détaillée d'un artisan
- Contacter un artisan via un formulaire

---

## 4. Contraintes techniques

Architecture technique du projet :

Frontend :
- React
- Vite
- React Router
- Bootstrap / CSS

Backend :
- Node.js
- Express

Base de données :
- MySQL

ORM :
- Sequelize

Architecture générale :

Frontend → API → Base de données

---

## 5. Fonctionnalités principales

### 5.1. Navigation

- Page d'accueil
- Liste des artisans
- Fiche artisan
- Page 404

### 5.2. Header

- Logo
- Menu catégories
- Barre de recherche

### 5.3. Footer

- Liens pages légales
- Informations de contact

### 5.4. Page d'accueil

- Présentation du fonctionnement du site en 4 étapes
- Affichage des 3 artisans du mois

### 5.5. Page liste des artisans

- Filtrage par catégorie
- Affichage sous forme de cards
- Accès à la fiche détaillée

### 5.6. Page fiche artisan

Informations affichées :

- Nom
- Image
- Note
- Spécialité
- Localisation
- Description
- Site web éventuel
- Formulaire de contact

---

## 6. Architecture de l'application

Routes frontend :

```
/               → page accueil
/artisans       → liste des artisans
/artisan/:id    → fiche artisan
/404            → page erreur
```

---

## 7. Livrables attendus

- API Node.js fonctionnelle
- Base de données MySQL
- Frontend React
- Interface responsive
- Documentation du projet