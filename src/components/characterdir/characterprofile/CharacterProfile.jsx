import { useLocation, useNavigate } from "react-router-dom";
import { useFavorites } from "../../../context/FavoritesContext";

// Static profile enrichment for Hermione (shown as default / fallback)
const HERMIONE_DATA = {
  name: "Hermione Granger",
  house: "Gryffindor",
  actor: "Emma Watson",
  alive: true,
  ancestry: "Muggle-born",
  quote: '"The Brightest Witch of Her Age"',
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAN2QxV_LZBaot3HPFhSz-Sm_niLtlVLr6OZYS_7ZcblcbLo16CmnzFbf4PL3rUJpicIEYpU6j35kZ44Tax_2QCBBIhvEWeJ0RcPfga7Bl_rUkSH2di4AUB5TEpoBvZOYc_7yuRwR5oUAMUFItdXnNIhC1_myJLyAjD4pabLWZiGbbwGBOK7UB0jmCuIRO44QP3QZJ-VqIDjH0bnWkAJzxWeZCSQ-NWjSK3Vq7sHRWo9J39R0oGmhTP1HrUsRXSVMJwGI2XrlpH45-W",
  heroBg:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDOyzpoiMP82HGYcZWWjTuVtU3q9sSZaujelOvy7RSues_CUP6-heWo9XDymYZzfQq815fNZUZeRScx54D-Qf346_DrtxoM-0D-my7OdNbD65Gg9pi7QVhPxiJ0Ogof-a4iPZSMuQW7jaG0J_YkvTdyeADUOwn7hYF3FUBycbQtipAp9qg8i6LUdzXJ_6rxZlWDhQ8TTtjl6cB_gqTz5rvIW5PweRhtal8yVdrdmaXOgknnDdg6OCRVU9TAGpex84UWYTWpvmlby9R2",
  wand: "Vine wood, Dragon heartstring",
  patronus: "Otter",
  boggart: "Professor McGonagall (Failure)",
  biography: `Born to Muggle parents, Hermione Jean Granger discovered her magical abilities and was accepted into Hogwarts School of Witchcraft and Wizardry. From her first year, she proved to be an exceptionally gifted student, often mastering spells well ahead of her peers.

Her logic and immense knowledge were pivotal in the defeat of Lord Voldemort. Alongside Harry Potter and Ron Weasley, she navigated the complexities of the wizarding world with courage and an unwavering commitment to justice, notably founding S.P.E.W. to advocate for house-elf rights.`,
  spells: [
    { name: "Expecto Patronum", icon: "auto_awesome", desc: "Conjures a silver guardian (an otter for Hermione) to repel Dementors." },
    { name: "Wingardium Leviosa", icon: "air", desc: 'The Levitation Charm. Hermione famously mastered the "swish and flick" in her first year.' },
    { name: "Alohomora", icon: "key", desc: "The Unlocking Charm, used to open doors and windows that are not magically protected." },
    { name: "Bluebell Flames", icon: "flare", desc: "A specialized fire charm that produces waterproof, portable blue flames." },
  ],
  timeline: [
    { event: "Philosopher's Stone (1991)", desc: "Starts her journey at Hogwarts, masters Wingardium Leviosa." },
    { event: "Prisoner of Azkaban (1993)", desc: "Uses the Time-Turner to save Sirius Black and Buckbeak." },
    { event: "Deathly Hallows (1997-1998)", desc: "Destroys Hufflepuff's Cup with a basilisk fang." },
  ],
  artefacts: ["The Time-Turner", "Tales of Beedle the Bard", "Beaded Bag (Undetectable Extension Charm)"],
  relationships: [
    { role: "Best Friend", name: "Harry Potter", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtrYHXyyu_tBCg7m6XWq1qvhdTLTEzC6I0e3bRP9egEfgkfF1Auy9cOOuxlfnJZ1eDphW-4Sg3Osy7r47Fi_o9xtAtyuGHL1zgi2rOL7PRArD8D3tpJyfZFoDm0a0mB2lcyzuxuoRcOuDpIQ8DmATHDj9oNzfQlZeW6yuidQnAedAcWUe80S__eL7NtriRUq1MpJeNSV2lSlFI2HZ--cwBiK6Uc-RLvjN3hBDNUwmzAFsOhesGFwTyhLD7T3chSv_Bh68XbGCqGUnN" },
    { role: "Husband", name: "Ron Weasley", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbNkhpyMiJpqCtQVQGBWPLQy5fW5Lk3B1-7ruAjDhmzfODVX-VXivSnt6SOrVQ7ezLmARUhIk3sxiCAJFVhRSMlFr57Kfaq1TuO2I-1GUOECkWAN43_JD84SnQQIN9W1hbY9CM45vxWFYe0J_aNQ54-IMFxlz0wwyRTpcG4XRLMtLyF7dk2L-t1jlJBxnDj1aBWQ-W-UbZJVKlSDboB_oGgUIBOxTHuYPc_qhezlSh1uvVVgwtDNtaArhT9r1RHVc9HVdX3IGNF7qu" },
    { role: "Mentor", name: "M. McGonagall", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1tuGizmNE0FePFf9t6i_xmd4DzgM4NJv-sPkmrvVsLi79gXazemeWX6UCTKs8OguFbYlOINwN8VSq5XTlcmRLUYa29LSizbWHd3kJS5TCwhS_a7vXYGvxA3A3a2J0wJMpEW5dUXup0U0BzbUqJCXCCRTu8qKMdoUKhpsNf3OumNTzr48PGXDRJD04ZGegAe0KXXOuTFrswCLgiURyik32udnkF-zAgAwIsHwMJHIVmM5cXWqqUC_O4Q3fpOfrhlH8PG29TUUZJxum" },
    { role: "Friend", name: "Luna Lovegood", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8G3NEtLJLJNMM-fhdyXL-6Dz9mthX_3mH2NTIrosKXcwRmtVWqnYX5aOywvsbijuZ2BPI-6XsozUxSBrGpIEdgGJwZl5zAAKV1bquORKAOJLcJy0KF6u_xalvhPu_eFDvLn6cHOPk54EDZRr_CBTi-FzMOvMomLabW3-vNgkUAPDF2WD_DFiEOTHs99tKafh_tFMBh3PHceKW1n0JREionaWhSPaSpeByQ2M2M-cm8mcR6pFJo_X7FHqd2PH0ADygDDHJYHYzeq9A" },
  ],
};

export default function CharacterProfile() {
  const location = useLocation();
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useFavorites();

  // Use character from router state, or fall back to Hermione
  const char = location.state?.character || HERMIONE_DATA;

  // Build display data: merge API char data with enriched Hermione data if matching
  const isHermione = char.name
    ?.toLowerCase()
    .includes("hermione");
  const profile = isHermione
    ? { ...HERMIONE_DATA, ...char }
    : { ...HERMIONE_DATA, ...char, biography: null, spells: [], timeline: [], artefacts: [], relationships: [] };

  const fav = isFavorite(char.name);

  const heroBg = isHermione
    ? HERMIONE_DATA.heroBg
    : char.image || HERMIONE_DATA.heroBg;

  const portraitImg = char.image || HERMIONE_DATA.image;

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display">
      <div className="layout-container flex flex-col h-full grow">
        {/* Top Navigation */}
        <header className="flex items-center justify-between border-b border-primary/20 px-6 py-4 md:px-20 lg:px-40 bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="text-sm font-bold tracking-widest uppercase">
              Back to Directory
            </span>
          </button>
          <div className="flex items-center gap-6">
            <h2 className="hidden md:block text-primary text-lg font-display italic">
              Wizarding World Explorer
            </h2>
            <div className="flex items-center gap-3">
              <button
                onClick={() => toggleFavorite(char)}
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
                  fav
                    ? "bg-primary text-background-dark border-primary"
                    : "bg-primary/10 border-primary/30 text-primary hover:bg-primary hover:text-background-dark"
                }`}
              >
                <span className={`material-symbols-outlined ${fav ? "filled-icon" : ""}`}>
                  favorite
                </span>
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 md:px-20 lg:px-40 py-8 max-w-7xl mx-auto w-full">
          {/* Hero Banner */}
          <div className="relative w-full rounded-xl overflow-hidden mb-12 group">
            <div
              className="aspect-21/9 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url("${heroBg}")` }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-background-dark via-background-dark/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 flex flex-col md:flex-row items-end md:items-center gap-6 w-full">
              <div className="relative shrink-0">
                <div
                  className="size-32 md:size-48 rounded-xl border-4 border-primary bg-cover bg-center shadow-2xl"
                  style={{ backgroundImage: `url("${portraitImg}")` }}
                />
                {char.house === "Gryffindor" && (
                  <div className="absolute -bottom-4 -right-4 bg-[#740001] text-[#e3a000] p-2 rounded-lg shadow-lg border border-[#e3a000]/30 house-glow-gryffindor">
                    <span className="material-symbols-outlined text-3xl">shield</span>
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-1">
                  {char.name}
                </h1>
                {profile.quote && (
                  <p className="text-lg md:text-xl text-slate-300 italic">
                    {profile.quote}
                  </p>
                )}
              </div>
              <button
                onClick={() => toggleFavorite(char)}
                className="bg-primary hover:bg-primary/90 text-background-dark px-8 py-3 rounded-lg font-bold tracking-wider uppercase text-sm transition-all shadow-[0_0_15px_rgba(212,175,53,0.3)]"
              >
                {fav ? "Remove Favorite" : "Add to Favorites"}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Biography */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-primary">auto_stories</span>
                  <h2 className="text-3xl font-display font-bold text-primary italic">
                    Magical Biography
                  </h2>
                </div>
                <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed text-lg parchment-gradient p-6 border-l-2 border-primary/30">
                  {profile.biography ? (
                    profile.biography.split("\n\n").map((para, i) => (
                      <p key={i} className="mb-4 last:mb-0">{para}</p>
                    ))
                  ) : (
                    <p>
                      {char.name} is a notable figure in the Wizarding World.{" "}
                      {char.house && `A member of ${char.house},`} {char.actor && `portrayed by ${char.actor}.`}
                    </p>
                  )}
                </div>
              </section>

              {/* Known Spells */}
              {profile.spells?.length > 0 && (
                <section>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="material-symbols-outlined text-primary">auto_fix_high</span>
                    <h2 className="text-3xl font-display font-bold text-primary italic">
                      Known Spells &amp; Charms
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {profile.spells.map(({ name, icon, desc }) => (
                      <div
                        key={name}
                        className="p-4 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/30 group-hover:bg-primary group-hover:text-background-dark transition-all">
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
              )}

              {/* Timeline */}
              {profile.timeline?.length > 0 && (
                <section>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="material-symbols-outlined text-primary">history_edu</span>
                    <h2 className="text-3xl font-display font-bold text-primary italic">
                      Cinematic Appearances
                    </h2>
                  </div>
                  <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-4 before:w-0.5 before:bg-primary/20">
                    {profile.timeline.map(({ event, desc }) => (
                      <div key={event} className="relative pl-12">
                        <div className="absolute left-2.5 top-1.5 size-3 rounded-full bg-primary ring-4 ring-primary/20" />
                        <h4 className="text-primary font-bold">{event}</h4>
                        <p className="text-slate-400 text-sm">{desc}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              {/* Attributes */}
              <section className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h3 className="text-xl font-display font-bold text-primary mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined">magic_button</span>
                  Attributes
                </h3>
                <ul className="space-y-4">
                  {[
                    { label: "House", value: char.house, gold: true },
                    { label: "Actor", value: char.actor },
                    { label: "Status", value: char.alive ? "Alive" : "Deceased" },
                    { label: "Ancestry", value: char.ancestry },
                    ...(profile.wand ? [{ label: "Wand", value: profile.wand }] : []),
                    ...(profile.patronus ? [{ label: "Patronus", value: profile.patronus, italic: true }] : []),
                    ...(profile.boggart ? [{ label: "Boggart", value: profile.boggart }] : []),
                  ]
                    .filter((a) => a.value)
                    .map(({ label, value, gold, italic }) => (
                      <li
                        key={label}
                        className="flex justify-between items-center border-b border-primary/10 pb-2 last:border-none"
                      >
                        <span className="text-slate-400">{label}</span>
                        <span
                          className={`font-medium ${
                            gold
                              ? "text-[#e3a000] font-bold"
                              : "text-slate-100"
                          } ${italic ? "italic" : ""}`}
                        >
                          {value}
                        </span>
                      </li>
                    ))}
                </ul>
              </section>

              {/* Relationships */}
              {profile.relationships?.length > 0 && (
                <section>
                  <h3 className="text-xl font-display font-bold text-primary mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined">groups</span>
                    Key Relationships
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {profile.relationships.map(({ role, name, img }) => (
                      <div
                        key={name}
                        className="flex items-center gap-3 p-2 rounded-lg bg-primary/5 border border-primary/10"
                      >
                        <div
                          className="size-10 rounded-full bg-cover bg-center border border-primary/30 shrink-0"
                          style={{ backgroundImage: `url("${img}")` }}
                        />
                        <div>
                          <p className="text-xs text-slate-400">{role}</p>
                          <p className="text-sm font-bold text-slate-100">{name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Artefacts */}
              {profile.artefacts?.length > 0 && (
                <section className="bg-background-dark border-2 border-primary/10 rounded-xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 opacity-10">
                    <span className="material-symbols-outlined text-6xl text-primary">hourglass_empty</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-primary mb-4">
                    Notable Artefacts
                  </h3>
                  <div className="space-y-3">
                    {profile.artefacts.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-sm mt-1">star</span>
                        <p className="text-sm text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-20 border-t border-primary/10 py-12 px-6 md:px-20 lg:px-40 bg-background-dark/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4 text-primary">
              <span className="material-symbols-outlined text-4xl">castle</span>
              <div>
                <p className="font-display font-bold text-lg">
                  Hogwarts Digital Archives
                </p>
                <p className="text-xs text-slate-500 italic">
                  "Draco Dormiens Nunquam Titillandus"
                </p>
              </div>
            </div>
            <div className="flex gap-8 text-slate-400 text-sm">
              {["Library", "Great Hall", "Common Rooms", "Owl Post"].map(
                (link) => (
                  <a key={link} href="#" className="hover:text-primary transition-colors">
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
