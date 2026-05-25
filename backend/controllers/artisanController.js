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

import { successResponse } from "../utils/response.js";

// ================================================================================================
// GET ARTISANS
// ================================================================================================
export const getArtisans = async (req, res, next) => {
  try {
    const result = await getArtisansService(req.query);
    return successResponse(res, result.data, result.message);

  } catch (error) {
    next(error);
  }
};

// ================================================================================================
// GET TOP ARTISANS
// ================================================================================================
export const getTopArtisans = async (_req, res, next) => {
  try {
    const artisans = await getTopArtisansService();
    return successResponse(
      res,
      artisans,
      "Top artisans récupérés avec succès.",
    );

  } catch (error) {
    next(error);
  }
};

// ================================================================================================
// GET ARTISAN BY ID
// ================================================================================================
export const getArtisanById = async (req, res, next) => {
  try {
    const artisan = await getArtisanByIdService(req.params.id);

    return successResponse(
      res,
      artisan,
      "Artisan récupéré avec succès.",
    );

  } catch (error) {
    next(error);
  }
};

// ================================================================================================
// CONTACT ARTISAN
// ================================================================================================
export const contactArtisan = async (req, res, next) => {
  try {
    const result = await contactArtisanService(
      req.params.id,
      req.body,
    );

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
    next(error);
  }
};