/**
 * ================================================================================================
 * MEDIA QUERIES
 * ================================================================================================
 * Rôle :
 * - Centraliser les media queries à partir des breakpoints centralisés.
 * - Uniformiser l'utilisation du responsive dans l'application.
 * ================================================================================================
 */

import { BREAKPOINTS } from "./breakpoints";

export const MEDIA_QUERIES = {
  xxs: `(min-width: ${BREAKPOINTS.xxs}px)`,
  xs: `(min-width: ${BREAKPOINTS.xs}px)`,
  sm: `(min-width: ${BREAKPOINTS.sm}px)`,
  md: `(min-width: ${BREAKPOINTS.md}px)`,
  lg: `(min-width: ${BREAKPOINTS.lg}px)`,
  xl: `(min-width: ${BREAKPOINTS.xl}px)`,
  xxl: `(min-width: ${BREAKPOINTS.xxl}px)`,
};
