/**
 * ================================================================================================
 * TEXT INPUT
 * ================================================================================================
 * Rôle :
 * - Afficher un champ de saisie de texte réutilisable.
 * - Gérer l'affichage du label flottant.
 * - Gérer l'état d'erreur visuel et accessibilité.
 * ================================================================================================
 */

import FormField from "./FormField";
import clsx from "clsx";

export default function TextInput({
  name,
  label,
  error,
  value,
  onChange,
  type = "text",
  ...props
}) {

  return (
    <FormField
      name={name}
      label={label}
      error={error}
    >
      <input
        id={name}
        name={name}
        type={type}
        placeholder=" "
        value={value}
        aria-invalid={!!error}
        onChange={(e) => onChange?.(e.target.value)}
        className={clsx(
          "form-field__input",
          error && "form-field__input--error",
        )}
        {...props}
      />
    </FormField>
  );
}
