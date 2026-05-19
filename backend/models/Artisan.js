/**
 * ================================================================================================
 * ARTISAN MODEL
 * ================================================================================================
 * Rôle :
 * - Définir le modèle Sequelize correspondant à la table "artisans".
 * - Spécifier la structure et les contraintes de données.
 * - Fournir une interface ORM pour interagir avec la ressource Artisan.
 * 
 * Champs du modèle :
 * - id             : Identifiant unique.
 * - name           : Nom de l'artisan.
 * - rating         : Note de l'artisan.
 * - city           : Ville de l'artisan.
 * - about          : Description de l'artisan.
 * - email          : Adresse email de l'artisan.
 * - website        : Site web de l'artisan.
 * - image          : Image de présentation de l'artisan.
 * - is_top         : Indique si l'artisan figure dans le top artisans du mois.
 * - id_specialty   : Clé étrangère vers la spécialité de l'artisan.
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
    get() {
      // Sequelize retourne DECIMAL comme string → Conversion en number JS
      const value = this.getDataValue('rating');
      return value === null ? null : parseFloat(value);
    },
    allowNull: false,
    validate: { min: 0, max: 5 }
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
    unique: true,
    validate: { isEmail: true }
  },

  website: {
    type: DataTypes.STRING(255),
    allowNull: true
  },

  image: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },

  is_top: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },

  id_specialty: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { // Clé étrangère vers specialties.id
      model: "specialties",
      key: "id"
    }
  }

}, {
  tableName: "artisans",
  timestamps: false,
});

export default Artisan;