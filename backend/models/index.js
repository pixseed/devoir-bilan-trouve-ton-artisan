/**
 * ================================================================================================
 * MODEL ASSOCIATIONS
 * ================================================================================================
 * Rôle :
 * - Définir les associations Sequelize entre les modèles métiers.
 * - Permettre le chargement relationnel des données via l'ORM.
 * - Centraliser la configuration des relations entre les ressources.
 * 
 * Relations :
 * - Category   1 → N   Specialty
 * - Specialty  N → 1   Category
 * - Specialty  1 → N   Artisan
 * - Artisan    N → 1   Specialty
 * │
 * ├─ Une catégorie peut avoir plusieurs spécialités (hasMany)
 * │  et une spécialité appartient à une catégorie (belongsTo).
 * └─ Une spécialité peut avoir plusieurs artisans (hasMany)
 *    et un artisan appartient à une spécialité (belongsTo).
 * 
 * Notes :
 * - Les alias définis ici sont utilisés dans les requêtes Sequelize avec include.
 * - Les contraintes de suppression / mise à jour sont propagées via cascade.
 * ================================================================================================
 */

import Category from "./category.js";
import Specialty from "./specialty.js";
import Artisan from "./artisan.js";

// ===========================================================================================
// ASSOCIATIONS / RELATIONS
// ===========================================================================================

// Category 1 → N Specialty
Category.hasMany(Specialty, {
    foreignKey: "id_category",
    as: "specialties",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

// Specialty N → 1 Category
Specialty.belongsTo(Category, {
    foreignKey: "id_category",
    as: "category"
});

// Specialty 1 → N Artisan
Specialty.hasMany(Artisan, {
    foreignKey: "id_specialty",
    as: "artisans",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

// Artisan N → 1 Specialty
Artisan.belongsTo(Specialty, {
    foreignKey: "id_specialty",
    as: "specialty"
});

export { Category, Specialty, Artisan };