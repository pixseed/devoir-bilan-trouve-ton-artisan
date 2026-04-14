/**
 * ================================================================================================
 * EXPRESS APPLICATION SETUP
 * ================================================================================================
 * Ce fichier configure l'application Express, en ajoutant le middleware pour parser le JSON.
 * Il exporte l'application Express configurée pour être utilisée dans le fichier server.js, qui est
 * le point d'entrée principal du serveur.
 * 
 * Rôle :
 * - Initialiser l'application Express.
 * - Définir les middlewares.
 * - Importer et utiliser les routes de l'API.
 * - Exporter l'application pour être utilisée dans server.js.
 * 
 * Fonctionnement :
 * 1. Importer le module Express.
 * 2. Créer une instance de l'application Express.
 * 3. Ajouter le middleware pour parser les requêtes JSON.
 * 4. Exporter l'application Express configurée.
 * 
 * Dépendances :
 * - server.js (pour démarrer le serveur)
 * - routes/ (pour définir les routes de l'API)
 * ================================================================================================
 */

import express from 'express';
import categoriesRouter from './routes/categories.js';
import artisanRouter from './routes/artisans.js';

const app = express();

// Middleware JSON
app.use(express.json());

// Routes API
app.use('/categories', categoriesRouter);
app.use('/artisans', artisanRouter);

export default app;