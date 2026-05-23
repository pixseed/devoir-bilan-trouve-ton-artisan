/**
 * ================================================================================================
 * USE ARTISAN
 * ================================================================================================
 * Rôle :
 * - Récupérer les données détaillées d'un artisan par identifiant.
 * - Gérer les états loading / error / success.
 * ================================================================================================
 */

import { useState, useEffect } from "react";
import { getArtisanById } from "../../services/artisansService";
import { APP_MESSAGES } from "../../constants/messages";

export function useArtisan(id) {
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      // Évite que setLoading reste bloqué
      setLoading(false);
      return;
    }

    async function fetchArtisan() {
      setLoading(true);
      setError(null);
      // Évite l'affichage de l'ancien artisan pendant que le nouveau charge.
      setArtisan(null);

      try {
        const artisan = await getArtisanById(id);
        setArtisan(artisan);
      } catch (error) {
        console.error(error);

        switch (error.code) {
          case "ARTISAN_NOT_FOUND":
            setError("Cet artisan n'existe pas.");
            break;
          default:
            setError(APP_MESSAGES.ERROR.FETCH.ARTISAN);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchArtisan();
  }, [id]);

  return { artisan, loading, error };
}
