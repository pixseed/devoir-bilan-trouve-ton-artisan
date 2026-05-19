/**
 * ================================================================================================
 * CATEGORY REPOSITORY
 * ================================================================================================
 * Rôle :
 * - Centraliser les accès à la base de données pour la ressource Category.
 * - Encapsuler les requêtes Sequelize liées aux catégories.
 *
 * Responsabilités :
 * - Lecture des catégories.
 * - Recherche de catégorie par identifiant.
 *
 * Dépendances :
 * - models/index.js
 * ================================================================================================
 */

import { Category } from "../models/index.js";

// ================================================================================================
// FIND ALL CATEGORIES
// Récupérer toutes les catégories triées par ID croissant
// ================================================================================================
export const findAllCategories = async () => {
  return await Category.findAll({
    order: [["id", "ASC"]],
  });
};

// ================================================================================================
// FIND CATEGORY BY ID
// Vérifier l'existence d'une catégorie
// ================================================================================================
export const findCategoryById = async (id) => {
  return await Category.findByPk(id);
};
