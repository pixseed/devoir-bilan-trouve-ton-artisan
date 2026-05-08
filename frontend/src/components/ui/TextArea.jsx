/* TextArea.jsx */

export default function TextArea({
  label,
  value,
  onChange,
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
        onChange={(e) => onChange?.(e.target.value)}
        className="form-field__textarea"
      />
      <label htmlFor={name} className="form-field__label">
        {label}
      </label>
    </div>
  );
}
