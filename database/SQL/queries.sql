-- =======================================================================================

-- 1. Afficher les 3 artisans du mois

SELECT
	a.name AS artisan,
    a.rating,
    s.name AS specialty,
    a.city
FROM artisans a
JOIN specialties s ON a.id_specialty = s.id
WHERE a.is_top = TRUE
ORDER BY a.rating DESC
LIMIT 3;

-- Résultat attendu :
-- Orville Salmons			| 5.0 | Chauffagiste	| Evian
-- Chocolaterie Labbé		| 4.9 | Chocolatier		| Lyon
-- Au pain chaud			| 4.8 | Boulanger		| Montélimar

-- Résultat obtenu :
-- Orville Salmons			| 5.0 | Chauffagiste	| Evian
-- Chocolaterie Labbé		| 4.9 | Chocolatier		| Lyon
-- Au pain chaud			| 4.8 | Boulanger		| Montélimar

-- Commentaire :
-- Aucun écart entre le résultat attendu et le résultat obtenu

-- =======================================================================================

-- 2. Afficher les artisans par catégorie

SELECT
	a.name AS artisan,
    a.rating,
    s.name AS specialty,
    a.city,
    c.name AS category
FROM artisans a
JOIN specialties s ON a.id_specialty = s.id
JOIN categories c ON s.id_category = c.id
WHERE c.id = 1
ORDER BY a.rating DESC;

-- Résultat attendu :
-- Chocolaterie Labbé		| 4.9 | Chocolatier		| Lyon			| Alimentation
-- Au pain chaud			| 4.8 | Boulanger		| Montélimar		| Alimentation
-- Boucherie Dumont			| 4.5 | Boucher			| Lyon			| Alimentation
-- Traiteur Truchon			| 4.1 | Traiteur		| Lyon			| Alimentation

-- Résultat obtenu :
-- Chocolaterie Labbé		| 4.9 | Chocolatier		| Lyon			| Alimentation
-- Au pain chaud			| 4.8 | Boulanger		| Montélimar	| Alimentation
-- Boucherie Dumont			| 4.5 | Boucher			| Lyon			| Alimentation
-- Traiteur Truchon			| 4.1 | Traiteur		| Lyon			| Alimentation

-- Commentaire :
-- Aucun écart entre le résultat attendu et le résultat obtenu

-- =======================================================================================

-- 3. Afficher les résultats d'une recherche par saisie

SELECT
	a.name AS artisan,
    a.rating,
    s.name AS specialty,
    a.city,
    c.name AS category
FROM artisans a
JOIN specialties s ON a.id_specialty = s.id
JOIN categories c ON s.id_category = c.id
WHERE
	a.name LIKE '%au%'
	OR s.name LIKE '%au%'
	OR a.city LIKE '%au%'
ORDER BY a.rating DESC;
    
-- Résultat attendu :
-- Orville Salmons			| 5.0 | Chauffagiste	| Evian			| Bâtiment
-- Au pain chaud			| 4.8 | Boulanger		| Montélimar	| Alimentation
-- Claude Quinn				| 4.2 | Bijoutier		| Aix-les-bains	| Fabrication
-- Royden Charbonneau		| 3.8 | Coiffeur		| Saint-Priest	| Services

-- Résultat obtenu :
-- Orville Salmons			| 5.0 | Chauffagiste	| Evian			| Bâtiment
-- Au pain chaud			| 4.8 | Boulanger		| Montélimar	| Alimentation
-- Claude Quinn				| 4.2 | Bijoutier		| Aix-les-bains	| Fabrication
-- Royden Charbonneau		| 3.8 | Coiffeur		| Saint-Priest	| Services

-- Commentaire :
-- Aucun écart entre le résultat attendu et le résultat obtenu

-- =======================================================================================

-- 4. Afficher les résultats d'une recherche par saisie dans une catégorie

SELECT
	a.name AS artisan,
    a.rating,
    s.name AS specialty,
    a.city,
    c.name AS category
FROM artisans a
JOIN specialties s ON a.id_specialty = s.id
JOIN categories c ON s.id_category = c.id
WHERE
	c.id = 2
	AND (
		a.name LIKE '%au%'
		OR s.name LIKE '%au%'
		OR a.city LIKE '%au%'
	)
ORDER BY a.rating DESC;
    
-- Résultat attendu :
-- Orville Salmons			| 5.0 | Chauffagiste	| Evian			| Bâtiment

-- Résultat obtenu :
-- Orville Salmons			| 5.0 | Chauffagiste	| Evian			| Bâtiment

-- Commentaire :
-- Aucun écart entre le résultat attendu et le résultat obtenu

-- =======================================================================================

-- 5. Afficher le détail d'un artisan

SELECT
	a.name,
	s.name AS specialty,
    a.rating,
    a.city,
    a.about,
    a.email,
    a.website
FROM artisans a
JOIN specialties s ON a.id_specialty = s.id
WHERE a.id = 5;

-- Résultat attendu :
-- Orville Salmons | Chauffagiste | 5.0 | Evian | Lorem Ipsum... | o-salmons@live.com | NULL

-- Résultat obtenu :
-- Orville Salmons | Chauffagiste | 5.0 | Evian | Lorem Ipsum... | o-salmons@live.com | NULL

-- Commentaire :
-- Aucun écart entre le résultat attendu et le résultat obtenu