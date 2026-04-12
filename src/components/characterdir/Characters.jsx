import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { useFavorites } from "../../context/FavoritesContext";
import characterImages from "../../data/characterImages";

const HOUSES = ["All", "Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];

const HOUSE_BADGE = {
  Gryffindor: "bg-primary/90 text-background-dark",
  Slytherin: "bg-slate-700 text-white",
  Ravenclaw: "bg-blue-800 text-white",
  Hufflepuff: "bg-yellow-600 text-white",
};

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeHouse, setActiveHouse] = useState("All");
  const [visibleCount, setVisibleCount] = useState(16);
  const { toggleFavorite, isFavorite } = useFavorites();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((r) => r.json())
      .then((data) => {
        const enriched = data.map((c) => ({
          ...c,
          image: characterImages[c.name] || c.image || null, // ← local first
        }));
        setCharacters(enriched);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    return characters.filter((c) => {
      const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
      const matchesHouse =
        activeHouse === "All" ||
        c.house?.toLowerCase() === activeHouse.toLowerCase();
      return matchesSearch && matchesHouse;
    });
  }, [characters, search, activeHouse]);

  const visible = filtered.slice(0, visibleCount);

  const handleViewProfile = (character) => {
    navigate(`/characters/${encodeURIComponent(character.name)}`, {
      state: { character },
    });
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display">
      <div className="flex flex-col h-full grow">
        <Navbar />

        <main className="max-w-7xl mx-auto w-full px-6 py-12 lg:px-20">
          {/* Header */}
          <div className="flex flex-col gap-4 mb-10">
            <h1 className="text-slate-900 dark:text-slate-100 text-6xl font-black leading-tight tracking-tight uppercase italic">
              Characters
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-xl font-normal max-w-2xl">
              Discover the legends, the heroes, and the villains of the Wizarding World.
            </p>
          </div>

          {/* Search + Filters */}
          <div className="flex flex-col gap-6 mb-12">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                search
              </span>
              <input
                className="w-full bg-slate-100 dark:bg-card-dark border-none focus:ring-2 focus:ring-primary rounded-xl py-5 pl-14 pr-6 text-lg text-slate-900 dark:text-slate-100 placeholder:text-slate-400 shadow-lg"
                placeholder="Search for a wizard or witch..."
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setVisibleCount(16);
                }}
              />
            </div>
            <div className="flex flex-wrap gap-3">
              {HOUSES.map((house) => (
                <button
                  key={house}
                  onClick={() => {
                    setActiveHouse(house);
                    setVisibleCount(16);
                  }}
                  className={`px-6 py-2 rounded-full font-bold text-sm border transition-colors ${activeHouse === house
                      ? "bg-primary text-background-dark border-primary"
                      : "bg-slate-100 dark:bg-card-dark hover:bg-primary/20 text-slate-900 dark:text-slate-100 border border-primary/10"
                    }`}
                >
                  {house}
                </button>
              ))}
            </div>
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="flex flex-col items-center gap-4 text-primary">
                <span className="material-symbols-outlined text-5xl animate-spin">
                  autorenew
                </span>
                <p className="text-lg font-medium">Summoning wizards...</p>
              </div>
            </div>
          )}

          {/* Grid */}
          {!loading && (
            <>
              {visible.length === 0 ? (
                <div className="text-center py-20 text-slate-400">
                  <span className="material-symbols-outlined text-5xl">search_off</span>
                  <p className="mt-4 text-lg">No characters found for "{search}"</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {visible.map((char, idx) => {
                    const house = char.house || "Unknown";
                    const badgeClass = HOUSE_BADGE[house] || "bg-slate-600 text-white";
                    const fav = isFavorite(char.name);
                    const imgSrc = char.image || characterImages[char.name];

                    return (
                      <div
                        key={`${char.name}-${idx}`}
                        className="group bg-slate-100 dark:bg-card-dark rounded-xl overflow-hidden border border-primary/10 hover:border-primary/40 transition-all flex flex-col"
                      >
                        <div className="relative aspect-3/4 overflow-hidden bg-primary/5">
                          {imgSrc ? (
                            <img
                              src={imgSrc}
                              alt={char.name}
                              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                              onError={(e) => {
                                e.target.style.display = "none";
                                e.target.nextSibling.style.display = "flex";
                              }}
                            />
                          ) : null}
                          {/* Fallback placeholder */}
                          <div
                            className={`w-full h-full bg-primary/10 items-center justify-center text-primary flex-col gap-2 ${imgSrc ? "hidden" : "flex"
                              }`}
                          >
                            <span className="material-symbols-outlined text-6xl">person</span>
                            <span className="text-xs text-primary/60 font-medium">No image</span>
                          </div>

                          {/* Favorite button */}
                          <div className="absolute top-3 right-3">
                            <button
                              onClick={() => toggleFavorite(char)}
                              className="bg-black/40 backdrop-blur-md p-2 rounded-full text-white hover:text-red-500 transition-colors"
                            >
                              <span
                                className={`material-symbols-outlined text-xl ${fav ? "filled-icon text-red-500" : ""
                                  }`}
                              >
                                favorite
                              </span>
                            </button>
                          </div>

                          {/* House badge */}
                          {house !== "Unknown" && (
                            <div className="absolute bottom-3 left-3">
                              <span
                                className={`${badgeClass} text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`}
                              >
                                {house}
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="p-5 flex flex-col gap-2">
                          <h3 className="text-xl font-bold dark:text-white">{char.name}</h3>
                          <div className="space-y-1 text-sm text-slate-500 dark:text-slate-400">
                            <div className="flex justify-between">
                              <span>Actor</span>
                              <span className="text-slate-900 dark:text-slate-200">
                                {char.actor || "Unknown"}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Status</span>
                              <span
                                className={`font-medium italic ${char.alive ? "text-green-500" : "text-slate-400"
                                  }`}
                              >
                                {char.alive ? "Alive" : "Deceased"}
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={() => handleViewProfile(char)}
                            className="mt-4 w-full border border-primary text-primary hover:bg-primary hover:text-background-dark py-2 rounded-lg font-bold text-sm transition-colors uppercase tracking-widest"
                          >
                            View Profile
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Load More */}
              {visibleCount < filtered.length && (
                <div className="flex justify-center mt-20">
                  <button
                    onClick={() => setVisibleCount((v) => v + 16)}
                    className="group flex items-center gap-3 bg-primary/10 border border-primary text-primary px-10 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-primary hover:text-background-dark transition-all"
                  >
                    Load More Wizards
                    <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">
                      keyboard_double_arrow_down
                    </span>
                  </button>
                </div>
              )}
            </>
          )}
        </main>

        {/* Footer */}
        <footer className="mt-20 border-t border-primary/10 bg-slate-50 dark:bg-background-dark py-12 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-primary font-bold text-lg">
                <span className="material-symbols-outlined">auto_fix_high</span>
                Potter Explorer
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Magic is only a click away. Mischief Managed.
              </p>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-tighter">
              © 2026 Potter Explorer Universe
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}