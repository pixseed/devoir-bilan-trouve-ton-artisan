/* MenuSkeleton.jsx */

export default function MenuSkeleton() {
  return (
    <ul className="menu__list" role="list">
      {Array.from({ length: 4 }).map((_, i) => (
        <li key={i} className="skeleton skeleton--text-lg"></li>
      ))}
    </ul>
  );
}
