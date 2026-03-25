// src/features/characters/components/CharacterCard.jsx
import { Link } from "react-router-dom";
import { HOUSE_COLORS } from "../constants/charactersData";

const CharacterCard = ({ character, isFavorited, onToggleFavorite }) => {
    const { id, name, actor, house, status, image } = character;
    const houseClass = HOUSE_COLORS[house] || "bg-slate-600 text-white";
    const isAlive = status === "Alive";

    return (
        <div className="group bg-slate-100 dark:bg-card-dark rounded-xl overflow-hidden border border-primary/10 hover:border-primary/40 transition-all flex flex-col">
            {/* Image */}
            <div className="relative aspect-[3/4] overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Favorite Button */}
                <div className="absolute top-3 right-3">
                    <button
                        onClick={() => onToggleFavorite?.(character)}
                        className="bg-black/40 backdrop-blur-md p-2 rounded-full text-white hover:text-red-500 transition-colors"
                        aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
                    >
                        <span
                            className="material-symbols-outlined text-xl"
                            style={{
                                fontVariationSettings: isFavorited ? "'FILL' 1" : "'FILL' 0",
                                color: isFavorited ? "#ef4444" : undefined,
                            }}
                        >
                            favorite
                        </span>
                    </button>
                </div>
                {/* House Badge */}
                <div className="absolute bottom-3 left-3">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${houseClass}`}>
                        {house}
                    </span>
                </div>
            </div>

            {/* Info */}
            <div className="p-5 flex flex-col gap-2">
                <h3 className="text-xl font-bold dark:text-white">{name}</h3>
                <div className="space-y-1 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex justify-between">
                        <span>Actor</span>
                        <span className="text-slate-900 dark:text-slate-200">{actor}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Status</span>
                        <span className={`font-medium italic ${isAlive ? "text-green-500" : "text-slate-400"}`}>
                            {status}
                        </span>
                    </div>
                </div>

                <Link
                    to={`/characters/${id}`}
                    className="mt-4 w-full border border-primary text-primary hover:bg-primary hover:text-background-dark py-2 rounded-lg font-bold text-sm transition-colors uppercase tracking-widest text-center block"
                >
                    View Profile
                </Link>
            </div>
        </div>
    );
};

export default CharacterCard;