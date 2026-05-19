/**
 * ================================================================================================
 * DATABASE STATS UTILITY
 * ================================================================================================
 * Rôle :
 * - Fournir un diagnostic rapide de l'état du dataset en base de données.
 * - Récupérer le nombre d'entrées dans les tables Category, Specialty et Artisan.
 * - Afficher ces statistiques dans la console.
 * 
 * Utilisation :
 * - principalement appelé au demarrage du serveur d'environnement de développement.
 * - permet de vérifier rapidement que le dataset initial est disponible.
 * 
 * Dépendances :
 * - models/index.js : export centralisé des modèles Sequelize.
 * ===============================================================================================
 */

import { Category, Specialty, Artisan } from "../models/index.js";

// ===========================================================================================
// DATABASE DIAGNOSTIC
// Lecture rapide des volumes de données présents en base
// ===========================================================================================
export const logDatabaseStats = async () => {
    try {
        // count() génère une requête SQL COUNT(*) sans charger toutes les lignes en mémoire
        const categoryCount = await Category.count();
        const specialtyCount = await Specialty.count();
        const artisanCount = await Artisan.count();

        console.log(`📥 Database Stats : ${categoryCount} categories, ${specialtyCount} specialties, ${artisanCount} artisans`);
        
    } catch (error) {
        console.error('❌ Error fetching DB stats :', error);
    }
};