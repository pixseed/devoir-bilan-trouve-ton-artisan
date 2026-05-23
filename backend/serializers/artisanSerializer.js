/**
 * ================================================================================================
 * ARTISAN SERIALIZER
 * ================================================================================================
 * Rôle :
 * - Transformer les modèles Sequelize Artisan en objet JSON exposables par l'API.
 * - Contrôler les données retournées au client.
 * - Centraliser la logique de mapping pour éviter la duplication dans les contrôleurs.
 * 
 * Serializers :
 * - serializeTopArtisans()
 * - serializeArtisanListItem()
 * - serializeArtisanDetail()
 * ================================================================================================
 */

// ================================================================================================
// HELPER FUNCTIONS
// ================================================================================================
// Fonction pour extraire le nom de la catégorie à partir d'un artisan
const getCategoryName = (artisan) => {
    return artisan.specialty?.category?.name ?? null;
};

// Fonction pour extraire le nom de la spécialité à partir d'un artisan
const getSpecialtyName = (artisan) => {
    return artisan.specialty?.name ?? null;
};

// Fonction pour extraire l'id de la categorie à partir d'un artisan
const getCategoryId = (artisan) => {
    return artisan.specialty?.category?.id ?? null;
};

// ================================================================================================
// TOP ARTISAN SERIALIZER
// ================================================================================================
export const serializeTopArtisan = (artisan) => ({
    id: artisan.id,
    name: artisan.name,
    specialty: getSpecialtyName(artisan),
    rating: artisan.rating,
    city: artisan.city,
    image: artisan.image,
});

// ================================================================================================
// ARTISAN LIST ITEM SERIALIZER
// ================================================================================================
export const serializeArtisanListItem = (artisan) => ({
    id: artisan.id,
    name: artisan.name,
    specialty: getSpecialtyName(artisan),
    rating: artisan.rating,
    city: artisan.city,
    categoryId: getCategoryId(artisan),
    category: getCategoryName(artisan),
    image: artisan.image,
});

// ================================================================================================
// ARTISAN DETAIL SERIALIZER
// ================================================================================================
export const serializeArtisanDetail = (artisan) => ({
    id: artisan.id,
    name: artisan.name,
    specialty: getSpecialtyName(artisan),
    categoryId: getCategoryId(artisan),
    rating: artisan.rating,
    city: artisan.city,
    about: artisan.about,
    email: artisan.email,
    website: artisan.website,
    image: artisan.image,
});