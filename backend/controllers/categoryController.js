/**
 * ================================================================================================
 * CATEGORY CONTROLLER
 * ================================================================================================
 * Rôle :
 * - Gérer les requêtes HTTP liées aux catégories.
 * - Déléguer la logique métier au service dédié.
 *
 * Endpoints gérés :
 * - GET /categories
 *
 * Fonctions définies :
 * - getCategories() : Récupérer toutes les catégories.
 *
 * Dépendances :
 * - services/categoryService.js
 * - utils/response.js
 * ================================================================================================
 */

import { getCategoriesService } from "../services/categoryService.js";
import { successResponse, errorResponse } from "../utils/response.js";

// ================================================================================================
// GET CATEGORIES
// ================================================================================================
export const getCategories = async (_req, res) => {
  try {
    const categories = await getCategoriesService();
    return successResponse(
      res,
      categories,
      "Catégories récupérées avec succès.",
    );
  } catch (error) {
    console.error("💥 Error fetching categories :", error);
    return errorResponse(
      res,
      "Erreur serveur lors de la récupération des catégories.",
      500,
      "INTERNAL_ERROR",
    );
  }
};
