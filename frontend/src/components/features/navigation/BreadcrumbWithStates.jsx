/**
 * ================================================================================================
 * BREADCRUMB WITH STATES
 * ================================================================================================
 * Rôle :
 * - Gère les états :
 *      → loading (skeleton)
 *      → error (retourne "Accueil" seul)
 *      → success (items normaux)
 * ================================================================================================
 */

import Breadcrumb from "../../ui/navigation/Breadcrumb";
import BreadcrumbSkeleton from "../../ui/feedback/BreadcrumbSkeleton";

export default function BreadcrumbWithStates({ items, loading, error }) {
  if (loading) {
    return <BreadcrumbSkeleton />;
  }

  if (error) {
    return <Breadcrumb items={[{ label: "Accueil", path: "/" }]} />;
  }

  return <Breadcrumb items={items} />;
}
