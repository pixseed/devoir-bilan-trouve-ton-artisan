/* useTopArtisans.js */

import { useState, useEffect } from "react";
import { getTopArtisans } from "../../services/artisansService";
import { APP_MESSAGES } from "../../constants/messages";

export function useTopArtisans() {
    const [artisans, setArtisans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getTopArtisans()
            .then(setArtisans)
            .catch((err) => {
                console.error(err);
                setError(APP_MESSAGES.ERROR.FETCH.ARTISANS);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    return {artisans, loading, error};
}