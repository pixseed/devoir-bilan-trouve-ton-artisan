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
      throw new Error("CATEGORY_NOT_FOUND");
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
    throw new Error("ARTISAN_NOT_FOUND");
  }

  return serializeArtisanDetail(artisan);
};

// ================================================================================================
// CONTACT ARTISAN SERVICE
// Vérification de l'existance d'un artisan via son ID - retour simple
// ================================================================================================
export const contactArtisanService = async (id, payload) => {
  const artisan = await findArtisanByIdSimple(id);

  // Vérification existence artisan
  if (!artisan) {
    throw new Error("ARTISAN_NOT_FOUND");
  }

  // Validation formulaire
  const validation = validateContactPayload(payload);

  if (!validation.isValid) {
    return {
      hasValidationError: true,
      fields: validation.fields,
    };
  }

  //Simulation d'envoi
  console.log("💌 Contact form submitted for artisan ID :");
  console.log({
    artisanId: artisan.id,
    artisanName: artisan.name,
    from: {
      name: payload.name,
      email: payload.email
    },
    object: payload.object,
    message: payload.message,
  });

  return {
    hasValidationError: false,
    artisan,
    payload,
  };
};
