/* SkeletonParagraph.jsx */

import clsx from "clsx";

export default function SkeletonParagraph({
  lines = 7,
  lastLineWidth = "skeleton--w-60",
}) {
  return (
    <div className="skeleton-paragraph">
      {Array.from({ length: lines }).map((_, index) => {
        const isLast = index === lines - 1;

        return (
          <div
            key={index}
            className={clsx(
              "skeleton skeleton--text",
              isLast ? lastLineWidth : "skeleton--w-100",
            )}
          />
        );
      })}
    </div>
  );
}
