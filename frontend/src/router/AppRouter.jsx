// AppRouter.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import Home from "../pages/Home";
import Artisans_List from "../pages/ArtisansList";
import Artisan_Details from "../pages/ArtisanDetails";
import Not_Found from "../pages/NotFound";
import Under_Construction from "../pages/UnderConstruction";
import ScrollToTop from "../components/layout/ScrollToTop";

function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="artisans/:id" element={<Artisan_Details />} />
          <Route path="artisans" element={<Artisans_List />} />
          <Route path="under-construction" element={<Under_Construction />} />
          <Route path="*" element={<Not_Found />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;