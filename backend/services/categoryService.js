/**
 * ================================================================================================
 * CATEGORY SERVICE
 * ================================================================================================
 * Rôle :
 * - Gérer la logique métier liée aux catégories.
 * - Orchestrer les appels aux repositories.
 *
 * Dépendances :
 * - repositories/categoryRepository.js
 * ================================================================================================
 */

import { findAllCategories } from "../repositories/categoryRepository.js";

// ================================================================================================
// GET CATEGORIES SERVICE
// Récupération de toutes les catégories
// ================================================================================================
export const getCategoriesService = async () => {
  return findAllCategories();
};
