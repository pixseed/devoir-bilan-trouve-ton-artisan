/* SkeletonMenu.jsx */

export default function SkeletonMenu() {
  return (
    <ul className="menu__list" role="list">
      {Array.from({ length: 4 }).map((_, i) => (
        <li key={i} className="skeleton-item"></li>
      ))}
    </ul>
  );
}
