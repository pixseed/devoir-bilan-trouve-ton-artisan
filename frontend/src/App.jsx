/**
 * ================================================================================================
 * ROOT APPLICATION COMPONENT
 * ================================================================================================
 * Rôle :
 * - Servir de point d'entrée principal de l'application frontend.
 * - Monter le routeur principal.
 * ================================================================================================
 */

import AppRouter from "./router/AppRouter";

function App() {
  return <AppRouter />;
}

export default App;
