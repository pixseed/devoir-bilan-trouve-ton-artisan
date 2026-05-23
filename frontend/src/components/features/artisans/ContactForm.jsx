/**
 * ================================================================================================
 * CONTACT FORM
 * ================================================================================================
 * Rôle :
 * - Afficher le formulaire de contact d'un artisan.
 * - Gérer les retours de validation et le feedback utilisateur.
 * ================================================================================================
 */

import TextInput from "../../ui/form/TextInput";
import TextArea from "../../ui/form/TextArea";
import Button from "../../ui/actions/Button";
import Alert from "../../ui/feedback/Alert";

import { useContactForm } from "../../../hooks/features/useContactForm";
import { VARIANTS } from "../../../constants/variants";

export default function ContactForm({ artisanId }) {
  const {
    formData,
    loading,
    error,
    success,
    fieldErrors,
    handleChange,
    handleSubmit,
  } = useContactForm(artisanId);

  const errorList = Object.values(fieldErrors).filter(Boolean);

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
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
        value={formData.object}
        error={fieldErrors.object}
        onChange={(value) => handleChange("object", value)}
      />
      <TextArea
        label={"Message*"}
        name={"message"}
        value={formData.message}
        error={fieldErrors.message}
        onChange={(value) => handleChange("message", value)}
      />
      {error && errorList.length > 0 && (
        <Alert variant={VARIANTS.ALERT.ERROR}>
          <p>{error}</p>
          <ul className="contact-form__error-list">
            {errorList.map((message) => (
              <li key={message}>{message}</li>
            ))}
          </ul>
        </Alert>
      )}
      {success && (
        <Alert message={success} variant={VARIANTS.ALERT.SUCCESS} />
      )}
      <Button
        type="submit"
        variant={VARIANTS.BUTTON.PRIMARY}
        size={VARIANTS.SIZE.MD}
        disabled={loading}
      >
        {loading ? "Envoi..." : "Envoyer"}
      </Button>
    </form>
  );
}
