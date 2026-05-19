/**
 * ================================================================================================
 * SERVER ENTRY POINT
 * ================================================================================================
 * Rôle :
 * - Servir de point d'entrée principal de l'application backend.
 * - Vérifier la connexion à la BDD avant de démarrer le serveur Express.
 * - Exécuter des contrôles complémentaires en environnement de développement.
 * 
 * Fonctionnement :
 * 1. Importer l'application Express configurée (app.js).
 * 2. Vérifier l'accès à la base de données via Sequelize.
 * 3. En developpement, exécuter des outils de diagnostic (statistiques/tests).
 * 4. Démarrer le serveur sur le port défini dans les variables d'environnement.
 * 
 * Comportement spécifique au développement :
 * - Affichage des statistiques de la BDD.
 * - Vérification optionnelle des relations entre modèles.
 * 
 * Dépendances :
 * - app.js : configuration principale d'Express.
 * - config/database.js : instance Sequelize configurée.
 * - utils/dbStats.js : outils de diagnostic DB
 * - utils/dbTest.js : tests de relations entre modèles.
 * ================================================================================================
 */

import app from './app.js';
import sequelize from './config/database.js';
import { logDatabaseStats } from './utils/dbStats.js';
import { testDatabaseRelations } from './utils/dbTest.js';

// ===========================================================================================
// SERVER CONFIGURATION
// Port du serveur
// ===========================================================================================
const PORT = process.env.PORT || 3000;

// ===========================================================================================
// APPLICATION BOOTSTRAP
// Vérification de la DB avant démarrage du serveur
// ===========================================================================================
try {
    // Test de connexion à la base de données
    await sequelize.authenticate();
    console.log('✅ Database connection has been established successfully.');

    // Contrôles additionnels réservés à l'environnement de développement
    if (process.env.NODE_ENV === 'development') {
        // Commenter/Décommenter si besoin ou non de contrôler les données de la BDD
        await logDatabaseStats();
        // Commenter/Décommenter si besoin ou non de tester les associations Sequelize
        await testDatabaseRelations();
    }

} catch (error) {
    console.error('❌ Database error :', error);
    process.exit(1); // Quitter le processus en cas d'erreur de connexion
}

// Démarrage serveur
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});