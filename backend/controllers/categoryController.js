/**
 * ================================================================================================
 * CATEGORY CONTROLLER
 * ================================================================================================
 * Rôle :
 * - Gérer les opérations liées aux catégories, telles que la récupération des catégories.
 * 
 * Fonctionnement :
 * - Fournir une fonction pour récupérer toutes les catégories.
 * - Utiliser les modèles de données pour interagir avec la base de données et retourner les
 *   résultats au format JSON.
 * 
 * Dépendances :
 * - backend/models/index.js pour accéder aux modèles Category.
 * - backend/app.js pour être utilisé dans les routes de l'API.
 * 
 * Fonctions définies :
 * - getCategories : Récupérer toutes les catégories.
 * 
 * Utilisé par :
 * - backend/routes/category.js pour définir les routes liées aux catégories.
 * ================================================================================================
 */

import {
    Category
} from '../models/index.js';
import {
    successResponse,
    errorResponse
} from '../utils/response.js';

// ================================================================================================
// GET CATEGORIES
// ================================================================================================
export const getCategories = async (req, res) => {
    try {
        const categories = await Category.findAll({
            order: [['id', 'ASC']],
        });

        return successResponse(res, categories, 'Catégories récupérées avec succès.');

    } catch (error) {
        console.error('💥 Error fetching categories :', error);
        return errorResponse(res, 'Erreur serveur lors de la récupération des catégories.', 500, "INTERNAL_ERROR");
    }
};