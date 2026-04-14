/**
 * ================================================================================================
 * CATEGORY MODEL
 * ================================================================================================
 * Ce fichier définit le modèle Sequelize pour la table "categories" de la base de données.
 * 
 * Le modèle Category représente les catégories d'artisanat référencées dans l'application,
 * avec leurs caractéristiques.
 * 
 * Rôle :
 * - Définir la structure de la table "categories" dans la base de données.
 * - Spécifier les types de données et les contraintes pour chaque champ.
 * - Permettre l'interaction avec la table "categories" via Sequelize (CRUD, relations, etc.).
 * 
 * Champs du modèle :
 * - id : Identifiant unique de la catégorie (clé primaire, auto-incrémentée).
 * - name : Nom de la catégorie (string, non null).
 * 
 * Utilisé par :
 * - backend/models/index.js pour définir les relations entre les modèles.
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