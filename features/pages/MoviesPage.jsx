// src/features/movies/pages/MoviesPage.jsx
import { useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import MOVIES from "../constants/moviesData";

const MoviesPage = () => {
    const [selectedMovie, setSelectedMovie] = useState(null);

    return (
        <>
            <main className="flex-1 flex flex-col px-6 md:px-20 py-10 max-w-[1440px] mx-auto w-full">
                {/* Page Header */}
                <section className="mb-12">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-primary/80 mb-2">
                            <span className="material-symbols-outlined text-sm">auto_awesome</span>
                            <span className="text-xs font-bold uppercase tracking-widest">
                                The Cinematic Journey
                            </span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter text-slate-900 dark:text-slate-100 italic uppercase">
                            MOVIES
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
                            Explore the legendary films of the Wizarding World, from the boy
                            who lived to the final battle for Hogwarts.
                        </p>
                    </div>
                </section>

                {/* Movie Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {MOVIES.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            onViewCharacters={setSelectedMovie}
                        />
                    ))}
                </div>
            </main>

            {/* Modal */}
            {selectedMovie && (
                <MovieModal
                    movie={selectedMovie}
                    onClose={() => setSelectedMovie(null)}
                />
            )}
        </>
    );
};

export default MoviesPage;