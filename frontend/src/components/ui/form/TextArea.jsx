/**
 * ================================================================================================
 * TEXT AREA
 * ================================================================================================
 * Rôle :
 * - Afficher un champ de saisie de texte multiligne réutilisable.
 * - Gérer l'affichage du label flottant.
 * - Gérer l'état d'erreur visuel et accessibilité.
 * ================================================================================================
 */

import FormField from "./FormField";
import clsx from "clsx";

export default function TextArea(props) {
  const { name, label, error, value, onChange, rows = 5 } = props;

  return (
    <FormField
      name={name}
      label={label}
      error={error}
    >
      <textarea
        name={name}
        id={name}
        rows={rows}
        placeholder=" "
        value={value}
        aria-invalid={!!error}
        onChange={(e) => onChange?.(e.target.value)}
        className={clsx(
          "form-field__textarea",
          error && "form-field__textarea--error",
        )}
      />
    </FormField>
  );
}
