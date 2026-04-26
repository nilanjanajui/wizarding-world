import { useState, useEffect, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion as Motion } from "framer-motion";
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

const HOUSE_COLORS = {
  Gryffindor: "border-red-700/40",
  Slytherin: "border-green-800/40",
  Ravenclaw: "border-blue-800/40",
  Hufflepuff: "border-yellow-600/40",
};

export default function Characters() {
  const [searchParams] = useSearchParams();

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(() => searchParams.get("search") || "");
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
          image: characterImages[c.name] || c.image || null,
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

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setVisibleCount(16);
  };

  const handleHouseChange = (house) => {
    setActiveHouse(house);
    setVisibleCount(16);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display">
      <div className="flex flex-col h-full grow">
        <Navbar />

        <main className="max-w-7xl mx-auto w-full px-6 py-12 lg:px-20">

          {/* Header */}
          <Motion.div
            className="flex flex-col gap-4 mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-slate-900 dark:text-slate-100 text-6xl font-black leading-tight tracking-tight uppercase italic">
              Characters
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-xl font-normal max-w-2xl">
              Discover the legends, the heroes, and the villains of the Wizarding World.
            </p>
          </Motion.div>

          {/* Search + Filters */}
          <Motion.div
            className="flex flex-col gap-6 mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {/* Search Input */}
            <div className="relative w-full group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 group-focus-within:text-primary transition-colors">
                search
              </span>
              <input
                className="w-full bg-slate-100 dark:bg-card-dark border border-primary/10 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl py-5 pl-14 pr-6 text-lg text-slate-900 dark:text-slate-100 placeholder:text-slate-400 shadow-lg transition-all outline-none"
                placeholder="Search for a wizard or witch..."
                type="text"
                value={search}
                onChange={handleSearchChange}
              />
              {search && (
                <button
                  onClick={() => { setSearch(""); setVisibleCount(16); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              )}
            </div>

            {/* House Filter Pills */}
            <div className="flex flex-wrap gap-3">
              {HOUSES.map((house) => (
                <button
                  key={house}
                  onClick={() => handleHouseChange(house)}
                  className={`px-6 py-2 rounded-full font-bold text-sm border transition-all hover:scale-105 ${
                    activeHouse === house
                      ? "bg-primary text-background-dark border-primary shadow-lg shadow-primary/20"
                      : "bg-slate-100 dark:bg-card-dark hover:bg-primary/10 text-slate-900 dark:text-slate-100 border-primary/10"
                  }`}
                >
                  {house}
                </button>
              ))}

              {!loading && (
                <span className="ml-auto self-center text-sm text-slate-400 font-medium">
                  {filtered.length} wizard{filtered.length !== 1 ? "s" : ""} found
                </span>
              )}
            </div>
          </Motion.div>

          {/* Loading Skeletons */}
          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden border border-primary/10 flex flex-col animate-pulse"
                >
                  <div className="aspect-3/4 bg-primary/10" />
                  <div className="p-5 flex flex-col gap-3">
                    <div className="h-5 bg-primary/10 rounded w-3/4" />
                    <div className="h-3 bg-primary/5 rounded w-1/2" />
                    <div className="h-3 bg-primary/5 rounded w-1/3" />
                    <div className="h-9 bg-primary/10 rounded-lg mt-2" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Grid */}
          {!loading && (
            <>
              {visible.length === 0 ? (
                <Motion.div
                  className="text-center py-20 text-slate-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <span className="material-symbols-outlined text-6xl text-primary/20">search_off</span>
                  <p className="mt-4 text-lg">
                    No characters found for{" "}
                    <span className="text-primary font-bold">"{search}"</span>
                  </p>
                  <button
                    onClick={() => { setSearch(""); setActiveHouse("All"); }}
                    className="mt-6 px-6 py-2 border border-primary/30 text-primary rounded-lg text-sm font-bold hover:bg-primary/10 transition-colors"
                  >
                    Clear Filters
                  </button>
                </Motion.div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {visible.map((char, idx) => {
                    const house = char.house || "Unknown";
                    const badgeClass = HOUSE_BADGE[house] || "bg-slate-600 text-white";
                    const houseCardBorder = HOUSE_COLORS[house] || "border-primary/10";
                    const fav = isFavorite(char.name);
                    const imgSrc = char.image || characterImages[char.name];

                    return (
                      <Motion.div
                        key={`${char.name}-${idx}`}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.04, duration: 0.35 }}
                        className={`group bg-slate-100 dark:bg-card-dark rounded-xl overflow-hidden border hover:border-primary/50 transition-all duration-300 flex flex-col hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 ${houseCardBorder}`}
                      >
                        {/* Image */}
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

                          {/* Fallback */}
                          <div
                            className={`w-full h-full bg-primary/10 items-center justify-center text-primary flex-col gap-2 ${
                              imgSrc ? "hidden" : "flex"
                            }`}
                          >
                            <span className="material-symbols-outlined text-6xl">person</span>
                            <span className="text-xs text-primary/60 font-medium">No image</span>
                          </div>

                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-linear-to-t from-background-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          {/* Favorite button */}
                          <div className="absolute top-3 right-3">
                            <button
                              onClick={() => toggleFavorite(char)}
                              className={`p-2 rounded-full backdrop-blur-md transition-all ${
                                fav
                                  ? "bg-red-500/20 border border-red-500/40"
                                  : "bg-black/40 hover:bg-red-500/20"
                              }`}
                            >
                              <span
                                className={`material-symbols-outlined text-xl transition-colors ${
                                  fav ? "filled-icon text-red-500" : "text-white hover:text-red-400"
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

                        {/* Card Body */}
                        <div className="p-5 flex flex-col gap-2 flex-1">
                          <h3 className="text-xl font-bold dark:text-white group-hover:text-primary transition-colors">
                            {char.name}
                          </h3>
                          <div className="space-y-1 text-sm text-slate-500 dark:text-slate-400 flex-1">
                            <div className="flex justify-between">
                              <span>Actor</span>
                              <span className="text-slate-900 dark:text-slate-200 text-right max-w-[60%] truncate">
                                {char.actor || "Unknown"}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Species</span>
                              <span className="text-slate-900 dark:text-slate-200 capitalize">
                                {char.species || "Human"}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Status</span>
                              <span
                                className={`font-bold text-xs px-2 py-0.5 rounded-full ${
                                  char.alive
                                    ? "bg-green-500/10 text-green-500"
                                    : "bg-slate-500/10 text-slate-400"
                                }`}
                              >
                                {char.alive ? "● Alive" : "● Deceased"}
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={() => handleViewProfile(char)}
                            className="mt-4 w-full border border-primary text-primary hover:bg-primary hover:text-background-dark py-2.5 rounded-lg font-bold text-sm transition-all uppercase tracking-widest hover:shadow-lg hover:shadow-primary/20"
                          >
                            View Profile
                          </button>
                        </div>
                      </Motion.div>
                    );
                  })}
                </div>
              )}

              {/* Load More */}
              {visibleCount < filtered.length && (
                <div className="flex flex-col items-center gap-3 mt-20">
                  <p className="text-slate-500 text-sm">
                    Showing {visibleCount} of {filtered.length} characters
                  </p>
                  <button
                    onClick={() => setVisibleCount((v) => v + 16)}
                    className="group flex items-center gap-3 bg-primary/10 border border-primary text-primary px-10 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-primary hover:text-background-dark transition-all hover:shadow-lg hover:shadow-primary/20"
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