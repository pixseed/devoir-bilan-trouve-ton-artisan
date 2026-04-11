# 📖 Dictionnaire et documentation des données

Document des données récupérée : [data.xlsx](./DB/data.xlsx)

![data.xlsx](./DB/data.png)

---

## 🟦 Categories

| Champ | Type | Contraintes | Description |
|:-----:|:----:|:----------:|:-----------:|
| `id` | INT | **PK**, AUTO_INCREMENT | Identifiant unique |
| `name` | VARCHAR(50) | NOT NULL | Nom de la catégorie |

---

## 🟩 Specialties

| Champ | Type | Contraintes | Description |
|:-----:|:----:|:----------:|:-----------:|
| `id` | INT | **PK**, AUTO_INCREMENT | Identifiant unique |
| `name` | VARCHAR(50) | NOT NULL | Nom de la spécialité |
| `id_category` | INT | **FK**, NOT NULL, ON UPDATE CASCADE, ON DELETE CASCADE | Référence catégorie |

---

<div class="page-break"></div>

## 🟧 Artisans

| Champ | Type | Contraintes | Description |
|:-----:|:----:|:----------:|:-----------:|
| `id` | INT | **PK**, AUTO_INCREMENT | Identifiant unique |
| `name` | VARCHAR(150) | NOT NULL | Nom de l'artisan |
| `rating` | DECIMAL(2,1) | NOT NULL, CHECK (rating >= 0 and rating <= 5) | Note sur 5 |
| `city` | VARCHAR(50) | NOT NULL | Localisation (ville) |
| `about` | LONGTEXT | NOT NULL | Description |
| `email` | VARCHAR(150) | UNIQUE, NOT NULL | Adressse email |
| `website` | VARCHAR(255) | NULL | Site web |
| `is_top` | BOOLEAN | NOT NULL, DEFAULT FALSE | Artisan du mois ? |
| `id_specialty` | INT | **FK**, NOT NULL, ON UPDATE CASCADE, ON DELETE CASCADE | Référence spécialité |

### 💡 <u>Exception</u>

<mark>Pour le champ `is_top`, le BOOLEAN sera transformé en MySQL tel que suit :</mark>

| Champ | Type | Contraintes | Description |
|:-----:|:----:|:----------:|:-----------:|
| `is_top` | TINYINT | NOT NULL, DEFAULT 0 | Artisan du mois ? |

- 0 = False
- 1 = True

---

<div class="page-break"></div>

## 🔒 Contraintes globales

- `id` unique et auto-incrémenté pour chaque entité
- seul le champ `website` est nullable
- `rating` compris entre 0 et 5
- `email` est unique pour chaque artisan
- les clés étrangères `FK` (Foreign Key) sont supprimées et mises à jour en cascade

---

## 🔗 Relations

- categories  ─── (1,N) ─── specialties
- specialties ─── (1,N) ─── artisans
