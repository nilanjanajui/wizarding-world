// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import MoviesPage from "../features/movies/pages/MoviesPage";
import CharactersPage from "../features/characters/pages/CharactersPage";
import CharacterDetailPage from "../features/characters/pages/CharacterDetailPage";
import FavoritesPage from "../features/favorites/pages/FavoritesPage";
import StatsPage from "../features/stats/pages/StatsPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/characters" element={<CharactersPage />} />
                <Route path="/characters/:id" element={<CharacterDetailPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/stats" element={<StatsPage />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;