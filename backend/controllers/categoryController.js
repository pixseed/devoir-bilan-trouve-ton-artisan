/**
 * ================================================================================================
 * CATEGORY CONTROLLER
 * ================================================================================================
 * Rôle :
 * - Gérer les opérations liées aux catégories, telles que la récupération des catégories, la recherche,
 *   et la gestion des détails d'une catégorie.
 * 
 * Fonctionnement :
 * - Fournir des fonctions pour récupérer les catégories en fonction de différents critères (ex: top
 *   catégories, par ID, par recherche).
 * - Utiliser les modèles de données pour interagir avec la base de données et retourner les résultats
 *   au format JSON.
 * 
 * Dépendances :
 * - backend/models/index.js pour accéder aux modèles Artisan, Specialty et Category.
 * - backend/app.js pour être utilisé dans les routes de l'API.
 * 
 * Fonctions définies :
 * - getAllCategories : Récupérer toutes les catégories.
 * - getArtisansByCategoryId : Récupérer les artisans d'une catégorie spécifique.
 * 
 * Utilisé par :
 * - backend/routes/category.js pour définir les routes liées aux catégories.
 * ================================================================================================
 */

import {
    Category,
    Specialty,
    Artisan
} from '../models/index.js';
import { serializeArtisanListItem } from '../serializers/artisanSerializer.js';
import {
    successResponse,
    errorResponse
} from '../utils/response.js';

// ================================================================================================
// GET ALL CATEGORIES
// ================================================================================================
export const getAllCategories = async (req, res) => {
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

// ================================================================================================
// GET ARTISANS BY CATEGORY ID
// ================================================================================================
export const getArtisansByCategoryId = async (req, res) => {
    const { id } = req.params;

    try {
        const category = await Category.findByPk(id);

        if (!category) {
            return errorResponse(res, 'Catégorie non trouvée.', 404, "CATEGORY_NOT_FOUND");
        }

        const artisans = await Artisan.findAll({
            include: {
                model: Specialty,
                as: 'specialty',
                include: {
                    model: Category,
                    as: 'category',
                }
            },
            where: {
                '$specialty.category.id$': id
            },
            order: [['rating', 'DESC']],
        });

        return successResponse(res, artisans.map(serializeArtisanListItem), 'Artisans récupérés avec succès.');

    } catch (error) {
        console.error('💥 Error fetching artisans by category ID :', error);
        return errorResponse(res, 'Erreur serveur lors de la récupération des artisans par catégorie.', 500, "INTERNAL_ERROR");
    }
};