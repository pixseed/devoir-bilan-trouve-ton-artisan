/**
 * ================================================================================================
 * RESPONSE UTILS
 * ================================================================================================
 * Ce fichier contient des fonctions utilitaires pour formater les réponses API de manière cohérente.
 * 
 * Objectif :
 * - Fournir des fonctions pour envoyer des réponses de succès et d'erreur au format JSON, avec une
 *   structure standardisée.
 * - Faciliter la gestion des réponses dans les contrôleurs en centralisant la logique de formatage.
 * - Améliorer la lisibilité et la maintenabilité du code en évitant la duplication de la logique de
 *   formatage des réponses dans chaque contrôleur.
 * - Permettre une meilleure gestion des erreurs en fournissant une structure claire pour les messages
 *   d'erreur et les codes d'erreur.
 * - Assurer une cohérence dans les réponses de l'API, ce qui facilite le développement côté client et la
 *   gestion des erreurs.
 * 
 * Dépendances :
 * - Aucun, ce fichier est autonome et peut être utilisé dans n'importe quel contrôleur pour formater les
 *   réponses.
 * 
 * Utilisé par :
 * - Tous les contrôleurs de l'API pour formater les réponses de succès et d'erreur.
 * ================================================================================================
 */

// ================================================================================================
// SUCCESS RESPONSE
// ================================================================================================
export const successResponse = (res, data, message, statusCode = 200) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data,
    });
};

// ================================================================================================
// ERROR RESPONSE
// ================================================================================================
export const errorResponse = (res, message, statusCode = 500, code = 'INTERNAL_ERROR') => {
    return res.status(statusCode).json({
        success: false,
        error: {
            message,
            code
        }
    });
}