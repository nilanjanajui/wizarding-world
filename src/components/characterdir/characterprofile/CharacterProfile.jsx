import { useLocation, useNavigate, Link } from "react-router-dom";
import { useFavorites } from "../../../context/FavoritesContext";
import charactersData, { HOGWARTS_HALL } from "../../../data/charactersData";

// Safely converts any value to a displayable string
const safeStr = (val) => {
  if (!val) return null;
  if (typeof val === "string") return val;
  if (typeof val === "object") {
    // PotterDB returns wand as {wood, core, length}
    if (val.wood || val.core || val.length) {
      return [val.wood, val.core, val.length && `${val.length} inches`]
        .filter(Boolean)
        .join(", ");
    }
    return JSON.stringify(val);
  }
  return String(val);
};

// No data page component
function NoDataPage({ charName, navigate }) {
  return (
    <div className="min-h-screen bg-background-dark font-display flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-150 h-150 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mb-6 w-28 h-28 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
        <span className="material-symbols-outlined text-primary text-6xl">
          person_off
        </span>
      </div>

      <h2 className="text-3xl md:text-5xl font-bold text-primary italic mb-4">
        No Profile Available
      </h2>

      {charName && (
        <p className="text-slate-300 text-xl font-medium mb-3">
          {charName}
        </p>
      )}

      <p className="text-slate-400 text-lg max-w-md mb-2">
        This character's records are sealed in the Restricted Section.
        No profile data is currently available.
      </p>
      <p className="text-slate-600 text-sm italic mb-10">
        "Curiosity is not a sin, but you should exercise caution." — Albus Dumbledore
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          to="/characters"
          className="flex items-center gap-2 px-8 py-3 bg-primary text-background-dark rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-primary/20"
        >
          <span className="material-symbols-outlined text-sm">groups</span>
          Back to Characters
        </Link>
        <Link
          to="/"
          className="flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-full font-bold text-sm uppercase tracking-widest hover:bg-primary/10 transition-colors"
        >
          <span className="material-symbols-outlined text-sm">home</span>
          Home
        </Link>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-8 py-3 border border-primary/30 text-slate-400 rounded-full font-bold text-sm uppercase tracking-widest hover:text-primary hover:border-primary transition-colors"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Go Back
        </button>
      </div>

      <p className="mt-16 text-slate-700 text-xs uppercase tracking-widest">
        Wizarding World Explorer • Mischief Managed
      </p>
    </div>
  );
}

export default function CharacterProfile() {
  const location = useLocation();
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useFavorites();

  const char = location.state?.character;

  // No character passed at all
  if (!char) {
    return <NoDataPage navigate={navigate} />;
  }

  // Character exists but has no meaningful data
  const hasData = char.name && (
    char.image ||
    char.house ||
    char.actor ||
    char.alive !== undefined ||
    char.patronus ||
    char.ancestry
  );

  if (!hasData) {
    return <NoDataPage charName={char.name} navigate={navigate} />;
  }

  const fav = isFavorite(char.name);
  const data = charactersData[char.name] || {};

  // Safely build wand string handling both string and object formats
  const wandStr = safeStr(data.wand) || safeStr(char.wand);

  const biography =
    data.biography ||
    `${char.name} is a notable figure in the Wizarding World.${
      char.house ? ` A proud member of ${char.house}.` : ""
    }${
      char.actor && char.actor !== "Unknown"
        ? ` Portrayed by ${char.actor}.`
        : ""
    }`;

  const spells = data.spells || [];
  const timeline = data.timeline || [];
  const artefacts = data.artefacts || [];
  const relationships = data.relationships || [];

  const attributes = [
    { label: "Wand", value: wandStr },
    { label: "Patronus", value: safeStr(data.patronus) || safeStr(char.patronus), italic: true },
    { label: "Boggart", value: safeStr(data.boggart) },
    { label: "Ancestry", value: safeStr(char.ancestry) },
    { label: "Species", value: safeStr(char.species) },
    { label: "Gender", value: safeStr(char.gender) },
    { label: "House", value: safeStr(char.house), gold: true },
  ].filter((a) => a.value && a.value !== "" && a.value !== "Unknown");

  return (
    <div className="bg-background-dark text-slate-100 min-h-screen font-display">
      {/* Header */}
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
      </header>

      <main className="flex-1 px-4 md:px-20 lg:px-40 py-8 max-w-7xl mx-auto w-full">
        {/* Hero Banner */}
        <div className="relative w-full rounded-xl overflow-hidden mb-12 group">
          <div
            className="aspect-21/9 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url("${HOGWARTS_HALL}")` }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-background-dark via-background-dark/50 to-transparent" />

          <div className="absolute bottom-0 left-0 p-8 flex flex-col md:flex-row items-end md:items-center gap-6 w-full">
            {/* Portrait */}
            <div className="relative shrink-0">
              <div className="size-32 md:size-48 rounded-xl border-4 border-primary shadow-2xl overflow-hidden bg-primary/10">
                {char.image ? (
                  <img
                    src={char.image}
                    alt={char.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                ) : null}
                <div
                  className={`w-full h-full items-center justify-center text-primary ${
                    char.image ? "hidden" : "flex"
                  }`}
                >
                  <span className="material-symbols-outlined text-6xl opacity-30">
                    person
                  </span>
                </div>
              </div>
              {char.house === "Gryffindor" && (
                <div className="absolute -bottom-4 -right-4 bg-[#740001] text-[#e3a000] p-2 rounded-lg shadow-lg border border-[#e3a000]/30">
                  <span className="material-symbols-outlined text-3xl">shield</span>
                </div>
              )}
            </div>

            {/* Name & Quote */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-1 leading-tight">
                {char.name}
              </h1>
              {data.quote && (
                <p className="text-lg md:text-xl text-slate-300 italic">
                  {data.quote}
                </p>
              )}
            </div>

            <button
              onClick={() => toggleFavorite(char)}
              className="bg-primary hover:bg-primary/90 text-background-dark px-8 py-3 rounded-lg font-bold tracking-wider uppercase text-sm transition-all shadow-lg shrink-0"
            >
              {fav ? "★ Saved" : "Add to Favorites"}
            </button>
          </div>
        </div>

        {/* Main Grid */}
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
              <div className="parchment-gradient p-6 border-l-2 border-primary/30 text-slate-300 leading-relaxed text-lg">
                {biography.split("\n\n").map((para, i) => (
                  <p key={i} className="mb-4 last:mb-0">{para}</p>
                ))}
              </div>
            </section>

            {/* Known Spells */}
            {spells.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <span className="material-symbols-outlined text-primary">auto_fix_high</span>
                  <h2 className="text-3xl font-display font-bold text-primary italic">
                    Known Spells &amp; Charms
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {spells.map(({ name, icon, desc }) => (
                    <div
                      key={name}
                      className="p-4 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/30 group-hover:bg-primary group-hover:text-background-dark transition-all shrink-0">
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
            {timeline.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <span className="material-symbols-outlined text-primary">history_edu</span>
                  <h2 className="text-3xl font-display font-bold text-primary italic">
                    Cinematic Appearances
                  </h2>
                </div>
                <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-4 before:w-0.5 before:bg-primary/20">
                  {timeline.map(({ event, desc }) => (
                    <div key={event} className="relative pl-12">
                      <div className="absolute left-2.5 top-1.5 size-3 rounded-full bg-primary ring-4 ring-primary/20" />
                      <h4 className="text-primary font-bold">{event}</h4>
                      <p className="text-slate-400 text-sm">{desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Quick Stats for minor characters */}
            {spells.length === 0 && timeline.length === 0 && (
              <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: "home", label: "House", value: safeStr(char.house) || "Unknown" },
                  { icon: "person", label: "Species", value: safeStr(char.species) || "Human" },
                  { icon: "pets", label: "Patronus", value: safeStr(char.patronus) || "Unknown" },
                  { icon: "family_restroom", label: "Ancestry", value: safeStr(char.ancestry) || "Unknown" },
                ].map(({ icon, label, value }) => (
                  <div
                    key={label}
                    className="bg-primary/5 border border-primary/10 rounded-xl p-4 text-center hover:border-primary/30 transition-all"
                  >
                    <span className="material-symbols-outlined text-primary text-2xl">{icon}</span>
                    <p className="text-slate-500 text-xs uppercase tracking-widest mt-1">{label}</p>
                    <p className="text-slate-100 font-bold text-sm mt-1 capitalize">{value}</p>
                  </div>
                ))}
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
              {attributes.length > 0 ? (
                <ul className="space-y-4">
                  {attributes.map(({ label, value, gold, italic }) => (
                    <li
                      key={label}
                      className="flex justify-between items-start border-b border-primary/10 pb-2 last:border-none gap-4"
                    >
                      <span className="text-slate-400 text-sm shrink-0">{label}</span>
                      <span
                        className={`font-medium text-sm text-right ${
                          gold
                            ? "text-[#e3a000] font-bold"
                            : italic
                            ? "text-slate-100 italic"
                            : "text-slate-100"
                        }`}
                      >
                        {value}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-500 text-sm italic">No attributes available.</p>
              )}
            </section>

            {/* Relationships */}
            {relationships.length > 0 && (
              <section>
                <h3 className="text-xl font-display font-bold text-primary mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined">groups</span>
                  Key Relationships
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {relationships.map(({ role, name, img }) => (
                    <div
                      key={name}
                      className="flex items-center gap-3 p-2 rounded-lg bg-primary/5 border border-primary/10"
                    >
                      <div
                        className="size-10 rounded-full border border-primary/30 shrink-0 overflow-hidden bg-primary/10 bg-cover bg-center"
                        style={{ backgroundImage: `url("${img}")` }}
                      />
                      <div>
                        <p className="text-xs text-slate-400">{role}</p>
                        <p className="text-sm font-bold text-slate-100 leading-tight">{name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Artefacts */}
            {artefacts.length > 0 && (
              <section className="bg-background-dark border-2 border-primary/10 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-10">
                  <span className="material-symbols-outlined text-6xl text-primary">hourglass_empty</span>
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-4">
                  Notable Artefacts
                </h3>
                <div className="space-y-3">
                  {artefacts.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-sm mt-1">star</span>
                      <p className="text-sm text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Status for minor characters */}
            {relationships.length === 0 && (
              <section className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h3 className="text-xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">info</span>
                  Status
                </h3>
                <div
                  className={`flex items-center gap-3 px-4 py-3 rounded-full ${
                    char.alive
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : "bg-slate-700/40 text-slate-400 border border-slate-600/20"
                  }`}
                >
                  <span
                    className={`w-3 h-3 rounded-full shrink-0 ${
                      char.alive ? "bg-green-400" : "bg-slate-400"
                    }`}
                  />
                  <span className="font-bold">{char.alive ? "Alive" : "Deceased"}</span>
                </div>
                {char.actor && char.actor !== "Unknown" && (
                  <p className="mt-4 text-sm text-slate-400">
                    Portrayed by <span className="text-slate-200">{char.actor}</span>
                  </p>
                )}
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
}