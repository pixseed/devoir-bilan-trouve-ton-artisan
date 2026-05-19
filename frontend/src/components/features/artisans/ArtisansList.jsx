/* ArtisansList.jsx */

import ArtisanCard from "../../ui/display/ArtisanCard";

export default function Artisans({ artisans, variant, className }) {
  return (
    <div className={className}>
      {artisans.map((a) => (
        <ArtisanCard key={a.id} variant={variant} {...a} />
      ))}
    </div>
  );
}
