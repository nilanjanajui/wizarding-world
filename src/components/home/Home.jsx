import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import { HERO_BG } from "../../data/movieData";
import characterImages from "../../data/characterImages";

const FEATURED_NAMES = [
  "Harry Potter",
  "Hermione Granger",
  "Ron Weasley",
  "Albus Dumbledore",
  "Severus Snape",
  "Draco Malfoy",
  "Rubeus Hagrid",
  "Minerva McGonagall",
  "Neville Longbottom",
  "Ginny Weasley",
];

export default function Home() {
  const [featuredChars, setFeaturedChars] = useState([]);
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  useEffect(() => {
    // Fetch movies from PotterDB
    fetch("https://api.potterdb.com/v1/movies")
      .then((r) => r.json())
      .then((data) => {
        const sorted = data.data
          .sort((a, b) =>
            a.attributes.release_date?.localeCompare(b.attributes.release_date)
          )
          .slice(0, 4)
          .map((m, idx) => ({
            num: idx + 1,
            title: m.attributes.title?.replace("Harry Potter and the ", ""),
            img: m.attributes.poster,
          }));
        setFeaturedMovies(sorted);
      })
      .catch(console.error);

    // Fetch characters from HP API
    fetch("https://hp-api.onrender.com/api/characters")
      .then((r) => r.json())
      .then((data) => {
        const picked = FEATURED_NAMES.map((name) => {
          const found = data.find((c) => c.name === name);
          return {
            ...found,
            name,
            image: characterImages[name] || found?.image || null,
            house: found?.house || "",
          };
        }).filter(Boolean);
        setFeaturedChars(picked);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-dark font-display text-slate-100 antialiased">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="px-6 md:px-20 py-10">
          <div className="relative overflow-hidden rounded-xl bg-slate-900 border border-primary/30 shadow-2xl">
            <div
              className="flex min-h-130 flex-col gap-6 items-center justify-center p-8 text-center bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(32,29,18,0.6) 0%, rgba(32,29,18,0.95) 100%), url("${HERO_BG}")`,
              }}
            >
              <div className="flex flex-col gap-4 max-w-3xl">
                <h1 className="text-primary text-5xl md:text-7xl font-black leading-tight tracking-tight uppercase">
                  Harry Potter Universe Explorer
                </h1>
                <h2 className="text-slate-300 text-lg md:text-2xl font-light italic">
                  Discover Movies • Characters • Hogwarts Houses
                </h2>
              </div>
              <div className="flex gap-4 mt-4 flex-wrap justify-center">
                <Link
                  to="/characters"
                  className="flex min-w-45 items-center justify-center rounded-full h-14 px-8 bg-primary text-background-dark text-lg font-bold hover:scale-105 transition-transform shadow-lg"
                >
                  Explore Characters
                </Link>
                <Link
                  to="/movies"
                  className="flex min-w-45 items-center justify-center rounded-full h-14 px-8 border-2 border-primary text-primary text-lg font-bold hover:bg-primary/10 transition-colors"
                >
                  View Movies
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="px-6 md:px-20 py-8">
          <div className="flex flex-wrap gap-6">
            {[
              { label: "Movies", value: "8", icon: "movie", width: "w-full" },
              { label: "Characters", value: "70+", icon: "groups", width: "w-[85%]" },
              { label: "Houses", value: "4", icon: "fort", width: "w-full" },
            ].map(({ label, value, icon, width }) => (
              <div
                key={label}
                className="flex min-w-50 flex-1 flex-col gap-3 rounded-xl p-8 border border-primary/20 bg-background-dark/40 backdrop-blur-sm group hover:border-primary/50 transition-all"
              >
                <div className="flex justify-between items-start">
                  <p className="text-primary/80 text-lg font-medium">{label}</p>
                  <span className="material-symbols-outlined text-primary/40 group-hover:text-primary">
                    {icon}
                  </span>
                </div>
                <p className="text-slate-100 tracking-tight text-5xl font-bold leading-tight">
                  {value}
                </p>
                <div className="w-full bg-primary/10 h-1 rounded-full overflow-hidden">
                  <div className={`bg-primary h-full ${width}`} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Movies */}
        <section className="px-6 md:px-20 py-12 overflow-hidden">
          <div className="flex items-center justify-between mb-16 border-l-4 border-secondary pl-4">
            <h2 className="text-slate-100 text-3xl font-bold tracking-tight">
              Featured Movies
            </h2>
            <Link
              to="/movies"
              className="text-primary hover:underline text-sm font-semibold flex items-center gap-1"
            >
              View All
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          {/* Fan Card Layout */}
          <div className="relative flex items-end justify-center h-125">
            <style>{`
      @keyframes fanIn {
        from { opacity: 0; transform: rotate(var(--rot)) translateY(120px) scale(0.7); }
        to   { opacity: 1; transform: rotate(var(--rot)) translateY(var(--ty)); }
      }
      .fan-card {
        animation: fanIn 0.7s cubic-bezier(.22,1,.36,1) both;
      }
      .fan-card:nth-child(1) { animation-delay: 0.05s; }
      .fan-card:nth-child(2) { animation-delay: 0.15s; }
      .fan-card:nth-child(3) { animation-delay: 0.25s; }
      .fan-card:nth-child(4) { animation-delay: 0.35s; }
      .fan-card:hover {
        transform: rotate(var(--rot)) translateY(-30px) scale(1.06) !important;
        z-index: 30 !important;
      }
    `}</style>

            {featuredMovies.length > 0
              ? (() => {
                const configs = [
                  { rot: -32, ty: "60px", left: "calc(50% - 390px)", z: 5 },
                  { rot: -11, ty: "15px", left: "calc(50% - 175px)", z: 10 },
                  { rot: 11, ty: "15px", left: "calc(50% + 5px)", z: 10 },
                  { rot: 32, ty: "60px", left: "calc(50% + 220px)", z: 5 },
                ];
                return featuredMovies.map(({ num, title, img }, idx) => {
                  const { rot, ty, left, z } = configs[idx] ?? configs[0];
                  return (
                    <Link
                      to="/movies"
                      key={num}
                      className="fan-card absolute group"
                      style={{
                        "--rot": `${rot}deg`,
                        "--ty": ty,
                        transform: `rotate(${rot}deg) translateY(${ty})`,
                        transformOrigin: "bottom center",
                        left,
                        zIndex: z,
                        transition: "transform 0.35s cubic-bezier(.22,1,.36,1)",
                        bottom: 0,
                      }}
                    >
                      <div className="relative w-52 h-80 md:w-60 md:h-96 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] border-2 border-white/10">
                        {img ? (
                          <img
                            src={img}
                            alt={title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-6xl opacity-30">movie</span>
                          </div>
                        )}
                        {/* Bottom gradient + label */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/10 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-4 w-full">
                          <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-1">
                            Movie {num}
                          </p>
                          <p className="text-white text-sm font-bold leading-tight line-clamp-2">
                            {title}
                          </p>
                        </div>
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                    </Link>
                  );
                });
              })()
              : [0, 1, 2, 3].map((idx) => {
                const rots = [-32, -11, 11, 32];
                const tys = ["60px", "15px", "15px", "60px"];
                const lefts = ["calc(50% - 390px)", "calc(50% - 175px)", "calc(50% + 5px)", "calc(50% + 220px)"];
                return (
                  <div
                    key={idx}
                    className="absolute rounded-2xl bg-primary/5 border border-primary/10 animate-pulse"
                    style={{
                      width: "200px",
                      height: "310px",
                      transform: `rotate(${rots[idx]}deg) translateY(${tys[idx]})`,
                      transformOrigin: "bottom center",
                      left: lefts[idx],
                      bottom: 0,
                    }}
                  />
                );
              })}
          </div>
        </section>

        {/* Famous Witches & Wizards */}
        <section className="px-6 md:px-20 py-12 bg-background-dark/20">
          <div className="flex items-center justify-between mb-8 border-l-4 border-primary pl-4">
            <div>
              <h2 className="text-slate-100 text-3xl font-bold tracking-tight">
                Famous Witches &amp; Wizards
              </h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={scrollLeft}
                className="p-2 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-background-dark transition-all"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                onClick={scrollRight}
                className="p-2 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-background-dark transition-all"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Scrollable Row */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {featuredChars.length > 0
              ? featuredChars.map((char) => (
                <Link
                  to={`/characters/${encodeURIComponent(char.name)}`}
                  state={{ character: char }}
                  key={char.name}
                  className="flex flex-col items-center gap-4 group shrink-0"
                  style={{ width: "160px" }}
                >
                  <div className="relative w-full aspect-square rounded-full border-2 border-primary/20 p-2 group-hover:border-primary transition-all overflow-hidden bg-background-dark shadow-lg group-hover:shadow-primary/20">
                    {char.image ? (
                      <img
                        src={char.image}
                        alt={char.name}
                        className="w-full h-full rounded-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                    ) : null}
                    <div
                      className={`w-full h-full rounded-full bg-primary/10 items-center justify-center text-primary ${char.image ? "hidden" : "flex"
                        }`}
                    >
                      <span className="material-symbols-outlined text-4xl">person</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-slate-100 font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                      {char.name}
                    </p>
                    <p className="text-primary/70 text-sm mt-0.5">
                      {char.house || "Hogwarts"}
                    </p>
                  </div>
                </Link>
              ))
              : [1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  className="flex flex-col items-center gap-4 shrink-0"
                  style={{ width: "160px" }}
                >
                  <div className="w-full aspect-square rounded-full bg-primary/10 animate-pulse" />
                  <div className="h-4 w-24 bg-primary/10 rounded animate-pulse" />
                  <div className="h-3 w-16 bg-primary/5 rounded animate-pulse" />
                </div>
              ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto px-6 md:px-20 py-10 border-t border-primary/10 bg-background-dark flex flex-col items-center gap-6">
        <div className="flex items-center gap-3 text-primary/60">
          <span className="material-symbols-outlined text-2xl">auto_awesome</span>
          <p className="text-lg font-bold">Wizarding World Explorer</p>
        </div>
        <div className="flex gap-8">
          <a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">Privacy Policy</a>
          <a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">Terms of Magic</a>
          <a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">Owl Contact</a>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-slate-500 text-xs">Built with React | Powered by Magic &amp; Tailwind CSS</p>
          <p className="text-slate-600 text-[10px] uppercase tracking-widest">
            © 2026 Wizarding World Explorer. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}