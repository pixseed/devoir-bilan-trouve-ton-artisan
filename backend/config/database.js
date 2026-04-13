/**
 * ==================================================================================================
 * DATABASE CONFIGURATION - SEQUELIZE
 * ==================================================================================================
 * Ce fichier configure la connexion à la base de données MySQL en utilisant Sequelize.
 * 
 * Il utilise les variables d'environnement définies dans le fichier .env
 * pour sécuriser les informations sensibles.
 * 
 * Il exporte une instance de Sequelize qui peut être utilisée dans d'autres parties de l'application
 * pour interagir avec la base de données.
 * 
 * Rôle :
 * - Configurer et établir la connexion à la base de données MySQL.
 * 
 * Variabes d'environnement utilisées :
 * - DB_NAME : Le nom de la base de données.
 * - DB_USER : Le nom d'utilisateur pour se connecter à la base de données.
 * - DB_PASSWORD : Le mot de passe pour se connecter à la base de données.
 * - DB_HOST : L'hôte de la base de données (généralement localhost).
 * - DB_DIALECT : Le dialecte de la base de données (dans ce cas, mysql).
 * 
 * Utilisé par :
 * - backend/server.js pour établir la connexion à la base de données au démarrage du serveur.
 * - models/ pour définir les modèles de données et interagir avec la base de données.
 * ==================================================================================================
 */

import { Sequelize } from 'sequelize';

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

export default sequelize;