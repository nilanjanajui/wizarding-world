import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import Layout from "./components/Layout";

const Home = lazy(() => import("./components/home/Home"));
const Movies = lazy(() => import("./components/movies/Movies"));
const Characters = lazy(() => import("./components/characterdir/Characters"));
const FavCharacters = lazy(() => import("./components/characterdir/favcharacters/FavCharacters"));
const CharacterProfile = lazy(() => import("./components/characterdir/characterprofile/CharacterProfile"));
const WizardStats = lazy(() => import("./components/wizardstas/WizardStats"));
const NotFound = lazy(() => import("./components/NotFound"));
const SortingHat = lazy(() => import("./components/SortingHat"));

function PageLoader() {
  return (
    <div className="min-h-screen bg-background-dark flex items-center justify-center">
      <span className="material-symbols-outlined text-primary text-5xl animate-spin">
        autorenew
      </span>
    </div>
  );
}

export default function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/favorites" element={<FavCharacters />} />
              <Route path="/stats" element={<WizardStats />} />
              <Route path="/sorting-hat" element={<SortingHat />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/characters/:name" element={<CharacterProfile />} />
          </Routes>
        </Suspense>
      </Router>
    </FavoritesProvider>
  );
}