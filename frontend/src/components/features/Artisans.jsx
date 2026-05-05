/* Artisans.jsx */

import ArtisanCard from "../ui/ArtisanCard";
import SkeletonCard from "../ui/ArtisanCardSkeleton";
import Alert from "../ui/Alert";
import { VARIANTS } from "../../constants/variants";

export default function Artisans({
  artisans = [],
  loading,
  error,
  variant = VARIANTS.CARD.VERTICAL,
  skeletonCount = 3,
  className = "",
}) {
  if (loading) {
    return (
      <div className={className}>
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <SkeletonCard key={i} variant={variant} />
        ))}
      </div>
    );
  }

  if (error) {
    return <Alert message={error} variant={VARIANTS.ALERT.ERROR} />;
  }

  if (!artisans.length) {
    return (
      <p className="artisans-list__empty">
        Aucun artisan trouvé pour cette catégorie.
      </p>
    );
  }

  return (
    <div className={className}>
      {artisans.map((a) => (
        <ArtisanCard key={a.id} variant={variant} {...a} />
      ))}
    </div>
  );
}
