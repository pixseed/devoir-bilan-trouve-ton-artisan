/* ContactForm.jsx */

import TextInput from "../ui/TextInput";
import TextArea from "../ui/TextArea";
import Button from "../ui/Button";
import { useContactForm } from "../../hooks/useContactForm";
import { VARIANTS } from "../../constants/variants";

export default function ContactForm({ artisanId }) {
  const {
    formData,
    loading,
    error,
    success,
    fieldErrors,
    handleChange,
    handleSubmit,
  } = useContactForm(artisanId)

  const errorList = Object.values(fieldErrors).filter(Boolean);

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <TextInput
        label={"Nom*"}
        name={"name"}
        placeholder=" "
        value={formData.name}
        error={fieldErrors.name}
        onChange={(value) => handleChange("name", value)}
      />
      <TextInput
        label={"Email*"}
        name={"email"}
        placeholder=" "
        value={formData.email}
        error={fieldErrors.email}
        onChange={(value) => handleChange("email", value)}
      />
      <TextInput
        label={"Objet*"}
        name={"object"}
        placeholder=" "
        value={formData.object}
        error={fieldErrors.object}
        onChange={(value) => handleChange("object", value)}
      />
      <TextArea
        label={"Message*"}
        name={"message"}
        placeholder=" "
        value={formData.message}
        error={fieldErrors.message}
        onChange={(value) => handleChange("message", value)}
      />
      {error && errorList.length > 0 && (
        <div className="contact-form__error alert alert--error">
          <p>{error}</p>
            <ul className="contact-form__error-list">
              {errorList.map((message) => (
                <li key={message}>{message}</li>
              ))}
            </ul>
        </div>
      )}
      {success && (
        <p className="contact-form__success alert alert--success">{success}</p>
      )}
      <Button
        variant={VARIANTS.BUTTON.PRIMARY}
        size={VARIANTS.SIZE.MD}
        disabled={loading}
      >
        {loading ? "Envoi..." : "Envoyer"}
      </Button>
    </form>
  );
}
