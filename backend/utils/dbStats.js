/**
 * ================================================================================================
 * STATS SYNC DATA - UTILITY
 * ================================================================================================
 * Ce fichier contient une fonction utilitaire pour récupérer et afficher les statistiques
 * de la base de données.
 * 
 * Cette fonction est utilisée dans server.js après la synchronisation de la base de données
 * pour afficher le nombre d'entrées dans les tables Category, Specialty et Artisan,
 * ce qui permet de vérifier que les données ont été importées correctement.
 * 
 * Rôle :
 * - Récupérer le nombre d'entrées dans les tables Category, Specialty et Artisan.
 * - Afficher ces statistiques dans la console.
 * 
 * Utilisé par :
 * - backend/server.js pour afficher les statistiques de la base de données après la synchronisation.
 * ===============================================================================================
 */

import { Category, Specialty, Artisan } from "../models/index.js";

export const logDatabaseStats = async () => {
    try {
        const categoryCount = await Category.count();
        const specialtyCount = await Specialty.count();
        const artisanCount = await Artisan.count();

        console.log(`📥 Database Stats : ${categoryCount} categories, ${specialtyCount} specialties, ${artisanCount} artisans`);
        
    } catch (error) {
        console.error('❌ Error fetching DB stats :', error);
    }
};