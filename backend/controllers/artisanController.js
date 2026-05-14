/**
 * ================================================================================================
 * ARTISAN CONTROLLER
 * ================================================================================================
 * Rôle :
 * - Gérer les opérations liées aux artisans, telles que la récupération des artisans, la recherche,
 *   et la gestion des détails d'un artisan.
 * 
 * Fonctionnement :
 * - Fournir des fonctions pour récupérer les artisans en fonction de différents critères (ex: top
 *   artisans, par ID, par recherche).
 * - Utiliser les modèles de données pour interagir avec la base de données et retourner les résultats
 *   au format JSON.
 * 
 * Dépendances :
 * - backend/models/index.js pour accéder aux modèles Artisan, Specialty et Category.
 * - backend/app.js pour être utilisé dans les routes de l'API.
 * 
 * Fonctions définies :
 * - getArtisans : Récupérer tous les artisans avec possibilité de recherche et de filtrage.
 * - getTopArtisans : Récupérer les artisans mis en avant (top artisans).
 * - getArtisanById : Récupérer les détails d'un artisan spécifique par son ID.
 * - contactArtisan : Permettre aux utilisateurs de contacter un artisan via un formulaire de contact.
 * 
 * Utilisé par :
 * - backend/routes/artisans.js pour définir les routes liées aux artisans.
 * ================================================================================================
 */

import { Op, where } from "sequelize";
import {
    Artisan,
    Specialty,
    Category
} from "../models/index.js";
import {
    serializeArtisanDetail,
    serializeArtisanListItem,
    serializeTopArtisans
} from "../serializers/artisanSerializer.js";
import {
    successResponse,
    errorResponse
} from "../utils/response.js";

// ================================================================================================
// GET ARTISANS
// ================================================================================================

export const getArtisans = async (req, res) => {
    try {
        const { search, category } = req.query;

        const whereClause = {};
        const include = {
            model: Specialty,
            as: 'specialty',
            include: {
                model: Category,
                as: 'category'
            }
        };

        // Recherche texte
        if (search) {
            whereClause[Op.or] = [
                { name: { [Op.like]: `%${search}%` } },
                { city: { [Op.like]: `%${search}%` } },
                { '$specialty.name$': { [Op.like]: `%${search}%` } }
            ]
        };

        // Filtre par catégorie
        if (category) {
            const categoryExists = await Category.findByPk(category);
            if (!categoryExists) {
                return errorResponse(res, 'Catégorie inexistante.', 404, "CATEGORY_NOT_FOUND");
            }

            include.where = { id_category: category };
        };

        const artisans = await Artisan.findAll({
            where: whereClause,
            include,
            order: [[ 'rating', 'DESC' ]],
        });

        const serialized = artisans.map(serializeArtisanListItem);
        const message = serialized.length === 0
            ? 'Aucun artisan trouvé pour les critères de recherche spécifiés.'
            : 'Artisans récupérés avec succès.';

        return successResponse(
            res,
            serialized,
            message
        );

    } catch (error) {
        console.error('💥 Error fetching artisans :', error);
        return errorResponse(
            res,
            'Erreur serveur lors de la récupération des artisans.',
            500,
            "INTERNAL_ERROR"
        );
    }
};

// ================================================================================================
// GET TOP ARTISANS
// ================================================================================================
export const getTopArtisans = async (req, res) => {
    try {
        const artisans = await Artisan.findAll({
            where: { is_top: true },
            include: {
                    model: Specialty,
                    as: 'specialty',
                    include: {
                    model: Category,
                    as: 'category'
                },
            },
            order: [['rating', 'DESC']],
            limit: 3
        });

        return successResponse(
            res,
            artisans.map(serializeTopArtisans),
            'Top artisans récupérés avec succès.'
        );

    } catch (error) {
        console.error('💥 Error fetching top artisans :', error);
        return errorResponse(
            res,
            'Erreur serveur lors de la récupération des artisans.',
            500,
            "INTERNAL_ERROR"
        );
    }
};

// ================================================================================================
// GET ARTISAN BY ID
// ================================================================================================
export const getArtisanById = async (req, res) => {
    const { id } = req.params;

    try {
        const artisan = await Artisan.findByPk(id, {
            include: {
                model: Specialty,
                as: 'specialty',
                include: {
                    model: Category,
                    as: 'category'
                }
            }
        });

        if (!artisan) {
            return errorResponse(res, 'Artisan non trouvé.', 404, "ARTISAN_NOT_FOUND");
        }

        return successResponse(
            res,
            serializeArtisanDetail(artisan),
            'Artisan récupéré avec succès.'
        );

    } catch (error) {
        console.error('💥 Error fetching artisan by ID :', error);
        return errorResponse(
            res,
            'Erreur serveur lors de la récupération de l\'artisan.',
            500,
            "INTERNAL_ERROR"
        );
    }
};

// ================================================================================================
// CONTACT ARTISAN
// ================================================================================================
export const contactArtisan = async (req, res) => {

    const { id } = req.params;
    const { name, email, object, message } = req.body;

    const allowedFields = ['name', 'email', 'object', 'message'];
    const receivedFields = Object.keys(req.body);
    const invalidFields = receivedFields.filter(field => !allowedFields.includes(field));
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const fieldsError = {};

    const artisan = await Artisan.findByPk(id);

    try {
        if (!artisan) {
            return errorResponse(res, 'Artisan non trouvé.', 404, "ARTISAN_NOT_FOUND");
        }

        // Vérifie les champs non autorisés
        if (invalidFields.length > 0) {
            return errorResponse(
                res,
                `Champs invalides : ${invalidFields.join(', ')}. Seuls les champs suivants sont autorisés : ${allowedFields.join(', ')}.`,
                400,
                "VALIDATION_ERROR");
        }
        
        // Validation nom
        if (!name?.trim()) {
            fieldsError.name = "Le nom est requis.";
        } else if (name.trim().length <2) {
            fieldsError.name = "Le nom doit contenir au moins 2 caractères.";
        }
        
        // Validation email
        if (!email?.trim()) {
            fieldsError.email = "L'email est requis.";
        } else if (!emailRegex.test(email)) {
            fieldsError.email = "Format d'email invalide.";
        }

        // Validation objet
        if (!object?.trim()) {
            fieldsError.object = "L'objet est requis.";
        } else if (object.trim().length <3) {
            fieldsError.object = "L'objet doit contenir au moins 3 caractères";
        }

        // Validation message
        if (!message?.trim()) {
            fieldsError.message = "Le message est requis.";
        } else if (message.trim().length <10) {
            fieldsError.message = "Le message doit contenir au moins 10 caractères";
        }

        // Si erreur de validation
        if (Object.keys(fieldsError).length > 0) {
            return errorResponse(
                res,
                "Certains champs sont invalides.",
                400,
                "VALIDATION_ERROR",
                fieldsError
            );
        }

        // Simulation de l'envoi d'un email
        console.log('💌 Contact form submitted for artisan ID :');
        console.log({
            artisanId: artisan.id,
            artisanName: artisan.name,
            from: { name, email },
            object,
            message
        });

        return successResponse(
            res,
            { name, email, object, message },
            `Votre message a été envoyé à ${artisan.name} avec succès !`
        );

    } catch (error) {
        console.error('💥 Error contacting artisan :', error);
        return errorResponse(
            res,
            'Erreur serveur lors de l\'envoie du message.',
            500,
            "INTERNAL_ERROR");
    }
};