/**
 * ================================================================================================
 * ARTISANS ROUTER
 * ===============================================================================================
 * Rôle :
 * - Définir les endpoints HTTP liés aux artisans.
 * - Associer chaque route au controller correspondant.
 * - Séparer le routage HTTP de la logique métier.
 * 
 * Fonctionnement :
 * - Importer les fonctions du controller correspondant (artisanController.js) pour gérer les
 *   différentes opérations liées aux artisans.
 * - Utiliser Express Router pour définir les routes spécifiques et dynamiques.
 * 
 * Routes :
 * - GET /artisans : Récupérer la liste des artisans (avec filtres éventuels via query params).
 * - GET /artisans/top : Récupérer les artisans mis en avant (top artisans).
 * - GET /artisans/:id : Récupérer les détails d'un artisan spécifique par son ID.
 * - POST /artisans/:id/contact : Envoyer un formaulaire de contact à un artisan spécifique par son ID.
 * 
 * Dépendances :
 * - backend/controllers/artisanController.js pour les fonctions de gestion des artisans.
 * - backend/app.js pour être utilisé dans les routes de l'API.
 * ================================================================================================
 */

import express from 'express';

import { contactLimiter } from '../middlewares/rateLimiters.js';

import {
    getTopArtisans,
    getArtisans,
    getArtisanById,
    contactArtisan
} from '../controllers/artisanController.js';

const router = express.Router();

// Route spécifique
router.get('/', getArtisans); // Liste des artisans (+ filtres éventuels)
router.get('/top', getTopArtisans); // Artisans mis en avant

// Route dynamique
router.post('/:id/contact', contactLimiter, contactArtisan); // Envoi du formulaire de contact avec limiter
router.get('/:id', getArtisanById); // Détail d'un artisan

export default router;