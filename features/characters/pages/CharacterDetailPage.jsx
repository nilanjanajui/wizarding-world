// src/features/characters/pages/CharacterDetailPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HERO_BG =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDOyzpoiMP82HGYcZWWjTuVtU3q9sSZaujelOvy7RSues_CUP6-heWo9XDymYZzfQq815fNZUZeRScx54D-Qf346_DrtxoM-0D-my7OdNbD65Gg9pi7QVhPxiJ0Ogof-a4iPZSMuQW7jaG0J_YkvTdyeADUOwn7hYF3FUBycbQtipAp9qg8i6LUdzXJ_6rxZlWDhQ8TTtjl6cB_gqTz5rvIW5PweRhtal8yVdrdmaXOgknnDdg6OCRVU9TAGpex84UWYTWpvmlby9R2";

const CHARACTER = {
    name: "Hermione Granger",
    quote: "The Brightest Witch of Her Age",
    image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAN2QxV_LZBaot3HPFhSz-Sm_niLtlVLr6OZYS_7ZcblcbLo16CmnzFbf4PL3rUJpicIEYpU6j35kZ44Tax_2QCBBIhvEWeJ0RcPfga7Bl_rUkSH2di4AUB5TEpoBvZOYc_7yuRwR5oUAMUFItdXnNIhC1_myJLyAjD4pabLWZiGbbwGBOK7UB0jmCuIRO44QP3QZJ-VqIDjH0bnWkAJzxWeZCSQ-NWjSK3Vq7sHRWo9J39R0oGmhTP1HrUsRXSVMJwGI2XrlpH45-W",
    attributes: {
        Wand: "Vine wood, Dragon heartstring",
        Patronus: "Otter",
        Boggart: "Professor McGonagall (Failure)",
        House: "Gryffindor",
    },
    spells: [
        {
            id: 1, icon: "auto_awesome", name: "Expecto Patronum",
            desc: "Conjures a silver guardian (an otter) to repel Dementors.",
        },
        {
            id: 2, icon: "air", name: "Wingardium Leviosa",
            desc: 'The Levitation Charm. Hermione mastered the "swish and flick" in first year.',
        },
        {
            id: 3, icon: "key", name: "Alohomora",
            desc: "The Unlocking Charm, used to open magically unprotected doors.",
        },
        {
            id: 4, icon: "flare", name: "Bluebell Flames",
            desc: "Produces waterproof, portable blue flames.",
        },
    ],
    timeline: [
        {
            id: 1, year: "Philosopher's Stone (1991)",
            event: "Starts her journey at Hogwarts, masters Wingardium Leviosa.",
        },
        {
            id: 2, year: "Prisoner of Azkaban (1993)",
            event: "Uses the Time-Turner to save Sirius Black and Buckbeak.",
        },
        {
            id: 3, year: "Deathly Hallows (1997–1998)",
            event: "Destroys Hufflepuff's Cup with a basilisk fang.",
        },
    ],
    artefacts: ["The Time-Turner", "Tales of Beedle the Bard", "Beaded Bag (Undetectable Extension Charm)"],
    relationships: [
        {
            id: 1, role: "Best Friend", name: "Harry Potter",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtrYHXyyu_tBCg7m6XWq1qvhdTLTEzC6I0e3bRP9egEfgkfF1Auy9cOOuxlfnJZ1eDphW-4Sg3Osy7r47Fi_o9xtAtyuGHL1zgi2rOL7PRArD8D3tpJyfZFoDm0a0mB2lcyzuxuoRcOuDpIQ8DmATHDj9oNzfQlZeW6yuidQnAedAcWUe80S__eL7NtriRUq1MpJeNSV2lSlFI2HZ--cwBiK6Uc-RLvjN3hBDNUwmzAFsOhesGFwTyhLD7T3chSv_Bh68XbGCqGUnN"
        },
        {
            id: 2, role: "Husband", name: "Ron Weasley",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbNkhpyMiJpqCtQVQGBWPLQy5fW5Lk3B1-7ruAjDhmzfODVX-VXivSnt6SOrVQ7ezLmARUhIk3sxiCAJFVhRSMlFr57Kfaq1TuO2I-1GUOECkWAN43_JD84SnQQIN9W1hbY9CM45vxWFYe0J_aNQ54-IMFxlz0wwyRTpcG4XRLMtLyF7dk2L-t1jlJBxnDj1aBWQ-W-UbZJVKlSDboB_oGgUIBOxTHuYPc_qhezlSh1uvVVgwtDNtaArhT9r1RHVc9HVdX3IGNF7qu"
        },
        {
            id: 3, role: "Mentor", name: "M. McGonagall",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1tuGizmNE0FePFf9t6i_xmd4DzgM4NJv-sPkmrvVsLi79gXazemeWX6UCTKs8OguFbYlOINwN8VSq5XTlcmRLUYa29LSizbWHd3kJS5TCwhS_a7vXYGvxA3A3a2J0wJMpEW5dUXup0U0BzbUqJCXCCRTu8qKMdoUKhpsNf3OumNTzr48PGXDRJD04ZGegAe0KXXOuTFrswCLgiURyik32udnkF-zAgAwIsHwMJHIVmM5cXWqqUC_O4Q3fpOfrhlH8PG29TUUZJxum"
        },
        {
            id: 4, role: "Friend", name: "Luna Lovegood",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8G3NEtLJLJNMM-fhdyXL-6Dz9mthX_3mH2NTIrosKXcwRmtVWqnYX5aOywvsbijuZ2BPI-6XsozUxSBrGpIEdgGJwZl5zAAKV1bquORKAOJLcJy0KF6u_xalvhPu_eFDvLn6cHOPk54EDZRr_CBTi-FzMOvMomLabW3-vNgkUAPDF2WD_DFiEOTHs99tKafh_tFMBh3PHceKW1n0JREionaWhSPaSpeByQ2M2M-cm8mcR6pFJo_X7FHqd2PH0ADygDDHJYHYzeq9A"
        },
    ],
};

const CharacterDetailPage = () => {
    const navigate = useNavigate();
    const [isFavorited, setIsFavorited] = useState(false);

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
            {/* Back Nav */}
            <header className="flex items-center justify-between border-b border-primary/20 px-6 py-4 md:px-20 lg:px-40 bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                    <span className="text-sm font-bold tracking-widest uppercase">Back to Directory</span>
                </button>
                <div className="flex items-center gap-6">
                    <h2 className="hidden md:block text-primary text-lg font-display italic">
                        Wizarding World Explorer
                    </h2>
                    <button
                        onClick={() => setIsFavorited((v) => !v)}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-background-dark transition-all"
                        aria-label="Toggle favorite"
                    >
                        <span
                            className="material-symbols-outlined"
                            style={{ fontVariationSettings: isFavorited ? "'FILL' 1" : "'FILL' 0" }}
                        >
                            favorite
                        </span>
                    </button>
                </div>
            </header>

            <main className="flex-1 px-4 md:px-20 lg:px-40 py-8 max-w-7xl mx-auto w-full">
                {/* Hero Banner */}
                <div className="relative w-full rounded-xl overflow-hidden mb-12 group">
                    <div
                        className="aspect-[21/9] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${HERO_BG}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 flex flex-col md:flex-row items-end md:items-center gap-6 w-full">
                        {/* Portrait */}
                        <div className="relative">
                            <div
                                className="size-32 md:size-48 rounded-xl border-4 border-primary bg-cover bg-center shadow-2xl"
                                style={{ backgroundImage: `url('${CHARACTER.image}')` }}
                            />
                            <div className="absolute -bottom-4 -right-4 bg-[#740001] text-[#e3a000] p-2 rounded-lg shadow-lg border border-[#e3a000]/30">
                                <span className="material-symbols-outlined text-3xl">shield</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-1">
                                {CHARACTER.name}
                            </h1>
                            <p className="text-lg md:text-xl text-slate-300 italic">
                                "{CHARACTER.quote}"
                            </p>
                        </div>
                        <button
                            onClick={() => setIsFavorited((v) => !v)}
                            className="bg-primary hover:bg-primary/90 text-background-dark px-8 py-3 rounded-lg font-bold tracking-wider uppercase text-sm transition-all shadow-[0_0_15px_rgba(212,175,53,0.3)]"
                        >
                            {isFavorited ? "Remove Favorite" : "Add to Favorites"}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left: Bio, Spells, Timeline */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Biography */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="material-symbols-outlined text-primary">auto_stories</span>
                                <h2 className="text-3xl font-display font-bold text-primary italic">
                                    Magical Biography
                                </h2>
                            </div>
                            <div className="text-slate-300 leading-relaxed text-lg bg-primary/5 p-6 border-l-2 border-primary/30">
                                <p className="mb-4">
                                    Born to Muggle parents, Hermione Jean Granger discovered her magical abilities
                                    and was accepted into Hogwarts School of Witchcraft and Wizardry. From her first
                                    year, she proved to be an exceptionally gifted student, often mastering spells
                                    well ahead of her peers.
                                </p>
                                <p>
                                    Her logic and immense knowledge were pivotal in the defeat of Lord Voldemort.
                                    Alongside Harry Potter and Ron Weasley, she navigated the complexities of the
                                    wizarding world with courage and an unwavering commitment to justice.
                                </p>
                            </div>
                        </section>

                        {/* Spells */}
                        <section>
                            <div className="flex items-center gap-3 mb-8">
                                <span className="material-symbols-outlined text-primary">auto_fix_high</span>
                                <h2 className="text-3xl font-display font-bold text-primary italic">
                                    Known Spells &amp; Charms
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {CHARACTER.spells.map(({ id, icon, name, desc }) => (
                                    <div
                                        key={id}
                                        className="p-4 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors group"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/30 group-hover:bg-primary group-hover:text-background-dark transition-all flex-shrink-0">
                                                <span className="material-symbols-outlined">{icon}</span>
                                            </div>
                                            <div>
                                                <h4 className="text-primary font-bold font-display text-lg italic">{name}</h4>
                                                <p className="text-slate-400 text-sm mt-1 leading-relaxed">{desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Timeline */}
                        <section>
                            <div className="flex items-center gap-3 mb-8">
                                <span className="material-symbols-outlined text-primary">history_edu</span>
                                <h2 className="text-3xl font-display font-bold text-primary italic">
                                    Cinematic Appearances
                                </h2>
                            </div>
                            <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-4 before:w-0.5 before:bg-primary/20">
                                {CHARACTER.timeline.map(({ id, year, event }) => (
                                    <div key={id} className="relative pl-12">
                                        <div className="absolute left-2.5 top-1.5 size-3 rounded-full bg-primary ring-4 ring-primary/20" />
                                        <h4 className="text-primary font-bold">{year}</h4>
                                        <p className="text-slate-400 text-sm">{event}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right: Attributes, Relationships, Artefacts */}
                    <div className="space-y-12">
                        {/* Attributes */}
                        <section className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                            <h3 className="text-xl font-display font-bold text-primary mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined">magic_button</span>
                                Attributes
                            </h3>
                            <ul className="space-y-4">
                                {Object.entries(CHARACTER.attributes).map(([key, val]) => (
                                    <li
                                        key={key}
                                        className="flex justify-between items-center border-b border-primary/10 pb-2 last:border-0"
                                    >
                                        <span className="text-slate-400">{key}</span>
                                        <span className={`font-medium ${key === "House" ? "text-[#e3a000] font-bold" : "text-slate-100"}`}>
                                            {val}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Relationships */}
                        <section>
                            <h3 className="text-xl font-display font-bold text-primary mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined">groups</span>
                                Key Relationships
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {CHARACTER.relationships.map(({ id, role, name, image }) => (
                                    <div
                                        key={id}
                                        className="flex items-center gap-3 p-2 rounded-lg bg-primary/5 border border-primary/10"
                                    >
                                        <div
                                            className="size-10 rounded-full bg-cover bg-center border border-primary/30 flex-shrink-0"
                                            style={{ backgroundImage: `url('${image}')` }}
                                        />
                                        <div>
                                            <p className="text-xs text-slate-400">{role}</p>
                                            <p className="text-sm font-bold text-slate-100">{name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Artefacts */}
                        <section className="bg-background-dark border-2 border-primary/10 rounded-xl p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 opacity-10">
                                <span className="material-symbols-outlined text-6xl text-primary">hourglass_empty</span>
                            </div>
                            <h3 className="text-xl font-display font-bold text-primary mb-4">Notable Artefacts</h3>
                            <div className="space-y-3">
                                {CHARACTER.artefacts.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">star</span>
                                        <p className="text-sm text-slate-300">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="mt-20 border-t border-primary/10 py-12 px-6 md:px-20 lg:px-40 bg-background-dark/50">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-4 text-primary">
                        <span className="material-symbols-outlined text-4xl">castle</span>
                        <div>
                            <p className="font-display font-bold text-lg">Hogwarts Digital Archives</p>
                            <p className="text-xs text-slate-500 italic">"Draco Dormiens Nunquam Titillandus"</p>
                        </div>
                    </div>
                    <div className="flex gap-8 text-slate-400 text-sm">
                        {["Library", "Great Hall", "Common Rooms", "Owl Post"].map((link) => (
                            <a key={link} href="#" className="hover:text-primary transition-colors">{link}</a>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CharacterDetailPage;