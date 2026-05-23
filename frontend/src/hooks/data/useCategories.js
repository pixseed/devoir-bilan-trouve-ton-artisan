/**
 * ================================================================================================
 * USE CATEGORIES
 * ================================================================================================
 * Rôle :
 * - Récupérer la liste des catégories.
 * - Gérer les états loading / error / success.
 * ================================================================================================
 */

import { useEffect, useState } from "react";
import { getCategories } from "../../services/categoriesService";
import { APP_MESSAGES } from "../../constants/messages";

export function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      setLoading(true);
      setError(null);

      try {
        const categories = await getCategories();
        setCategories(categories);
      } catch (error) {
        console.error(error);
        setError(APP_MESSAGES.ERROR.FETCH.CATEGORIES);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return { categories, error, loading };
}
