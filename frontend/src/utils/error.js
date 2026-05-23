/**
 * ================================================================================================
 * API ERROR UTILS
 * ================================================================================================
 * Rôle :
 * - Construire des objets d'erreur à partir des réponses API.
 * - Uniformiser la gestion des erreurs frontend.
 * ================================================================================================
 */

import { APP_MESSAGES } from "../constants/messages";

export function buildApiError(res, data) {
  let message;

  switch (res.status) {
    case 400:
    case 404:
      message = data.error?.message || APP_MESSAGES.ERROR.FETCH.DEFAULT;
      break;
    case 500:
      message = APP_MESSAGES.ERROR.SERVER;
      break;
    default:
      message = APP_MESSAGES.ERROR.UNKNOWN;
  }

  const error = new Error(message);
  error.status = res.status;
  error.code = data.error?.code;
  error.fields = data.error?.fields;

  return error;
}
