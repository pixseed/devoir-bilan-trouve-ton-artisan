-- =======================================================================================
-- Base de donnée trouve_ton_artisan
-- =======================================================================================

DROP DATABASE IF EXISTS trouve_ton_artisan;
CREATE DATABASE trouve_ton_artisan DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE trouve_ton_artisan;

-- =======================================================================================
-- Création des tables
-- =======================================================================================

-- Tables principales
CREATE TABLE categories (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE
);

-- Tables dépendantes 
CREATE TABLE specialties (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE,
    id_category INT NOT NULL,
    FOREIGN KEY (id_category) REFERENCES categories(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE artisans (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    rating DECIMAL(2,1) NOT NULL CHECK (rating >= 0 AND rating <= 5),
    city VARCHAR(50) NOT NULL,
    about LONGTEXT NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    website VARCHAR(255) NULL,
    is_top TINYINT NOT NULL DEFAULT 0,
    id_specialty INT NOT NULL,
    FOREIGN KEY (id_specialty) REFERENCES specialties(id) ON DELETE CASCADE ON UPDATE CASCADE
);