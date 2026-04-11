# Modèle logique de données (MLD)

## categories
```
id (INT, PK, AUTO_INCREMENT, NOT NULL)
name (VARCHAR(50), NOT NULL, UNIQUE)
```

---

## specialties
```
id (INT, PK, AUTO_INCREMENT, NOT NULL)
name (VARCHAR(50), NOT NULL, UNIQUE)
id_category (INT, FK → categories.id, NOT NULL, ON DELETE CASCADE, ON UPDATE CASCADE)
```

---

## artisans
```
id (INT, PK, AUTO_INCREMENT, NOT NULL)
name (VARCHAR(150), NOT NULL)
rating (DECIMAL(2,1), NOT NULL, CHECK 0 <= rating <= 5)
city (VARCHAR(50), NOT NULL)
about (LONGTEXT, NOT NULL)
email (VARCHAR(150), NOT NULL, UNIQUE)
website (VARCHAR(255), NULL)
is_top (BOOLEAN NOT NULL DEFAULT FALSE)
id_specialty (INT, FK → specialties.id, NOT NULL, ON DELETE CASCADE, ON UPDATE CASCADE)
```