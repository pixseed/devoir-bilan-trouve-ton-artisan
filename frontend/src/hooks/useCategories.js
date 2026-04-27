/* useCategories.js */

import { useEffect, useState } from "react";
import { getAllCategories } from "../services/categoryService";

export function useCategories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAllCategories()
            .then(setCategories)
            .catch((err) => {
                console.error(err);
                setError("Erreur lors du chargement.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [])

    return {categories, error, loading};
}