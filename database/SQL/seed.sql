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
        thumbnail_sm,
        thumbnail_md,
        thumbnail_lg,
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
        '/images/mains/boucherie-dumont-main-picture.webp',
        '/images/thumbnails/boucherie-dumont-thumb-sm.webp',
        '/images/thumbnails/boucherie-dumont-thumb-md.webp',
        '/images/thumbnails/boucherie-dumont-thumb-lg.webp',
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
        '/images/mains/au-pain-chaud-main-picture.webp',
        '/images/thumbnails/au-pain-chaud-thumb-sm.webp',
        '/images/thumbnails/au-pain-chaud-thumb-md.webp',
        '/images/thumbnails/au-pain-chaud-thumb-lg.webp',
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
        '/images/mains/chocolaterie-labbe-main-picture.webp',
        '/images/thumbnails/chocolaterie-labbe-thumb-sm.webp',
        '/images/thumbnails/chocolaterie-labbe-thumb-md.webp',
        '/images/thumbnails/chocolaterie-labbe-thumb-lg.webp',
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
        '/images/mains/traiteur-truchon-main-picture.webp',
        '/images/thumbnails/traiteur-truchon-thumb-sm.webp',
        '/images/thumbnails/traiteur-truchon-thumb-md.webp',
        '/images/thumbnails/traiteur-truchon-thumb-lg.webp',
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
        '/images/mains/orville-salmons-main-picture.webp',
        '/images/thumbnails/orville-salmons-thumb-sm.webp',
        '/images/thumbnails/orville-salmons-thumb-md.webp',
        '/images/thumbnails/orville-salmons-thumb-lg.webp',
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
        '/images/mains/mont-blanc-electricte-main-picture.webp',
        '/images/thumbnails/mont-blanc-electricte-thumb-sm.webp',
        '/images/thumbnails/mont-blanc-electricte-thumb-md.webp',
        '/images/thumbnails/mont-blanc-electricte-thumb-lg.webp',
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
        '/images/mains/boutot-et-fils-main-picture.webp',
        '/images/thumbnails/boutot-et-fils-thumb-sm.webp',
        '/images/thumbnails/boutot-et-fils-thumb-md.webp',
        '/images/thumbnails/boutot-et-fils-thumb-lg.webp',
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
        '/images/mains/vallis-bellemare-main-picture.webp',
        '/images/thumbnails/vallis-bellemare-thumb-sm.webp',
        '/images/thumbnails/vallis-bellemare-thumb-md.webp',
        '/images/thumbnails/vallis-bellemare-thumb-lg.webp',
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
        '/images/mains/claude-quinn-main-picture.webp',
        '/images/thumbnails/claude-quinn-thumb-sm.webp',
        '/images/thumbnails/claude-quinn-thumb-md.webp',
        '/images/thumbnails/claude-quinn-thumb-lg.webp',
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
        '/images/mains/amitee-lecuyer-main-picture.webp',
        '/images/thumbnails/amitee-lecuyer-thumb-sm.webp',
        '/images/thumbnails/amitee-lecuyer-thumb-md.webp',
        '/images/thumbnails/amitee-lecuyer-thumb-lg.webp',
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
        '/images/mains/ernest-carignan-main-picture.webp',
        '/images/thumbnails/ernest-carignan-thumb-sm.webp',
        '/images/thumbnails/ernest-carignan-thumb-md.webp',
        '/images/thumbnails/ernest-carignan-thumb-lg.webp',
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
        '/images/mains/royden-charbonneau-main-picture.webp',
        '/images/thumbnails/royden-charbonneau-thumb-sm.webp',
        '/images/thumbnails/royden-charbonneau-thumb-md.webp',
        '/images/thumbnails/royden-charbonneau-thumb-lg.webp',
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
        '/images/mains/leala-dennis-main-picture.webp',
        '/images/thumbnails/leala-dennis-thumb-sm.webp',
        '/images/thumbnails/leala-dennis-thumb-md.webp',
        '/images/thumbnails/leala-dennis-thumb-lg.webp',
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
        '/images/mains/c-est-sup-hair-main-picture.webp',
        '/images/thumbnails/c-est-sup-hair-thumb-sm.webp',
        '/images/thumbnails/c-est-sup-hair-thumb-md.webp',
        '/images/thumbnails/c-est-sup-hair-thumb-lg.webp',
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
        '/images/mains/le-monde-des-fleurs-main-picture.webp',
        '/images/thumbnails/le-monde-des-fleurs-thumb-sm.webp',
        '/images/thumbnails/le-monde-des-fleurs-thumb-md.webp',
        '/images/thumbnails/le-monde-des-fleurs-thumb-lg.webp',
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
        '/images/mains/valerie-laderoute-main-picture.webp',
        '/images/thumbnails/valerie-laderoute-thumb-sm.webp',
        '/images/thumbnails/valerie-laderoute-thumb-md.webp',
        '/images/thumbnails/valerie-laderoute-thumb-lg.webp',
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
        '/images/mains/cm-graphisme-main-picture.webp',
        '/images/thumbnails/cm-graphisme-thumb-sm.webp',
        '/images/thumbnails/cm-graphisme-thumb-md.webp',
        '/images/thumbnails/cm-graphisme-thumb-lg.webp',
        FALSE,
        15
    );