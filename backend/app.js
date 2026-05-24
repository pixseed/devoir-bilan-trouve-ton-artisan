/**
 * ================================================================================================
 * EXPRESS APPLICATION SETUP
 * ================================================================================================
 * Rôle :
 * - Initialiser l'application Express.
 * - Configurer les middlewares globaux.
 * - Exposer les ressources statiques.
 * - Monter les routes principales de l'API.
 * - Exporter l'application pour pour démarrage depuis le point d'entrée serveur.
 * 
 * Fonctionnement :
 * 1. Initialiser Express.
 * 2. Configurer les middlewares globaux (CORS, HELMET, JSON).
 * 3. Configurer le service des fichiers statiques.
 * 4. Monter les routeurs métier
 * 4. Exporter l'application configurée.
 * 
 * Dépendances principales :
 * - server.js : démarrage du serveur.
 * - routes/categories.js : routes catégories.
 * - routes/artisan.js : routes artisans.
 * ================================================================================================
 */

import express from 'express';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import { fileURLToPath } from 'url';

import { apiErrorHandler } from './middlewares/apiErrorHandler.js';

import artisanRouter from './routes/artisans.js';
import categoriesRouter from './routes/categories.js';

// ===========================================================================================
// EXPRESS INSTANCE
// Création de l'application principale
// ===========================================================================================
const app = express();

// ===========================================================================================
// PATH RESOLUTION
// Recréation de __dirname car indisponible en ES Modules
// ===========================================================================================
const __filename = fileURLToPath(import.meta.url); // Transforme l'URL en chemin
const __dirname = path.dirname(__filename); // Retire le fichier pour ne garder que le dossier

// ===========================================================================================
// GLOBAL MIDDLEWARES
// ===========================================================================================

// Sécurisation des headers HTTP
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin"},
}));

// Limiteur de débit de requête
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limite chaque IP à 100 requêtes
  message: {
    success: false,
    error: {
      message : "Trop de requêtes exécutées. Veuillez rééssayer ultérieurement.",
      code: "RATE_LIMIT_EXCEEDED",
    },
  },
});

app.use(limiter);

// Autorisation des requêtes provenant du front React
app.use(cors({
    origin: process.env.FRONTEND_URL,
}))

// Parse automatiquement les corps de requête JSON avec
// limitation de poids de données envoyées par l'utilisateur
app.use(express.json({ limit: "10kb"}));

// ===========================================================================================
// STATIC FILES
// Exposition publique des images via /images
// Exemple : /images/photo.jpg
// ===========================================================================================

// Fichiers public (images)
app.use('/images', express.static(path.join(__dirname,'public/images')));

// ===========================================================================================
// API ROUTES
// ===========================================================================================
app.use('/categories', categoriesRouter);
app.use('/artisans', artisanRouter);

// ===========================================================================================
// GLOBAL ERROR HANDLING MIDDLEWARE
// ===========================================================================================
app.use(apiErrorHandler);

// ===========================================================================================
export default app;