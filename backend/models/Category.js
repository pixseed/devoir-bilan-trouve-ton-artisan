/**
 * ================================================================================================
 * CATEGORY MODEL
 * ================================================================================================
 * Rôle :
 * - Définir le modèle Sequelize correspondant à la table "categories".
 * - Spécifier la structure et les contraintes de données.
 * - Fournir une interface ORM pour interagir avec la ressource Category.
 * 
 * Champs du modèle :
 * - id             : Identifiant unique.
 * - name           : Nom de la catégorie.
 * ================================================================================================
 */

import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Category = sequelize.define("Category", {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  }

}, {
  tableName: "categories",
  timestamps: false
});

export default Category;