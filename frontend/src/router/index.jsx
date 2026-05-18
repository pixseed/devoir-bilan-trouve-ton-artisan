// index.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import Home from "../pages/Home";
import Artisans_List from "../pages/Artisans_List";
import Artisan_Details from "../pages/Artisan_Details";
import Not_Found from "../pages/Not_Found";
import Under_Construction from "../pages/Under_Construction";
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