import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import Home from "./components/home/Home";
import Movies from "./components/movies/Movies";
import Characters from "./components/characterdir/Characters";
import FavCharacters from "./components/characterdir/favcharacters/FavCharacters";
import CharacterProfile from "./components/characterdir/characterprofile/CharacterProfile";
import WizardStats from "./components/wizardstas/WizardStats";
import NotFound from "./components/NotFound";
import SortingHat from "./components/SortingHat"; // adjust path

export default function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/characters" element={<Characters />} />

          <Route path="/sorting-hat" element={<SortingHat />} />
          <Route path="/characters/:name" element={<CharacterProfile />} />
          <Route path="/favorites" element={<FavCharacters />} />
          <Route path="/stats" element={<WizardStats />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}