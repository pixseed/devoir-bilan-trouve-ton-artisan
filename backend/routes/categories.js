/**
 * ================================================================================================
 * CATEGORIES ROUTER
 * ===============================================================================================
 * Rôle :
 * - Définir les routes liées aux catégories, telles que la récupération des catégories et la
 *   récupération des artisans par catégorie.
 * 
 * Fonctionnement :
 * - Importer les fonctions du controller correspondant (categoryController.js) pour gérer les
 *   différentes opérations liées aux catégories.
 * - Utiliser Express Router pour définir les routes spécifiques et dynamiques.
 * 
 * Routes :
 * - GET /categories : Récupérer les catégories.
 * - GET /categories/:id : Récupérer les détails d'une catégorie spécifique par son ID.
 * 
 * Dépendances :
 * - backend/controllers/categoryController.js pour les fonctions de gestion des catégories.
 * - backend/app.js pour être utilisé dans les routes de l'API.
 * ================================================================================================
 */

import express from 'express';
import {
    getAllCategories,
    getArtisansByCategoryId
} from '../controllers/categoryController.js';

const router = express.Router();

// Route spécifique
router.get('/', getAllCategories);

// Route dynamique
router.get('/:id/artisans', getArtisansByCategoryId);

export default router;