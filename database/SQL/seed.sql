-- =========================================================
-- Insertion des données
-- =========================================================
USE trouve_ton_artisan;

-- CATEGORIES
INSERT INTO
    categories (name)
VALUES
    ('Alimentation'),
    ('Bâtiment'),
    ('Fabrication'),
    ('Services');

-- SPECIALTIES
INSERT INTO
    specialties (name, id_category)
VALUES
    ('Boucher', 1),
    ('Boulanger', 1),
    ('Chocolatier', 1),
    ('Traiteur', 1),
    ('Chauffagiste', 2),
    ('Electricien', 2),
    ('Menuisier', 2),
    ('Plombier', 2),
    ('Bijoutier', 3),
    ('Couturier', 3),
    ('Ferronier', 3),
    ('Coiffeur', 4),
    ('Fleuriste', 4),
    ('Toiletteur', 4),
    ('Webdesign', 4);

-- ARTISANS
INSERT INTO
    artisans (
        name,
        rating,
        city,
        about,
        email,
        website,
        image,
        is_top,
        id_specialty
    )
VALUES
    (
        'Boucherie Dumont',
        4.5,
        'Lyon',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
        'boucherie.dumond@gmail.com',
        NULL,
        '/images/boucherie-dumont-main-picture.jpg',
        FALSE,
        1
    ),
    (
        'Au pain chaud',
        4.8,
        'Montélimar',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
        'aupainchaud@hotmail.com',
        NULL,
        '/images/au-pain-chaud-main-picture.jpg',
        TRUE,
        2
    ),
    (
        'Chocolaterie Labbé',
        4.9,
        'Lyon',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
        'chocolaterie-labbe@gmail.com',
        'https://chocolaterie-labbe.fr',
        '/images/chocolaterie-labbe-main-picture.jpg',
        TRUE,
        3
    ),
    (
        'Traiteur Truchon',
        4.1,
        'Lyon',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
        'contact@truchon-traiteur.fr',
        'https://truchon-traiteur.fr',
        '/images/traiteur-truchon-main-picture.jpg',
        FALSE,
        4
    ),
    (
        'Orville Salmons',
        5.0,
        'Evian',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
        'o-salmons@live.com',
        NULL,
        '/images/orville-salmons-main-picture.jpg',
        TRUE,
        5
    ),
    (
        'Mont Blanc Eléctricité',
        4.5,
        'Chamonix',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
        'contact@mont-blanc-electricite.com',
        'https://mont-blanc-electricite.com',
        '/images/mont-blanc-electricte-main-picture.jpg',
        FALSE,
        6
    ),
    (
        'Boutot & fils',
        4.7,
        'Bourg-en-bresse',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
        'boutot-menuiserie@gmail.com',
        'https://boutot-menuiserie.com',
        '/images/boutot-et-fils-main-picture.jpg',
        FALSE,
        7
    ),
    (
        'Vallis Bellemare',
        4.0,
        'Vienne',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
        'v.bellemare@gmail.com',
        'https://plomberie-bellemare.com',
        '/images/vallis-bellemare-main-picture.jpg',
        FALSE,
        8
    ),
    (
        'Claude Quinn',
        4.2,
        'Aix-les-bains',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
        'claude.quinn@gmail.com',
        NULL,
        '/images/claude-quinn-main-picture.jpg',
        FALSE,
        9
    ),
    (
        'Amitee Lécuyer',
        4.5,
        'Annecy',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
        'a.amitee@hotmail.com',
        'https://lecuyer-couture.com',
        '/images/amitee-lecuyer-main-picture',
        FALSE,
        10
    ),
    (
        'Ernest Carignan',
        5.0,
        'Le Puy-en-Velay',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
        'e-carigan@hotmail.com',
        NULL,
        '/images/ernest-carignan-main-picture.jpg',
        FALSE,
        11
    ),
    (
        'Royden Charbonneau',
        3.8,
        'Saint-Priest',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
        'r.charbonneau@gmail.com',
        NULL,
        '/images/royden-charbonneau-main-picture.jpg',
        FALSE,
        12
    ),
    (
        'Leala Dennis',
        3.8,
        'Chambéry',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
        'l.dennos@hotmail.fr',
        'https://coiffure-leala-chambery.fr',
        '/images/leala-dennis-main-picture.jpg',
        FALSE,
        12
    ),
    (
        'C''est sup''hair',
        4.1,
        'Romans-sur-Isère',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
        'sup-hair@gmail.com',
        'https://sup-hair.fr',
        '/images/c-est-sup-hair-main-picture.jpg',
        FALSE,
        12
    ),
    (
        'Le monde des fleurs',
        4.6,
        'Annonay',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
        'contact@le-monde-des-fleurs-annonay.fr',
        'https://le-monde-des-fleurs-annonay.fr',
        '/images/le-monde-des-fleurs-main-picture.jpg',
        FALSE,
        13
    ),
    (
        'Valérie Laderoute',
        4.5,
        'Valence',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
        'v-laredoute@gmail.com',
        NULL,
        '/images/valerie-laderoute-main-picture.jpg',
        FALSE,
        14
    ),
    (
        'CM Graphisme',
        4.4,
        'Valence',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
        'contact@cm-graphisme.com',
        'https://cm-graphisme.com',
        '/images/cm-graphisme-main-picture.jpg',
        FALSE,
        15
    );