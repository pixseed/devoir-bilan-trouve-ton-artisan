/**
 * ================================================================================================
 * ARTISAN SERVICE
 * ================================================================================================
 * Rôle :
 * - Gérer la logique métier liée aux artisans.
 * - Orchestrer les appels aux repositories, validators et serializers.
 *
 * Dépendances :
 * - repositories/artisanRepository.js
 * - repositories/categoryRepository.js
 * - serializers/artisanSerializer.js
 * - validators/artisanValidator.js
 * ================================================================================================
 */

import { Op } from "sequelize";

import {
  findAllArtisans,
  findTopArtisans,
  findArtisanById,
  findArtisanByIdSimple,
} from "../repositories/artisanRepository.js";

import { findCategoryById } from "../repositories/categoryRepository.js";

import {
  serializeTopArtisan,
  serializeArtisanDetail,
  serializeArtisanListItem,
} from "../serializers/artisanSerializer.js";

import { sanitizeContactPayload } from "../utils/sanitizers.js";
import { ApiError } from "../utils/apiError.js";
import { validateContactPayload } from "../validators/artisanValidator.js";

// ================================================================================================
// GET ARTISANS SERVICE
// Récupération de tous les artisans
// ================================================================================================
export const getArtisansService = async ({ search, category }) => {
  const whereClause = {};
  let includeWhere = null;

  // Recherche texte
  if (search) {
    whereClause[Op.or] = [
      { name: { [Op.like]: `%${search}%` } },
      { city: { [Op.like]: `%${search}%` } },
      { "$specialty.name$": { [Op.like]: `%${search}%` } },
    ];
  }

  // Filtre par catégorie
  if (category) {
    const categoryExists = await findCategoryById(category);

    if (!categoryExists) {
      throw new ApiError(404, "CATEGORY_NOT_FOUND", "Catégorie inexistante.");
    }

    includeWhere = { id_category: category };
  }

  const artisans = await findAllArtisans({
    whereClause,
    includeWhere,
  });

  const serialized = artisans.map(serializeArtisanListItem);

  const message =
    serialized.length === 0
      ? "Aucun artisan trouvé pour les critères de recherche spécifiés."
      : "Artisans récupérés avec succès.";

  return {
    data: serialized,
    message,
  };
};

// ================================================================================================
// GET TOP ARTISANS SERVICE
// Récupération du top 3 des artisans mis en avant
// ================================================================================================
export const getTopArtisansService = async () => {
  const artisans = await findTopArtisans();

  return artisans.map(serializeTopArtisan);
};

// ================================================================================================
// GET ARTISAN BY ID SERVICE
// Vérification de l'existance d'un artisan via son ID
// ================================================================================================
export const getArtisanByIdService = async (id) => {
  const artisan = await findArtisanById(id);

  if (!artisan) {
    throw new ApiError(404, "ARTISAN_NOT_FOUND", "Artisan non trouvé");
  }

  return serializeArtisanDetail(artisan);
};

// ================================================================================================
// CONTACT ARTISAN SERVICE
// Vérification de l'existance d'un artisan via son ID - retour simple
// ================================================================================================
export const contactArtisanService = async (id, payload) => {
  const artisan = await findArtisanByIdSimple(id);

  if (!artisan) {
    throw new ApiError(404, "ARTISAN_NOT_FOUND", "Artisan non trouvé");
  }

  // Nettoyage des données du formulaire envoyées
  const cleanPayload = sanitizeContactPayload(payload);
  // Validation des données du formulaire envoyées
  const validation = validateContactPayload(cleanPayload);

  if (!validation.isValid) {
    throw new ApiError (400, "VALIDATION_ERROR", "Données invalides.", validation.fields)
  }

  //Simulation d'envoi
  console.log("💌 Contact form submitted for artisan ID :");
  console.log({
    artisanId: artisan.id,
    artisanName: artisan.name,
    from: {
      name: cleanPayload.name,
      email: cleanPayload.email
    },
    object: cleanPayload.object,
    message: cleanPayload.message,
  });

  return {
    artisan,
    payload: cleanPayload,
  };
};
