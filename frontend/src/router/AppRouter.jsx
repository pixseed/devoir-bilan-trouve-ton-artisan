/**
 * ================================================================================================
 * APPLICATION ROUTER
 * ================================================================================================
 * Rôle :
 * - Définir le routage principal de l'application.
 * - Appliquer le layout global partagé.
 * - Gérer la navigation entre les différentes pages.
 * ================================================================================================
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";
import ScrollToTop from "../components/layout/ScrollToTop";

import Home from "../pages/Home";
import ArtisansList from "../pages/ArtisansList";
import ArtisanDetails from "../pages/ArtisanDetails";
import NotFound from "../pages/NotFound";
import UnderConstruction from "../pages/UnderConstruction";

function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="artisans" element={<ArtisansList />} />
          <Route path="artisans/:id" element={<ArtisanDetails />} />
          <Route path="under-construction" element={<UnderConstruction />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
