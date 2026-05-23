/**
 * ================================================================================================
 * ARTISANS LIST WITH STATES
 * ================================================================================================
 * Rôle :
 * - Gérer les états :
 *      → loading (skeleton)
 *      → error (message + désactivation)
 *      → empty (aucun résultat)
 *      → success (cards normales)
 * ================================================================================================
 */

import ArtisansList from "./ArtisansList";
import ArtisanCardSkeleton from "../../ui/feedback/ArtisanCardSkeleton";
import Alert from "../../ui/feedback/Alert";

import clsx from "clsx";

import { VARIANTS } from "../../../constants/variants";
import { useBreakpoint } from "../../../hooks/ui/useBreakpoint";

export default function ArtisansListWithStates({
  data = [],
  loading,
  error,
  variant = VARIANTS.CARD.VERTICAL,
  skeletonCount = 6,
  className = "",
}) {
  const { isXL, isLG } = useBreakpoint();
  const responsiveSkeletonCount = isXL ? skeletonCount : isLG ? 4 : 3;

  if (loading) {
    return (
      <div
        className={clsx(className, {
          "artisans-list__result-grid--loading": loading,
        })}
      >
        {Array.from({ length: responsiveSkeletonCount }).map((_, i) => (
          <ArtisanCardSkeleton key={i} variant={variant} />
        ))}
      </div>
    );
  }

  if (error) {
    return <Alert message={error} variant={VARIANTS.ALERT.ERROR} />;
  }

  if (!data.length) {
    return (
      <p className="artisans-list__empty">
        Aucun artisan correspondant à votre recherche.
      </p>
    );
  }

  return <ArtisansList artisans={data} variant={variant} className={className} />;
}
