/**
 * ================================================================================================
 * USE ARTISANS
 * ================================================================================================
 * Rôle :
 * - Récupérer la liste des artisans selon les filtres actifs.
 * - Gérer les états loading / error / success.
 * ================================================================================================
 */

import { useState, useEffect } from "react";
import { getArtisans } from "../../services/artisansService";
import { APP_MESSAGES } from "../../constants/messages";

export function useArtisans({ search, category }) {
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchArtisans() {
      setLoading(true);
      setError(null);

      try {
        const artisans = await getArtisans({ search, category });
        setArtisans(artisans);
      } catch (error) {
        console.error(error);
        setError(APP_MESSAGES.ERROR.FETCH.ARTISANS);
      } finally {
        setLoading(false);
      }
    }

    fetchArtisans();
  }, [search, category]);

  return { artisans, loading, error };
}
