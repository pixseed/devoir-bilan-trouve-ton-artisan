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
 * - getTopArtisans : Récupérer les artisans mis en avant (top artisans).
 * - getArtisanById : Récupérer les détails d'un artisan spécifique par son ID.
 * - searchArtisans : Rechercher des artisans en fonction de critères de recherche (nom, ville, spécialité).
 * 
 * Utilisé par :
 * - backend/routes/artisans.js pour définir les routes liées aux artisans.
 * ================================================================================================
 */

import { Op } from "sequelize";
import { Artisan, Specialty, Category } from "../models/index.js";

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

        return res.status(200).json(artisans);

    } catch (error) {
        console.error('💥 Error fetching top artisans :', error);
        return res.status(500).json({ message: 'Erreur serveur lors de la récupération des artisans.' });
    }
};

// ================================================================================================
// GET ARTISANS BY ID
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
            return res.status(404).json({ message: 'Artisan non trouvé.' });
        }

        return res.status(200).json(artisan);

    } catch (error) {
        console.error('💥 Error fetching artisan by ID :', error);
        return res.status(500).json({ message: 'Erreur serveur lors de la récupération de l\'artisan.' });
    }
};

// ================================================================================================
// SEARCH ARTISANS
// By name, city, specialty
// ================================================================================================
export const searchArtisans = async (req, res) => {
    try {
        const { q, category } = req.query;

        if (!q) {
            return res.status(400).json({ message: 'Le paramètre de recherche "q" est requis.' });
        }

        // Construction de la clause WHERE pour la recherche (conditions)
        const whereClause = {
            [Op.or]: [
                { name: { [Op.like]: `%${q}%` } },
                { city: { [Op.like]: `%${q}%` } },
                { '$specialty.name$': { [Op.like]: `%${q}%` } }
            ]
        };

        // Si un filtre de catégorie est fourni, ajouter une condition pour filtrer par catégorie
        if (category) {
            whereClause[Op.and] = [{ '$specialty.category_id$': category }];
        }

        const artisans = await Artisan.findAll({
            where: whereClause,
            include: {
                model: Specialty,
                as: 'specialty',
                include: {
                    model: Category,
                    as: 'category'
                },
            },
            order: [['rating', 'DESC']],
        });

        return res.status(200).json(artisans);

    } catch (error) {
        console.error('💥 Error searching artisans :', error);
        return res.status(500).json({ message: 'Erreur serveur lors de la recherche des artisans.' });
    }
};

// ================================================================================================
// CONTACT ARTISAN
// ================================================================================================
export const contactArtisan = async (req, res) => {

    const { id } = req.params;
    const { name, email, object, message } = req.body;

    try {
        if (!name || !email || !object || !message) {
            return res.status(400).json({
                message: 'Tous les champs (name, email, object, message) sont requis.'
            });
        }

        const artisan = await Artisan.findByPk(id);

        if (!artisan) {
            return res.status(404).json({ message: 'Artisan non trouvé.' });
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

        return res.status(200).json({ message: `Votre message a été envoyé à ${artisan.name} avec succès !` });

    } catch (error) {
        console.error('💥 Error contacting artisan :', error);
        return res.status(500).json({ message: 'Erreur serveur lors de l\'envoie du message.' });
    }
};