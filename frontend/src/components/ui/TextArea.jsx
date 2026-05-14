/* TextArea.jsx */

import clsx from "clsx";

export default function TextArea({
  label,
  value,
  onChange,
  error,
  name,
  rows = 5,
}) {
  return (
    <div className="form-field">
      <textarea
        name={name}
        id={name}
        rows={rows}
        placeholder=" "
        value={value}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        onChange={(e) => onChange?.(e.target.value)}
        className={clsx(
          "form-field__textarea",
          error && "form-field__textarea--error"
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
