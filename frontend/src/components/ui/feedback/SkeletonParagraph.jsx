/**
 * ================================================================================================
 * SKELETON PARAGRAPH
 * ================================================================================================
 * Rôle :
 * - Simuler un paragraphe textuel pendant le chargement.
 * ================================================================================================
 */

import clsx from "clsx";

export default function SkeletonParagraph({ lines = 7, lastLineWidth = "60" }) {
  return (
    <div className="skeleton-paragraph" aria-hidden="true">
      {Array.from({ length: lines }).map((_, index) => {
        const isLast = index === lines - 1;

        return (
          <div
            key={index}
            className={clsx(
              "skeleton skeleton--text",
              isLast ? `skeleton--w-${lastLineWidth}` : "skeleton--w-100",
            )}
          />
        );
      })}
    </div>
  );
}
