/**
 * ================================================================================================
 * FORM SKELETON
 * ================================================================================================
 * Rôle :
 * - Afficher l'état de chargement d'un formulaire.
 * ================================================================================================
 */

export default function FormSkeleton({
  inputs = 3,
  textareas = 1,
  showButton = true,
}) {
  return (
    <div className="contact-form" aria-hidden="true">
      {/* INPUTS */}
      {Array.from({ length: inputs }).map((_, index) => (
        <div key={`input-${index}`} className="skeleton skeleton--input" />
      ))}

      {/* TEXTAREAS */}
      {Array.from({ length: textareas }).map((_, index) => (
        <div
          key={`textarea-${index}`}
          className="skeleton skeleton--textarea"
        />
      ))}

      {/* BUTTON */}
      {showButton && <div className="skeleton skeleton--button" />}
    </div>
  );
}
