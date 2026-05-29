/**
 * ================================================================================================
 * IMAGE OPTIMIZER
 * ================================================================================================
 * Rôle :
 * - Parcourir les dossiers d'images frontend et backend.
 * - Convertir les images JPG / JPEG / PNG en format WebP.
 * - Redimensionner les images trop grandes.
 * - Conserver les originaux pour éviter toute perte ou les supprimer
 *
 * Utilisation :
 * node scripts/optimize-images.js convert
 * node scripts/optimize-images.js delete-originals
 * ================================================================================================
 */

import sharp from "sharp";
import fs from "fs";
import path from "path";

// ================================================================================================
// CONFIGURATION
// ================================================================================================

// Dossier contenant les images à optimiser
const folders = ["./frontend/public/images", "./backend/public/images"];

// Largeur maximale autorisée
const MAX_WIDTH = 1920;

// Qualité WebP
const QUALITY = 80; // Max 100 (poids élevé) → 80 = compromis qualité/perfomance

// Extensions supportées
const SUPPORTED_EXTENSIONS = [".jpg", ".jpeg", ".png"];

// Mode d'exécution passé en argument CLI
const mode = process.argv[2];

// ================================================================================================
// FILE SIZE UTILITIES
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

// ================================================================================================
// GENERIC FILE PROCESSING
// ================================================================================================
/**
 * Parcourt les images supportées d'un dossier et applique une action personnalisée sur chacune
 * 
 * @param {string} folderPath 
 * @param {Function} callback - Action à appliquer à chaque image
 */
async function processImages(folderPath, callback) {
  // Vérifie que le dossier existe
  if (!fs.existsSync(folderPath)) {
    console.log(`Dossier introuvable : ${folderPath}`);
    return;
  }

  // Récupère tous les fichiers du dossier
  const files = fs.readdirSync(folderPath);

    // Parcourt chaque fichier
  for (const file of files) {
    // Récupère l'extension
    const extension = path.extname(file).toLowerCase();

    // Ignore les fichier non supporté
    if (!SUPPORTED_EXTENSIONS.includes(extension)) {
      continue;
    }

    // Construit le chemin complet du fichier source
    const inputPath = path.join(folderPath, file);

    // Construit le chemin du fichier converti
    const webpPath = path.join(
      folderPath,
      `${path.basename(file, extension)}.webp`,
    );

    await callback({
      file,
      inputPath,
      webpPath
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
  await processImages(folderPath, async ({ file, inputPath, webpPath }) => {
    try {
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
        .toFile(webpPath);
      
      // Taille du fichier original
      const originalSize = fs.statSync(inputPath).size;

      // Taile du fichier converti
      const convertedSize = fs.statSync(webpPath).size;

      // Différence en octets
      const savedBytes = originalSize - convertedSize;

      // Gain en pourcentage
      const savedPercent = ((savedBytes / originalSize) * 100).toFixed(1);
  
      console.log(`✔️ Converti : ${file} | ${formatBytes(originalSize)} → ${formatBytes(convertedSize)} | -${savedPercent}%`);
    } catch (error) {
      console.error(`❌ Erreur sur ${file}`, error);
    }
  });
}

/**
 * Supprime les fichiers originaux après validation
 */
async function deleteOriginalFiles(folderPath) {
  await processImages(folderPath, async ({ file, inputPath, webpPath }) => {

    // Vérifie que le fichier original a été converti → suppression
    if (fs.existsSync(webpPath)) {
      fs.unlinkSync(inputPath);
      console.log(`🗑️ Supprimé : ${file}`);
    } else {
      console.log(`⚠️ Conversion absente, suppression ignorée : ${file}`);
    }
  });
}

// ================================================================================================
// EXECUTION
// Lance le traitement sur tous les dossiers définis selon le mode demandé
// ================================================================================================

async function run() {
  // Mode conversion
  if (mode === "convert") {
    for (const folder of folders) {
      await optimizeFolder(folder);
    }

    console.log("🚀 Conversion terminée");

    // Mode suppression des originaux
  } else if (mode === "delete-originals") {
    for (const folder of folders) {
      await deleteOriginalFiles(folder);
    }

    console.log("🧹 Nettoyage terminé");
    
  } else {
    console.log("❌ Commande invalide");
    console.log("Utilisation :");
    console.log("node scripts/optimize-images.js convert");
    console.log("node scripts/optimize-images.js delete-originals");
  }
}

run();
