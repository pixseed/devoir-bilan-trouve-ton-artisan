/**
 * ================================================================================================
 * DATABASE RELATIONS TEST UTILITY
 * ================================================================================================
 * Rôle :
 * - Vérifier que les associations Sequelize entre les modèles métier sont correctement configurées.
 * - Tester le chargement des relations imbriquées entre les tables Artisan, Specialty et Category.
 * - Afficher les résultats de la requête dans la console pour vérification.
 * 
 * Utilisation :
 * - Outil de debug manuel au démarrage du serveur.
 * - Utilisé uniquement en environnement de développement.
 * 
 * Dépendances :
 * - models/index.js : export centralisé des modèles Sequelize.
 * ================================================================================================
 */

import { Artisan, Category, Specialty } from '../models/index.js';

// ===========================================================================================
// ASSOCIATION TEST
// Vérification du chargement des relations Sequelize imbriquées
// ===========================================================================================
export const testDatabaseRelations = async () => {
    try {
        // Chargement d'un artisan avec ses relations :
        // Artisan → Specialty → Category
        const artisan = await Artisan.findOne({
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
        // JSON transformé en string sans filtre :
        // stringify(value, replacer, space)
        console.log(JSON.stringify(artisan, null, 2));
        console.log(`===============================`);
        
    } catch (error) {
        console.error('Error testing DB relations :', error);
    }
};