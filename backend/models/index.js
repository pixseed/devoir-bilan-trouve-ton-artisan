/**
 * ================================================================================================
 * RELATIONS BETWEEN MODELS
 * ================================================================================================
 * Ce fichier définit les relations entre les modèles de données utilisés dans l'application.
 * 
 * Il importe les modèles Category, Specialty et Artisan, puis établit les associations entre eux
 * en utilisant les méthodes de Sequelize (hasMany, belongsTo).
 * 
 * Rôle :
 * - Définir les relations entre les modèles de données pour permettre des requêtes complexes
 *   et des opérations de jointure.
 * - Faciliter l'interaction avec la base de données en utilisant les associations définies.
 * 
 * Relations définies :
 * - Category → Specialty : Une catégorie peut avoir plusieurs spécialités (hasMany), et une
 *   spécialité appartient à une catégorie (belongsTo).
 * - Specialty → Artisan : Une spécialité peut avoir plusieurs artisans (hasMany), et un artisan
 *   appartient à une spécialité (belongsTo).
 * 
 * Utilisé par :
 * - backend/utils/dbTest.js pour tester les relations entre les tables.
 * - backend/utils/dbStats.js pour afficher les statistiques de la base de données en fonction
 *   des relations.
 * ================================================================================================
 */

import Category from "./category.js";
import Specialty from "./specialty.js";
import Artisan from "./artisan.js";

// Relations

// Category → Specialty
Category.hasMany(Specialty, {
    foreignKey: "id_category",
    as: "specialties",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Specialty.belongsTo(Category, {
    foreignKey: "id_category",
    as: "category"
});

// Specialty → Artisan
Specialty.hasMany(Artisan, {
    foreignKey: "id_specialty",
    as: "artisans",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Artisan.belongsTo(Specialty, {
    foreignKey: "id_specialty",
    as: "specialty"
});

export { Category, Specialty, Artisan };