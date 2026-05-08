/* ContactForm.jsx */

import { useState } from "react";
import TextInput from "../ui/TextInput";
import TextArea from "../ui/TextArea";
import Button from "../ui/Button";
import { VARIANTS } from "../../constants/variants";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <form className="contact-form">
      <TextInput
        label={"Nom"}
        name={"name"}
        placeholder={"Votre nom"}
        value={formData.name}
        onChange={(value) => handleChange("name", value)}
      />
      <TextInput
        label={"Email"}
        name={"email"}
        placeholder={"Email"}
        value={formData.email}
        onChange={(value) => handleChange("email", value)}
      />
      <TextInput
        label={"Objet"}
        name={"subject"}
        placeholder={"Objet"}
        value={formData.subject}
        onChange={(value) => handleChange("subject", value)}
      />
      <TextArea
        label={"Message"}
        name={"message"}
        placeholder={"Message"}
        value={formData.message}
        onChange={(value) => handleChange("message", value)}
      />
      <Button
        variant={VARIANTS.BUTTON.PRIMARY}
        size={VARIANTS.SIZE.MD}
      >
        Envoyer
      </Button>
    </form>
  );
}
