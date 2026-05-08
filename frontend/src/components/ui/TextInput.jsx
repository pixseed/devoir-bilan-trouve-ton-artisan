/* TextInput.jsx */

export default function TextInput({
  label,
  type = "text",
  value,
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
        onChange={(e) => onChange?.(e.target.value)}
        className="form-field__input"
      />
      <label htmlFor={name} className="form-field__label">
        {label}
      </label>
    </div>
  );
}
