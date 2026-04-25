/**
 * ================================================================================================
 * AppLayout.jsx
 * ================================================================================================
 *
 * ================================================================================================
 */

import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div>
      <Header />

      <main className="layout">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
