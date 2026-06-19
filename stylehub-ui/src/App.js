import { BrowserRouter, Route, Routes } from "react-router-dom";

import CreatorPage from "./pages/CreatorPage";
import AuthPage from "./pages/AuthPage";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import OutfitDetails from "./pages/OutfitDetails";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/creator" element={<CreatorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<AuthPage />} />

        {/* PUBLIC VIEW OF OUTFITS */}
        <Route path="/outfits" element={<OutfitDetails />} />

        {/* PROTECTED ACTIONS (later use) */}
        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <div>Favorites Page</div>
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;