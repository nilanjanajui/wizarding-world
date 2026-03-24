// src/features/characters/pages/CharactersPage.jsx
import { useState } from "react";
import CharacterCard from "../components/CharacterCard";
import CHARACTERS from "../constants/charactersData";

const HOUSES = ["All", "Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
const VISIBLE_STEP = 8;

const CharactersPage = () => {
    const [search, setSearch] = useState("");
    const [activeHouse, setActiveHouse] = useState("All");
    const [favorites, setFavorites] = useState(new Set());
    const [visibleCount, setVisibleCount] = useState(VISIBLE_STEP);

    const filtered = CHARACTERS.filter((c) => {
        const matchesHouse = activeHouse === "All" || c.house === activeHouse;
        const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
        return matchesHouse && matchesSearch;
    });

    const handleToggleFavorite = (character) => {
        setFavorites((prev) => {
            const next = new Set(prev);
            next.has(character.id) ? next.delete(character.id) : next.add(character.id);
            return next;
        });
    };

    return (
        <main className="max-w-7xl mx-auto w-full px-6 py-12 lg:px-20">
            {/* Header */}
            <div className="flex flex-col gap-4 mb-10">
                <h1 className="text-slate-900 dark:text-slate-100 text-6xl font-black leading-tight tracking-tight uppercase italic">
                    Characters
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-xl font-normal max-w-2xl">
                    Discover the legends, the heroes, and the villains of the Wizarding
                    World. Explore their history, houses, and legacies.
                </p>
            </div>

            {/* Search + Filters */}
            <div className="flex flex-col gap-6 mb-12">
                <div className="relative w-full">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                        search
                    </span>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search for a wizard or witch..."
                        className="w-full bg-slate-100 dark:bg-card-dark border-none focus:ring-2 focus:ring-primary rounded-xl py-5 pl-14 pr-6 text-lg text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-lg"
                    />
                </div>

                {/* House Filter Tabs */}
                <div className="flex flex-wrap gap-3">
                    {HOUSES.map((house) => (
                        <button
                            key={house}
                            onClick={() => setActiveHouse(house)}
                            className={`px-6 py-2 rounded-full font-bold text-sm transition-all active:scale-95 ${activeHouse === house
                                    ? "bg-primary text-background-dark"
                                    : "bg-slate-100 dark:bg-card-dark hover:bg-primary/20 text-slate-900 dark:text-slate-100 border border-primary/10"
                                }`}
                        >
                            {house}
                        </button>
                    ))}
                </div>
            </div>

            {/* Character Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filtered.slice(0, visibleCount).map((character) => (
                    <CharacterCard
                        key={character.id}
                        character={character}
                        isFavorited={favorites.has(character.id)}
                        onToggleFavorite={handleToggleFavorite}
                    />
                ))}
            </div>

            {/* Load More */}
            {visibleCount < filtered.length && (
                <div className="flex justify-center mt-20">
                    <button
                        onClick={() => setVisibleCount((n) => n + VISIBLE_STEP)}
                        className="group flex items-center gap-3 bg-primary/10 border border-primary text-primary px-10 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-primary hover:text-background-dark transition-all shadow-lg hover:shadow-primary/20"
                    >
                        Load More Wizards
                        <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">
                            keyboard_double_arrow_down
                        </span>
                    </button>
                </div>
            )}
        </main>
    );
};

export default CharactersPage;