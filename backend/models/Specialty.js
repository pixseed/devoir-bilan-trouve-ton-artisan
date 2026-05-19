/**
 * ================================================================================================
 * SPECIALTY MODEL
 * ================================================================================================
 * Rôle :
 * - Définir le modèle Sequelize correspondant à la table "specialties".
 * - Spécifier la structure et les contraintes de données.
 * - Fournir une interface ORM pour interagir avec la ressource Specialty.
 * 
 * Champs du modèle :
 * - id             : Identifiant unique.
 * - name           : Nom de la spécialité.
 * - id_category    : Clé étrangère vers la catégorie de la spécialité.
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
    allowNull: false,
    references: { // Clé étrangère vers categories.id
      model: "categories",
      key: "id",
    }
  }

}, {
  tableName: "specialties",
  timestamps: false
});

export default Specialty;