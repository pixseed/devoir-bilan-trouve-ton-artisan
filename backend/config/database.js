/**
 * ==================================================================================================
 * DATABASE CONFIGURATION - SEQUELIZE
 * ==================================================================================================
 * Rôle :
 * - Configurer et établir la connexion à la base de données MySQL.
 * - Centraliser les paramètres de connexion issus des variables d'environnements.
 * - Exporter une instance unique réutilisable dans toutes l'application.
 * 
 * Fonctionnement :
 * - Charge les variables d'environnement depuis le fichier .env.
 * - Initialise Sequelize avec la configuration de connexion.
 * - Désactive les logs SQL pour éviter le bruit en console en environnement de développement.
 * 
 * Variabes d'environnement utilisées :
 * - DB_NAME : Le nom de la base de données.
 * - DB_USER : Le nom d'utilisateur pour se connecter à la base de données.
 * - DB_PASSWORD : Le mot de passe pour se connecter à la base de données.
 * - DB_HOST : L'hôte de la base de données.
 * - DB_DIALECT : Le dialecte de la base de données (dans ce cas, mysql).
 * 
 * Utilisé par :
 * - backend/server.js pour établir la connexion à la base de données au démarrage du serveur.
 * - models/ pour définir les modèles de données et interagir avec la base de données.
 * ==================================================================================================
 */

import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

// ===========================================================================================
// ENVIRONMENT CONFIGURATION
// Chargement des variables d'environnement.
// ===========================================================================================
dotenv.config({ path: './backend/.env' });

// ===========================================================================================
// SEQUELIZE INSTANCE
// Création de l'instance unique Sequelize partagée dans toute l'application
// ===========================================================================================
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false // Désactive les logs SQL dans la console
  }
);

// ===========================================================================================
export default sequelize;