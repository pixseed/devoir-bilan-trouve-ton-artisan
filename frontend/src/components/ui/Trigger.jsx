/**
 * ================================================================================================
 * Trigger.jsx (component UI)
 * ================================================================================================
 * Bouton déclencheur (menu, dropdown, etc.).
 * 
 * Responsabilités :
 * - Gérer l'état ouvert/fermé
 * - Fournir les attributs aria nécessaire
 * 
 * Accessibilité :
 * - aria-expanded : état du panel
 * - aria-controls : élément contrôlé
 * - aria-haspopup : type de contenu ouvert
 * ================================================================================================
 */

export default function Trigger({
    children,
    onClick,
    isOpen = false,
    label,
    hasPopup,
    controls,
    className = ""
}) {
    return (
        <button
            type="button"
            className={`trigger ${isOpen ? "is-open" : ""} ${className}`}
            onClick={onClick}
            aria-expanded={isOpen}
            aria-label={label || undefined}
            aria-haspopup={hasPopup || undefined}
            aria-controls={controls || undefined}
        >
            {children}
        </button>
    )
}