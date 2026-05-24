/**
 * ================================================================================================
 * API ERROR
 * ================================================================================================
 * Rôle :
 * - Créer un type d'erreur personnalisé pour l'API.
 * - Transporter un status HTTP, un code d'erreur et des détails.
 * 
 * Fonctionnement :
 * - ApiError hérite de Error grâce à "extends".
 * - "super(message)" initialise la classe Error native.
 * - Est suivi les propriétés personnalisées .
 * 
 * Utilisation :
 * - Lancée depuis les services métier avec "throw".
 * - Capturée par les controllers via try/catch.
 * - Transmise à Express avec next(error) pour passer au middleware suivant les routes dans l'app.
 * - Traitée automatiquement par apiErrorHandler.
 * ================================================================================================
 */

export class ApiError extends Error {
  constructor(statusCode, code, message, fields = null) {
    // Initialise la classe Error native avec le message
    super(message);

    // Nom du type d'erreur
    this.name = "ApiError";
    // Code HTTP à retourner au client
    this.statusCode = statusCode;
    // Code métier interne (pour debug frontend)
    this.code = code;
    // Erreurs de validation
    this.fields = fields;
  }
}