/**
 * ================================================================================================
 * TEST DATABASE RELATIONS - UTILITY
 * ================================================================================================
 * Ce fichier contient une fonction pour tester les relations entre les tables de la base de données.
 * 
 * Cette fonction est utilisée dans server.js en mode développement pour vérifier que les associations
 * entre les modèles sont correctement configurées.
 * 
 * Elle effectue une requête pour récupérer un artisan avec sa spécialité et sa catégorie associées,
 * puis affiche les résultats dans la console.
 * 
 * Rôle :
 * - Tester les relations entre les tables Artisan, Specialty et Category.
 * - Afficher les résultats de la requête dans la console pour vérification.
 * 
 * Utilisé par :
 * - backend/server.js pour tester les relations entre les tables en mode développement.
 * ================================================================================================
 */

import { Artisan, Category, Specialty } from '../models/index.js';

export const testDatabaseRelations = async () => {
    try {
        const artisans = await Artisan.findOne({
            include: {
                model: Specialty,
                as: "specialty",
                include: {
                    model: Category,
                    as: "category"
                }
            }
        });

        console.log(`===============================`);
        console.log(`🧪 DB Relations Test :`);
        console.log(`-------------------------------`);
        console.log(JSON.stringify(artisans, null, 2));
        console.log(`===============================`);
        
    } catch (error) {
        console.error('Error testing DB relations :', error);
    }
};