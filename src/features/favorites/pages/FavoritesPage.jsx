// src/features/favorites/pages/FavoritesPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

const FAVORITE_CHARACTERS = [
    {
        id: 1, name: "Harry Potter", house: "Gryffindor", bloodStatus: "Half-blood",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDkaPZbmK_Y25Ga48rfEpwvrUPoujR4pDimC3FcC7t1BB9VW0oWQ7DKMvLepREUPInaYn9ydR4ymDuusMNoeLEn767sq0HfAyMUbqkXktq9zioCVmpaC9XavAZioVf7IieEDjN09txn4U3bi4kCUAJr-jtIkUhhETXSsomqYMGyjpuDo-jbdkowjabEB28SEmhGJhQiNlSguknBu8s2icDI2vWke4NHB8G-Tqe-4fVng35QIdlaeRNQRid2PeXgH7znEGvoFyiYAV0",
    },
    {
        id: 2, name: "Hermione Granger", house: "Gryffindor", bloodStatus: "Muggle-born",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2Rp7hfbDIpg_VOsOvb5WWsEEWIK51d8cejdU3tkH5ChH_jLzALM37KBAJB3dFl9asSB3YDZDSPHD8tDb5t7lODrOeWxRgOtYMdFtljOvBUeKF9a7iZGxn5Pur7fTssosrY-e-zHwKToZ_gJwjyeG61Q5fwysP5L67c9Ucs10EnoYTUhnMZCgeueXegfNJpMuM2g8xSi88tEdHVNgC8xEFwX3tQHyK_hC8igw0BZohFdiyFMdk0GDLZJk6MGENOyFvSrqHP_8536d7",
    },
    {
        id: 3, name: "Luna Lovegood", house: "Ravenclaw", bloodStatus: "Pure-blood",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8ZIa3I25ZT-d6gMTeRLNP31cItoTXfYsAbySTL4GplZoqHoWOmIgh7-0sS6bk-iwy-VHng6afEvwzmapcmYMCb7Ar96xbWsWvQueZUQYOmP6pPsPvOFhPt_Sc08olLAcqJhgk57epaMuanndkfK8BgbFr_NABDihmj_JwARLBkiYI9VURN1tvPyC3xt9hOS5pfLVnrYxypzcSV_DjivQ6E-o6fgbmobLH6wMNYvBVzkvrfiCSTUtvjF2_Xv2cLjLRXdXt0KI3njc_",
    },
    {
        id: 4, name: "Sirius Black", house: "Gryffindor", bloodStatus: "Pure-blood",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFdRe-m8kQUL88B9z4ulJLRjv8-vkIdfjK-vg7D4VKfKusr-Bvar6jIQOC72OJEsazF0accQSxRYZgligP_f63PlSF1y5wf4CHSNxAXirF3vIb9soYlhlzhB-GJyjbWFt_G-LWUI52VKxQ3hWw4IWO3nBhm1wwDjxMAXh6wDtYrn5YrduhdKrH0uNrjzI0yN90uWk5_wUCIr9tQ88Taef6PnpWPowlxZwn20oVygeMFURVixe8tcA7i8U5gFg_5Qvq2fhbbvGVjyj_",
    },
];

const USER = {
    name: "Albus Dumbledore",
    role: "Headmaster Level 42",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhMbXEzTT9zgtG_9rSNc2loaTYcBCtOi6PKs4N7HaiiCLDiF5KXnj0gUdlzRnQmCJIGvoxpGMK6wkXgtaVtvhV29zOZf0s0HhuTw9sQLxfX6ROb86jmgxLeURUZbJpzmEJLOc-lH1wfnJJAY3NYHbLv8sPC1UjGQnyoA9bBeoSGIXL2ACsC8DvmXHHbkW6u7TcKVUfcgH70fYYGdgZuyhDA30jZrlcV1KMTxKsUx8C2rjENHnPRmsbcPL43J8fMha1P1lq3WIXsZug",
};

const NAV_LINKS = [
    { icon: "explore", label: "Discover", path: "/" },
    { icon: "library_books", label: "Library", path: "/movies" },
    { icon: "favorite", label: "Favorites", path: "/favorites", active: true },
    { icon: "settings", label: "Settings", path: "#" },
];

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState(new Set(FAVORITE_CHARACTERS.map((c) => c.id)));

    const handleRemove = (id) => {
        setFavorites((prev) => {
            const next = new Set(prev);
            next.delete(id);
            return next;
        });
    };

    const visibleFavorites = FAVORITE_CHARACTERS.filter((c) => favorites.has(c.id));

    return (
        <main className="flex-1 px-6 py-8 md:px-20 lg:px-40">
            <div className="flex flex-col md:flex-row gap-12">
                {/* Sidebar */}
                <aside className="w-full md:w-64 flex flex-col gap-8">
                    {/* User Card */}
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                        <div
                            className="w-12 h-12 rounded-full overflow-hidden bg-cover bg-center border border-primary/20 flex-shrink-0"
                            style={{ backgroundImage: `url('${USER.image}')` }}
                        />
                        <div className="flex flex-col">
                            <h1 className="text-slate-900 dark:text-slate-100 font-bold text-sm">{USER.name}</h1>
                            <p className="text-primary text-xs font-medium">{USER.role}</p>
                        </div>
                    </div>

                    {/* Sidebar Nav */}
                    <nav className="flex flex-col gap-1">
                        {NAV_LINKS.map(({ icon, label, path, active }) => (
                            <Link
                                key={label}
                                to={path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${active
                                        ? "bg-primary text-background-dark shadow-lg shadow-primary/20 font-bold"
                                        : "text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary"
                                    }`}
                            >
                                <span
                                    className="material-symbols-outlined"
                                    style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}
                                >
                                    {icon}
                                </span>
                                <span className="text-sm">{label}</span>
                            </Link>
                        ))}
                    </nav>
                </aside>

                {/* Main Content */}
                <div className="flex-1">
                    <div className="mb-10">
                        <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-slate-100 uppercase mb-2">
                            Favorite Characters
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-lg">
                            Your personal assembly of legendary witches, wizards, and magical beings.
                        </p>
                    </div>

                    {/* Favorites Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {visibleFavorites.map(({ id, name, house, bloodStatus, image }) => (
                            <div
                                key={id}
                                className="group relative flex flex-col gap-3 p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-primary/5"
                            >
                                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
                                    {/* Remove Button */}
                                    <div className="absolute top-2 right-2 z-10">
                                        <button
                                            onClick={() => handleRemove(id)}
                                            className="w-8 h-8 rounded-full bg-background-dark/80 flex items-center justify-center text-primary backdrop-blur-sm hover:text-red-400 transition-colors"
                                            aria-label="Remove from favorites"
                                        >
                                            <span
                                                className="material-symbols-outlined text-lg"
                                                style={{ fontVariationSettings: "'FILL' 1" }}
                                            >
                                                favorite
                                            </span>
                                        </button>
                                    </div>
                                    <div
                                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url('${image}')` }}
                                    />
                                </div>
                                <div className="px-1">
                                    <h3 className="text-slate-900 dark:text-slate-100 font-bold text-lg leading-tight">
                                        {name}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30 uppercase font-bold">
                                            {house}
                                        </span>
                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-400 uppercase font-bold">
                                            {bloodStatus}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Discover More CTA */}
                    <div className="mt-20 flex flex-col items-center justify-center text-center py-12 px-6 rounded-3xl bg-primary/5 border-2 border-dashed border-primary/20">
                        <div className="w-24 h-24 mb-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-5xl">magic_button</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                            Want to discover more?
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 max-w-md mb-8">
                            Tap the heart icon on any character's page to instantly add them to your magical collection.
                        </p>
                        <Link
                            to="/characters"
                            className="px-8 py-3 bg-primary text-background-dark rounded-xl font-bold text-sm tracking-widest uppercase hover:brightness-110 transition-all"
                        >
                            Explore Characters
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default FavoritesPage;