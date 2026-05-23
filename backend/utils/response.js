/**
 * ================================================================================================
 * RESPONSE UTILS
 * ================================================================================================
 * Rôle :
 * - Standardiser le format des réponses HTTP JSON de l'API.
 * - Centraliser l'envoi des réponses de succès et d'erreur.
 * - Garantir un contrat de réponse cohérent côté backend / frontend.
 * 
 * Helpers :
 * - successResponse()  : réponse JSON de succès.
 * - errorResponse()    : réponse JSON d'erreur.
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
export const errorResponse = (
    res,
    message,
    statusCode = 500,
    code = 'INTERNAL_ERROR',
    fields = null
) => {
    return res.status(statusCode).json({
        success: false,
        error: {
            message,
            code,
            ...(fields && { fields }),
        }
    });
}