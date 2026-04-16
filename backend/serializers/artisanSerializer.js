/**
 * ================================================================================================
 * ARTISAN SERIALIZER
 * ================================================================================================
 * Ce fichier contient des fonctions de sérialisation pour transformer les données brutes des artisans
 * en formats adaptés à l'affichage dans l'application.
 * Rôle :
 * - Fournir des fonctions de transformation pour les données des artisans, afin de les rendre
 *   plus faciles à utiliser dans les composants frontend.
 * - Centraliser la logique de sérialisation pour éviter la duplication de code dans les différentes
 *   parties de l'application.
 * 
 * Fonctions définies :
 * - serializeTopArtisans : Sérialiser les données des artisans mis en avant pour l'affichage
 *   dans le top artisans.
 * - serializeArtisanListItem : Sérialiser les données des artisans pour l'affichage
 *   dans les listes d'artisans.
 * - serializeArtisanDetail : Sérialiser les données d'un artisan pour l'affichage de ses détails.
 * 
 * Utilisé par :
 * - backend/controllers/artisanController.js pour formater les données avant de les envoyer au frontend.
 * ================================================================================================
 */

// ================================================================================================
// HELPER FUNCTIONS
// ================================================================================================
// Fonction pour extraire le nom de la catégorie à partir d'un artisan
const getCategoryName = (artisan) => {
    return artisan.specialty?.category?.name ?? null;
}

// Fonction pour extraire le nom de la spécialité à partir d'un artisan
const getSpecialtyName = (artisan) => {
    return artisan.specialty?.name ?? null;
}

// ================================================================================================
// TOP ARTISANS SERIALIZER
// ================================================================================================
export const serializeTopArtisans = (artisan) => ({
    name: artisan.name,
    specialty: getSpecialtyName(artisan),
    rating: artisan.rating,
    city: artisan.city,
});

// ================================================================================================
// ARTISAN LIST ITEM SERIALIZER
// ================================================================================================
export const serializeArtisanListItem = (artisan) => ({
    name: artisan.name,
    specialty: getSpecialtyName(artisan),
    rating: artisan.rating,
    city: artisan.city,
    category: getCategoryName(artisan),
});

// ================================================================================================
// ARTISAN DETAIL SERIALIZER
// ================================================================================================
export const serializeArtisanDetail = (artisan) => ({
    name: artisan.name,
    specialty: getSpecialtyName(artisan),
    rating: artisan.rating,
    city: artisan.city,
    about: artisan.about,
    email: artisan.email,
    website: artisan.website,
});