import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Artisans_List from "../pages/Artisans_List";
import Artisan_Details from "../pages/Artisan_Details";
import Not_Found from "../pages/Not_Found";
import Under_Construction from "../pages/Under_Construction";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artisans" element={<Artisans_List />} />
        <Route path="/artisan/:id" element={<Artisan_Details />} />
        <Route path="/under-construction" element={<Under_Construction />} />
        <Route path="*" element={<Not_Found />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;