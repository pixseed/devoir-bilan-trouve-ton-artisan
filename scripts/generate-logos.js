/**
 * ================================================================================================
 * LOGO GENERATOR
 * ================================================================================================
 * Rôle :
 * - Générer des versions responsive du logo.
 * - Créer :
 *    → desktop
 *    → mobile
 * ================================================================================================
 */

import sharp from "sharp";

const logoPath = "./frontend/public/logos/logo-trouve-ton-artisan.png";

async function generateResponsiveLogos() {
  try {
    // =========================================================================
    // DESKTOP
    // =========================================================================

    await sharp(logoPath)
      .resize({
        width: 400,
      })
      .webp({
        quality: 95,
      })
      .toFile("./frontend/public/logos/logo-trouve-ton-artisan-desktop.webp");

    // =========================================================================
    // MOBILE
    // =========================================================================

    await sharp(logoPath)
      .resize({
        width: 200,
      })
      .webp({
        quality: 92,
      })
      .toFile("./frontend/public/logos/logo-trouve-ton-artisan-mobile.webp");

    console.log("✅ Logos responsives générés");
  } catch (error) {
    console.error("❌ Erreur lors de la génération de logos :", error);
  }
}

generateResponsiveLogos();
