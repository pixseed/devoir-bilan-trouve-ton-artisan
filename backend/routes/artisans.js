/**
 * ================================================================================================
 * ARTISANS ROUTER
 * ===============================================================================================
 * Rôle :
 * - Définir les routes liées aux artisans, telles que la récupération des artisans, la recherche,
 *   et la gestion des détails d'un artisan.
 * Fonctionnement :
 * - Importer les fonctions du controller correspondant (artisanController.js) pour gérer les
 *   différentes opérations liées aux artisans.
 * - Utiliser Express Router pour définir les routes spécifiques et dynamiques.
 * 
 * Routes :
 * - GET /artisans/top : Récupérer les artisans mis en avant (top artisans).
 * - GET /artisans/search : Rechercher des artisans en fonction de critères de recherche.
 * - GET /artisans/:id : Récupérer les détails d'un artisan spécifique par son ID.
 * 
 * Dépendances :
 * - backend/controllers/artisanController.js pour les fonctions de gestion des artisans.
 * - backend/app.js pour être utilisé dans les routes de l'API.
 * ================================================================================================
 */

import express from 'express';
import {
    getTopArtisans,
    getArtisanById,
    searchArtisans,
    contactArtisan
} from '../controllers/artisanController.js';

const router = express.Router();

// Route spécifique
router.get('/top', getTopArtisans);
router.get('/search', searchArtisans);

// Route dynamique
router.post('/:id/contact', contactArtisan);
router.get('/:id', getArtisanById);

export default router;