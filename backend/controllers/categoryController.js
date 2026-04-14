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

import { Category, Specialty, Artisan } from '../models/index.js';

// ================================================================================================
// GET ALL CATEGORIES
// ================================================================================================
export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll({
            order: [['id', 'ASC']],
        });

        return res.status(200).json(categories);

    } catch (error) {
        console.error('💥 Error fetching categories :', error);
        return res.status(500).json({ message: 'Erreur serveur lors de la récupération des catégories.' });
    }
};

// ================================================================================================
// GET ARTISANS BY CATEGORY ID
// ================================================================================================
export const getArtisansByCategoryId = async (req, res) => {
    const { id } = req.params;

    try {
        const category = await Category.findByPk(id, {
            include: {
                model: Specialty,
                as: 'specialties',
                include: {
                    model: Artisan,
                    as: 'artisans'
                }
            },
            order: [['name', 'ASC']],
        });

        if (!category) {
            return res.status(404).json({ message: 'Catégorie non trouvée.' });
        }

        // Tranformation des données pour retourner une liste d'artisans avec leurs spécialités et catégories
        const artisans = category.specialties.flatMap(specialty => specialty.artisans);

        return res.status(200).json(artisans);

    } catch (error) {
        console.error('💥 Error fetching artisans by category ID :', error);
        return res.status(500).json({ message: 'Erreur serveur lors de la récupération des artisans par catégorie.' });
    }
};