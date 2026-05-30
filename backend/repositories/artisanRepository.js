/**
 * ================================================================================================
 * ARTISAN REPOSITORY
 * ================================================================================================
 * Rôle :
 * - Centraliser les accès à la base de données pour la ressource Artisan.
 * - Encapsuler les requêtes Sequelize liées aux artisans.
 *
 * Responsabilité :
 * - Lecture des artisans.
 * - Recherche des artisans mis en avant.
 * - Recherche d'artisan par identifiant.
 *
 * Dépendances :
 * - models/index.js
 * ================================================================================================
 */

import { Artisan, Specialty, Category } from "../models/index.js";

// ================================================================================================
// COMMON INCLUDE
// Jointure réutilisable pour charger spécialité + catégorie :
// └─ Artisan               → Récupération des données de la table Artisan (FROM)
//     └─ Specialty         → Récupération des données de la table Specialty dans Artisan (JOIN)
//          └─ Category     → Récupération des données de la table Category dans Specialty (JOIN)
// ================================================================================================
const artisanInclude = {
  model: Specialty,
  as: "specialty",
  include: {
    model: Category,
    as: "category",
  },
};

// ================================================================================================
// FIND ALL ARTISANS
// Récupérer tous les artisans triées par note décroissante
// ================================================================================================
export const findAllArtisans = async ({
  whereClause = {},
  includeWhere = null,
}) => {
  const include = {
    ...artisanInclude,
    ...(includeWhere && {
      where: includeWhere,
    }),
  };

  return await Artisan.findAll({
    where: whereClause,
    include,
    order: [["rating", "DESC"]],
  });
};

// ================================================================================================
// FIND TOP ARTISANS
// Récupérer les artisans mis en avant triées par note décroissante (maximum 3)
// ================================================================================================
export const findTopArtisans = async () => {
  return await Artisan.findAll({
    where: { is_top: true },
    include: artisanInclude,
    order: [["rating", "DESC"]],
    limit: 3,
  });
};

// ================================================================================================
// FIND ARTISAN BY ID
// Vérifier l'existence d'un artisan avec relations incluses
// ================================================================================================
export const findArtisanById = async (id) => {
  return await Artisan.findByPk(id, {
    include: artisanInclude,
  });
};

// ================================================================================================
// FIND ARTISAN BY ID (SIMPLE)
// Vérifier l'existence d'un artisan
// ================================================================================================
export const findArtisanByIdSimple = async (id) => {
  return await Artisan.findByPk(id);
};
