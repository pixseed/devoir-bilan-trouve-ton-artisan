/**
 * ================================================================================================
 * SERVER ENTRY POINT
 * ================================================================================================
 * Ce fichier est le point d'entrée principal du serveur Express. Il importe l'application Express
 * configurée dans app.js, établit la connexion à la base de données en utilisant Sequelize, et
 * démarre le serveur sur le port spécifié.
 * 
 * Rôle :
 * - Démarrer le serveur Express.
 * - Établir la connexion à la base de données MySQL au démarrage du serveur.
 * - En mode developpement, vérifier que les données ont été importées correctement en affichant
 *   les statistiques de la base de données.
 * 
 * Fonctionnement :
 * 1. Importer l'application Express depuis app.js.
 * 2. Démarrer le serveur sur le port défini dans les variables d'environnement ou par défaut à 3000.
 * 3. Établir la connexion à la base de données en utilisant Sequelize
 * 4. Afficher un message de succès ou d'erreur.
 * 
 * (Optionnel)
 * En mode développement, effectuer des vérifications supplémentaires :
 *      1. Afficher les statistiques de la base de données pour vérifier que les données
 *         ont été importées correctement.
 *      2. Effectuer un test de relations entre les tables pour vérifier que les associations
 *         entre les modèles sont correctement configurées.
 * 
 * Dépendances :
 * - app.js (configuration Express)
 * - config/database.js (connexion DB)
 * - utils/dbStats.js (affichage des statistiques de la base de données)
 * - utils/dbTest.js (test des relations entre les tables)
 * ================================================================================================
 */

import app from './app.js'; // Import de l'application Express configurée
import sequelize from './config/database.js'; // Import de la configuration de la DB Sequelize
import { logDatabaseStats } from './utils/dbStats.js';
import { testDatabaseRelations } from './utils/dbTest.js';

const PORT = process.env.PORT || 3000;

try {
    // Test de connexion à la base de données
    await sequelize.authenticate();
    console.log('✅ Database connection has been established successfully.');

    // Afficher les statistiques de la base de données en mode développement
    if (process.env.NODE_ENV === 'development') {
        await logDatabaseStats(); // Optionnel : Afficher les statistiques de la base de données
        /* await testDatabaseRelations(); // Optionnel : Test des relations entre les tables */
    }

} catch (error) {
    console.error('❌ Database error :', error);
    process.exit(1); // Quitter le processus en cas d'erreur de connexion
}

// Démarrage serveur
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});