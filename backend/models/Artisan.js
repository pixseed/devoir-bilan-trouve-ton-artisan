/**
 * ================================================================================================
 * ARTISAN MODEL
 * ================================================================================================
 * Ce fichier définit le modèle Sequelize pour la table "artisans" de la base de données.
 * 
 * Le modèle Artisan représente les artisans référencés dans l'application,
 * avec leurs caractéristiques et leur spécialité.
 * 
 * Rôle :
 * - Définir la structure de la table "artisans" dans la base de données.
 * - Spécifier les types de données et les contraintes pour chaque champ.
 * - Permettre l'interaction avec la table "artisans" via Sequelize (CRUD, relations, etc.).
 * 
 * Champs du modèle :
 * - id : Identifiant unique de l'artisan (clé primaire, auto-incrémentée).
 * - name : Nom de l'artisan (string, non null).
 * - rating : Note de l'artisan (decimal, non null, entre 0 et 5).
 * - city : Ville de l'artisan (string, non null).
 * - about : Description de l'artisan (text, non null).
 * - email : Adresse email de l'artisan (string, non null, unique).
 * - website : Site web de l'artisan (string, nullable).
 * - is_top : Indique si l'artisan figure dans le top artisans du mois (boolean, non null, default false).
 * - id_specialty : Clé étrangère vers la spécialité de l'artisan (integer, non null).
 * 
 * Utilisé par :
 * - backend/models/index.js pour définir les relations entre les modèles.
 * ================================================================================================
 */

import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Artisan = sequelize.define("Artisan", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  rating: {
    type: DataTypes.DECIMAL(2, 1),
    allowNull: false,
    check: { min: 0, max: 5 }
  },
  city: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  about: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(150),
    allowNull: false,
    unique: true
  },
  website: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  is_top: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  id_specialty: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
      tableName: "artisans",
      timestamps: false,
});

export default Artisan;