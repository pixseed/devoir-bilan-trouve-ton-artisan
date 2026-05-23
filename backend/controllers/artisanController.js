/**
 * ================================================================================================
 * ARTISAN CONTROLLER
 * ================================================================================================
 * Rôle :
 * - Gérer les requêtes HTTP liées aux artisans.
 * - Déléguer la logique métier au service dédié.
 *
 * Endpoints gérés :
 * - GET /artisans
 * - GET /artisans/top
 * - GET /artisans?category=
 * - GET /artisans?search=
 * - GET /artisans?category=&search=
 * - GET /artisans/:id
 * - POST /artisans/:id/contact
 *
 * Fonctions définies :
 * - getArtisans()    : Récupérer tous les artisans avec possibilité de recherche et de filtrage.
 * - getTopArtisans() : Récupérer les artisans mis en avant (top artisans).
 * - getArtisanById() : Récupérer les détails d'un artisan spécifique par son ID.
 * - contactArtisan() : Permettre aux utilisateurs de contacter un artisan via un formulaire de contact.
 * 
 * Dépendances :
 * - services/artisanService.js
 * - utils/response.js
 * ================================================================================================
 */

import {
  getArtisansService,
  getTopArtisansService,
  getArtisanByIdService,
  contactArtisanService,
} from "../services/artisanService.js";

import { successResponse, errorResponse } from "../utils/response.js";

// ================================================================================================
// ERROR MAPPING
// Traduction des erreurs métier vers réponse HTTP
// ================================================================================================
const handleServiceError = (res, error, fallbackMessage) => {
  if (error.message === "CATEGORY_NOT_FOUND") {
    return errorResponse(
      res,
      "Catégorie inexistante.",
      404,
      "CATEGORY_NOT_FOUND",
    );
  }

  if (error.message === "ARTISAN_NOT_FOUND") {
    return errorResponse(res, "Artisan non trouvé.", 404, "ARTISAN_NOT_FOUND");
  }

  console.error("💥 Service error :", error);
  return errorResponse(res, fallbackMessage, 500, "INTERNAL_ERROR");
};

// ================================================================================================
// GET ARTISANS
// ================================================================================================
export const getArtisans = async (req, res) => {
  try {
    const result = await getArtisansService(req.query);
    return successResponse(res, result.data, result.message);

  } catch (error) {
    return handleServiceError(
      res,
      error,
      "Erreur serveur lors de la récupération des artisans.",
    );
  }
};

// ================================================================================================
// GET TOP ARTISANS
// ================================================================================================
export const getTopArtisans = async (_req, res) => {
  try {
    const artisans = await getTopArtisansService();
    return successResponse(
      res,
      artisans,
      "Top artisans récupérés avec succès.",
    );

  } catch (error) {
    return handleServiceError(
      res,
      error,
      "Erreur serveur lors de la récupération des artisans.",
    );
  }
};

// ================================================================================================
// GET ARTISAN BY ID
// ================================================================================================
export const getArtisanById = async (req, res) => {
  try {
    const artisan = await getArtisanByIdService(req.params.id);

    return successResponse(
      res,
      artisan,
      "Artisan récupéré avec succès.",
    );

  } catch (error) {
    return handleServiceError(
      res,
      error,
      "Erreur serveur lors de la récupération de l'artisan.",
    );
  }
};

// ================================================================================================
// CONTACT ARTISAN
// ================================================================================================
export const contactArtisan = async (req, res) => {
  try {
    const result = await contactArtisanService(
      req.params.id,
      req.body,
    );

    // Validation formulaire echouée
    if (result.hasValidationError) {
      return errorResponse(
        res,
        "Certains champs sont invalides.",
        400,
        "VALIDATION_ERROR",
        result.fields,
      );
    }

    return successResponse(
      res,
      {
        name: result.payload.name,
        email: result.payload.email,
        object: result.payload.object,
        message: result.payload.message,
      },
      `Votre message a été envoyé à ${result.artisan.name} avec succès !`,
    );
  } catch (error) {
    return handleServiceError(
      res,
      error,
      "Erreur serveur lors de l'envoi du message."
    );
  }
};