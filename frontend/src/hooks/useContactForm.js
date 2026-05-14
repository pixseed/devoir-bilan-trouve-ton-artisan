/* useContactForm.js */

import { useState } from "react";
import { sendArtisanContactMessage } from "../services/artisansService";

export function useContactForm(artisanId) {
    const INITIAL_FORM = {
        name: "",
        email: "",
        object: "",
        message: "",
    };

    const [formData, setFormData] = useState(INITIAL_FORM);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [fieldErrors, setFieldErrors] = useState({});

    function handleChange(field, value) {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));

        setFieldErrors((prev) => ({
            ...prev,
            [field]: null,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
    
        setLoading(true);
        setError(null);
        setSuccess(null);
        setFieldErrors({});
    
        sendArtisanContactMessage(artisanId, formData)
            .then((res) => {
                setSuccess(res.message);
                setFormData(INITIAL_FORM);
            })
            .catch((err) => {
                console.error(err);
                switch (err.code) {
                    case "ARTISAN_NOT_FOUND":
                        setError("Cet artisan n'existe pas.");
                        break;
                    case "VALIDATION_ERROR":
                        setError(err.message);
                        setFieldErrors(err.fields || {});
                        break;
                    default: setError(err.message);
                }
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return {
        formData,
        loading,
        error,
        success,
        fieldErrors,
        handleChange,
        handleSubmit
    }
}