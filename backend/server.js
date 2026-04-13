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
 * 
 * Fonctionnement :
 * 1. Importer l'application Express depuis app.js.
 * 2. Démarrer le serveur sur le port défini dans les variables d'environnement ou par défaut à 3000.
 * 3. Établir la connexion à la base de données en utilisant Sequelize
 * 4. Afficher un message de succès ou d'erreur.
 * 
 * Dépendances :
 * - app.js (configuration Express)
 * - config/database.js (connexion DB)
 * ================================================================================================
 */

import 'dotenv/config'; // node_modules/dotenv/config.js pour charger les variables d'environnement depuis le fichier .env

import app from './app.js'; // Import de l'application Express configurée
import sequelize from './config/database.js'; // Import de la configuration de la DB Sequelize

const PORT = process.env.PORT || 3000;

// Connexion DB
sequelize.authenticate()
  .then(() => {
    console.log('✅ Database connection established successfully.');
  })
  .catch((error) => {
    console.error('❌ Unable to connect to the database:', error);
  });

// Démarrage serveur
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
