// src/features/movies/components/MovieCard.jsx

const MovieCard = ({ movie, onViewCharacters }) => {
    const { title, director, year, image } = movie;

    return (
        <div className="group flex flex-col gap-4 bg-primary/5 p-4 rounded-xl border border-primary/10 hover:border-primary/40 transition-all">
            {/* Poster */}
            <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                <div
                    className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url("${image}")` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-primary text-xs font-bold tracking-widest uppercase italic">
                        Released {year}
                    </span>
                </div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    Directed by {director}
                </p>
            </div>

            {/* CTA */}
            <button
                onClick={() => onViewCharacters?.(movie)}
                className="mt-2 w-full py-3 bg-primary/20 hover:bg-primary text-primary hover:text-background-dark font-bold text-sm rounded transition-all uppercase tracking-widest flex items-center justify-center gap-2"
            >
                <span className="material-symbols-outlined text-sm">groups</span>
                View Characters
            </button>
        </div>
    );
};

export default MovieCard;