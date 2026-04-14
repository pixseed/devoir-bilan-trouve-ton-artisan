/**
 * ================================================================================================
 * SPECIALTY MODEL
 * ================================================================================================
 * Ce fichier définit le modèle Sequelize pour la table "specialties" de la base de données.
 * 
 * Le modèle Specialty représente les spécialités d'artisanat référencées dans l'application,
 * avec leur catégorie.
 * 
 * Rôle :
 * - Définir la structure de la table "specialties" dans la base de données.
 * - Spécifier les types de données et les contraintes pour chaque champ.
 * - Permettre l'interaction avec la table "specialties" via Sequelize (CRUD, relations, etc.).
 * 
 * Champs du modèle :
 * - id : Identifiant unique de la spécialité (clé primaire, auto-incrémentée).
 * - name : Nom de la spécialité (string, non null).
 * - id_category : Clé étrangère vers la catégorie de la spécialité (integer, non null).
 * 
 * Utilisé par :
 * - backend/models/index.js pour définir les relations entre les modèles.
 * ================================================================================================
 */

import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Specialty = sequelize.define("Specialty", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  id_category: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: "specialties",
  timestamps: false
});

export default Specialty;