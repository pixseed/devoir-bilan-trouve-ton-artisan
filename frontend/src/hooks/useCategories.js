/* useCategories.js */

import { useEffect, useState } from "react";
import { getCategories } from "../services/categoryService";
import { APP_MESSAGES } from "../constants/messages";

export function useCategories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getCategories()
            .then(setCategories)
            .catch((err) => {
                console.error(err);
                setError(APP_MESSAGES.ERROR.FETCH.CATEGORIES);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [])

    return {categories, error, loading};
}