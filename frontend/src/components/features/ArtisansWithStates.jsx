/**
 * ================================================================================================
 * FEATURE : ArtisansWithStates
 * ================================================================================================
 * Rôle :
 * - Wrapper du composant Artisans
 * - Gère les états :
 *      → loading (skeleton)
 *      → error (message + désactivation)
 *      → empty (aucun résultat)
 *      → success (cards normales)
 *
 * Ojectif :
 * - Centraliser la logique loading/error/empty
 * - Éviter d'intégrer de la logique au composant natif (Artisans.jsx)
 * ================================================================================================
 */

import Artisans from "./Artisans";
import ArtisanCardSkeleton from "../ui/ArtisanCardSkeleton";
import Alert from "../ui/Alert";
import { VARIANTS } from "../../constants/variants";
import clsx from "clsx";
import { useBreakpoint } from "../../hooks/useBreakpoint";

export default function ArtisansWithStates({
  data = [],
  loading,
  error,
  variant = VARIANTS.CARD.VERTICAL,
  skeletonCount = 6,
  className = "",
}) {
  const { isXL, isLG } = useBreakpoint();
  const responsiveSkeletonCount = isXL
    ? skeletonCount
    : isLG
      ? 4
      : 3;

  if (loading) {
    return (
      <div
        className={clsx(
          className,
          { "artisans-list__result-grid--loading": loading }
        )}
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
        Aucun artisan trouvé pour cette catégorie.
      </p>
    );
  }

  return (
    <Artisans
      artisans={data}
      variant={variant}
      className={className}
    />
  );
}
