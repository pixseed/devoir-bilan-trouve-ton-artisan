/* TextInput.jsx */

import clsx from "clsx";

export default function TextInput({
  label,
  type = "text",
  value,
  error,
  onChange,
  name,
}) {
  return (
    <div className="form-field">
      <input
        id={name}
        name={name}
        type="text"
        placeholder=" "
        value={value}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        onChange={(e) => onChange?.(e.target.value)}
        className={clsx(
          "form-field__input",
          error && "form-field__input--error"
        )}
      />
      <label
        htmlFor={name}
        className={clsx(
          "form-field__label",
          error && "form-field__label--error"
        )}
      >
        {label}
      </label>
    </div>
  );
}
