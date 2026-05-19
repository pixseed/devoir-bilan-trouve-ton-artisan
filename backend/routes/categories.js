/**
 * ================================================================================================
 * CATEGORIES ROUTER
 * ===============================================================================================
 * Rôle :
 * - Définir les endpoints HTTP liés aux catégories.
 * - Déléguer le traitement au controller correspondant.
 * - Centraliser le routage de la ressource "categories".
 * 
 * Fonctionnement :
 * - Importer les fonctions du controller correspondant (categoryController.js) pour gérer les
 *   différentes opérations liées aux catégories.
 * - Utiliser Express Router pour définir les routes spécifiques et dynamiques.
 * 
 * Routes :
 * - GET /categories : Récupérer toutes les catégories.
 * 
 * Dépendances :
 * - backend/controllers/categoryController.js pour les fonctions de gestion des catégories.
 * - backend/app.js pour être utilisé dans les routes de l'API.
 * ================================================================================================
 */

import express from 'express';
import {
    getCategories,
} from '../controllers/categoryController.js';

const router = express.Router();

// Route spécifique
router.get('/', getCategories); // Liste des catégories

export default router;