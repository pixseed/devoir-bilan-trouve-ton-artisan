/**
 * ================================================================================================
 * IMAGE OPTIMIZER
 * ================================================================================================
 * Rôle :
 * - Parcourir les dossiers d'images frontend et backend.
 * - Convertir les images JPG / JPEG / PNG en format WebP.
 * - Générer des thumbnails WebP à partir des images principales.
 * - Supprimer les originaux après validation.
 * - Redimensionner les images trop grandes.
 *
 * Utilisation :
 * node scripts/optimize-images.js convert | npm run optimize:images
 * node scripts/optimize-images.js generate-thumbnails | npm run generate:thumbnails
 * node scripts/optimize-images.js delete-originals | npm run cleanup:images
 * ================================================================================================
 */

import sharp from "sharp";
import fs from "fs";
import path, { basename } from "path";

import { THUMBNAIL_WIDTHS } from "../shared/imageVariants";

// ================================================================================================
// CONFIGURATION
// ================================================================================================

// Dossier contenant les images à optimiser
const folders = ["./frontend/public/images", "./backend/public/images"];

// Image principale
const MAX_WIDTH = 1920;
const QUALITY = 80;

// Thumbnail
const THUMBAIL_VARIANTS = [
  {
    suffix: "sm",
    width: THUMBNAIL_WIDTHS.SM,
    height: 180,
    quality: 65,
  },
  {
    suffix: "md",
    width: THUMBNAIL_WIDTHS.MD,
    height: 270,
    quality: 70,
  },
  {
    suffix: "lg",
    width: THUMBNAIL_WIDTHS.LG,
    height: 315,
    quality: 75,
  },
];

// Mode d'exécution passé en argument CLI
const mode = process.argv[2];

// ================================================================================================
// UTILITIES
// ================================================================================================
/**
 * Formate une taille en octets vers une unité lisible
 *
 * @param {number} bytes - taille en octets
 * @returns {string}
 */
function formatBytes(bytes) {
  const units = ["B", "KB", "MB", "GB"];
  let size = bytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  return `${size.toFixed(2)} ${units[unitIndex]}`;
}

/**
 *  Créer les dossiers de sortie s'ils n'existent pas
 * @param {string} folderPath - dossier parent des images
 * @returns {{ mainsDir: string, thumbsDir: string}}
 */
function ensureDirectories(folderPath) {
  const mainsDir = path.join(folderPath, "mains");
  const thumbsDir = path.join(folderPath, "thumbnails");

  fs.mkdirSync(mainsDir, { recursive: true });
  fs.mkdirSync(thumbsDir, { recursive: true });

  return {
    mainsDir,
    thumbsDir,
  };
}

// ================================================================================================
// GENERIC FILE PROCESSING
// ================================================================================================
/**
 * Parcourt les images supportées d'un dossier et applique une action personnalisée sur chacune
 *
 * @param {string} folderPath - Dossier à parcourir
 * @param {string[]} extensions - Extensions autorisées
 * @param {Function} callback - Action à appliquer
 * @param {Object} options
 */
async function processImages(folderPath, extensions, callback, options = {}) {
  // Vérifie que le dossier existe
  if (!fs.existsSync(folderPath)) {
    console.log(`⚠️ Dossier introuvable : ${folderPath}`);
    return;
  }

  const sourceFolder = options.sourceSubfolder
    ? path.join(folderPath, options.sourceSubfolder)
    : folderPath;

  const { mainsDir, thumbsDir } = ensureDirectories(folderPath);

  if (!fs.existsSync(sourceFolder)) {
    console.log(`⚠️ Dossier source introuvable : ${sourceFolder}`);
    return;
  }

  // Récupère tous les fichiers du dossier
  const files = fs
    .readdirSync(sourceFolder)
    .filter((file) => fs.statSync(path.join(sourceFolder, file)).isFile());

  // Parcourt chaque fichier
  for (const file of files) {
    // Récupère l'extension
    const extension = path.extname(file).toLowerCase();

    // Ignore les extensions non supportées
    if (!extensions.includes(extension)) {
      continue;
    }

    const baseName = path
      .basename(file, extension)
      .replace("-main-picture", "");

    // Construit le chemin complet du fichier source
    const inputPath = path.join(sourceFolder, file);

    // Construit le chemin du fichier converti
    const mainPath = path.join(mainsDir, `${baseName}-main-picture.webp`);

    // Construit le chemin du fichier thumbnail converti
    const thumbPath = path.join(thumbsDir, `${baseName}-thumb-picture.webp`);

    await callback({
      file,
      baseName,
      inputPath,
      mainPath,
      thumbPath,
    });
  }
}

// ================================================================================================
// IMAGE PROCESSING
// ================================================================================================

/**
 * Optimise toutes les images d'un dossier
 *
 * @param {string} folderPath - chemin du dossier à traiter
 */
async function optimizeFolder(folderPath) {
  await processImages(
    folderPath,
    [".jpeg", ".jpg", ".png"],
    async ({ file, inputPath, mainPath }) => {
      try {
        // Skip si déjà converti
        if (fs.existsSync(mainPath)) {
          console.log(`⏭️ Déjà converti : ${file}`);
          return;
        }

        /**
         * Sharp :
         * - ouvre l'image source
         * - resize si > MAX_WIDTH
         * - convertit en WebP
         * - sauvegarde le nouveau fichier
         */
        await sharp(inputPath)
          .resize({
            width: MAX_WIDTH,
            withoutEnlargement: true,
          })
          .webp({
            quality: QUALITY,
          })
          .toFile(mainPath);

        // Taille du fichier original
        const originalSize = fs.statSync(inputPath).size;

        // Taille du fichier converti
        const convertedSize = fs.statSync(mainPath).size;

        // Différence en octets
        const savedBytes = originalSize - convertedSize;

        // Gain en pourcentage
        const savedPercent = ((savedBytes / originalSize) * 100).toFixed(1);

        console.log(
          `✔️ Converti : ${file} | ${formatBytes(originalSize)} → ${formatBytes(convertedSize)} | -${savedPercent}%`,
        );
      } catch (error) {
        console.error(`❌ Erreur sur ${file}`, error);
      }
    },
  );
}

/**
 * Génère les thumbnails depuis les mains
 *
 * @param {string} folderPath - chemin du dossier à traiter
 */
async function generateThumbnails(folderPath) {
  await processImages(
    folderPath,
    [".webp"],
    async ({ file, baseName, inputPath, thumbPath }) => {
      try {
        // Ignorer les fichiers qui ne sont pas des images principales
        if (!file.endsWith("-main-picture.webp")) {
          return;
        }

        for (const variant of THUMBAIL_VARIANTS) {
          const outputPath = path.join(
            path.dirname(thumbPath),
            `${baseName}-thumb-${variant.suffix}.webp`,
          );
          /**
           * Sharp :
           * - ouvre l'image source
           * - resize si > MAX_WIDTH
           * - convertit en WebP
           * - sauvegarde le nouveau fichier
           */
          await sharp(inputPath)
            .resize({
              width: variant.width,
              height: variant.height,
              fit: "cover",
              withoutEnlargement: true,
            })
            .webp({
              quality: variant.quality,
            })
            .toFile(outputPath);

          console.log(`🖼️ Thumbnail ${variant.suffix} créé : ${path.basename(outputPath)}`);
        }
      } catch (error) {
        console.error(`❌ Erreur thumbnail ${file}`, error);
      }
    },
    {
      sourceSubfolder: "mains",
    },
  );
}

/**
 * Supprime les fichiers originaux après validation
 *
 * @param {string} folderPath - chemin du dossier à traiter
 */
async function deleteOriginalFiles(folderPath) {
  await processImages(
    folderPath,
    [".jpeg", ".jpg", ".png"],
    async ({ file, inputPath, mainPath }) => {
      // Vérifie que le fichier original a été converti → suppression
      if (fs.existsSync(mainPath)) {
        fs.unlinkSync(inputPath);
        console.log(`🗑️ Supprimé : ${file}`);
      } else {
        console.log(`⚠️ Conversion absente, suppression ignorée : ${file}`);
      }
    },
  );
}

// ================================================================================================
// EXECUTION
// Lance le traitement sur tous les dossiers définis selon le mode demandé
// ================================================================================================

async function run() {
  // Mode conversion main picture
  if (mode === "convert") {
    for (const folder of folders) {
      await optimizeFolder(folder);
    }

    console.log("🚀 Conversion terminée");

    // Mode conversion thumbnail
  } else if (mode === "generate-thumbnails") {
    for (const folder of folders) {
      await generateThumbnails(folder);
    }

    console.log("🖼️ Thumbnails générés");

    // Mode suppression des originaux
  } else if (mode === "delete-originals") {
    for (const folder of folders) {
      await deleteOriginalFiles(folder);
    }

    console.log("🧹 Nettoyage terminé");
  } else {
    console.log("❌ Commande invalide");
    console.log("Utilisation :");
    console.log(
      "node scripts/optimize-images.js convert | npm run optimize:images",
    );
    console.log(
      "node scripts/optimize-images.js generate-thumbnails | npm run generate:thumbnails",
    );
    console.log(
      "node scripts/optimize-images.js delete-originals | npm run cleanup:images",
    );
  }
}

run();
