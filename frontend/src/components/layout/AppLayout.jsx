/**
 * ================================================================================================
 * APPLICATION LAYOUT
 * ================================================================================================
 * Rôle :
 * - Définir la structure globale partagée de l'application.
 * - Encapsuler le header, le contenu principal et le footer.
 * ================================================================================================
 */

import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
