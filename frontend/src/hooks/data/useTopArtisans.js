/**
 * ================================================================================================
 * USE TOP ARTISANS
 * ================================================================================================
 * Rôle :
 * - Récupérer les artisans mis en avant.
 * - Gérer les états loading / error / success.
 * ================================================================================================
 */

import { useState, useEffect } from "react";
import { getTopArtisans } from "../../services/artisansService";
import { APP_MESSAGES } from "../../constants/messages";

export function useTopArtisans() {
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTopArtisans() {
      setLoading(true);
      setError(null);

      try {
        const artisans = await getTopArtisans();
        setArtisans(artisans);
      } catch (error) {
        console.error(error);
        setError(APP_MESSAGES.ERROR.FETCH.ARTISANS);
      } finally {
        setLoading(false);
      }
    }

    fetchTopArtisans();
  }, []);

  return { artisans, loading, error };
}
