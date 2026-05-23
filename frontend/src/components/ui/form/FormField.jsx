/**
 * ================================================================================================
 * FORM FIELD
 * ================================================================================================
 * Rôle :
 * - Fournir une structure commune aux champs de formulaire.
 * - Gérer le wrapper et le label flottant.
 * ================================================================================================
 */

import clsx from "clsx";

export default function FormField({ name, label, error, children }) {
  return (
    <div className="form-field">
      {children}
      <label
        htmlFor={name}
        className={clsx(
          "form-field__label",
          error && "form-field__label--error",
        )}
      >
        {label}
      </label>
    </div>
  );
}
