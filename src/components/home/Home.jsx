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

function FanCards({ movies }) {
  const [active, setActive] = useState(1);

  const total = movies.length || 4;
  const SPREAD = 60;
  const step = total > 1 ? SPREAD / (total - 1) : 0;
  const baseRots = Array.from({ length: total }, (_, i) => -SPREAD / 2 + i * step);
  const fanOffset = -(baseRots[active] ?? 0);

  const cur = movies[active];

  return (
    <div className="flex flex-col items-center gap-8">
      <style>{`
        .fan-card-inner {
          transition: transform 0.5s cubic-bezier(.22,1,.36,1),
                      border-color 0.3s ease,
                      box-shadow 0.3s ease;
        }
        .fan-card-inner:hover {
          filter: brightness(1.08);
        }
        @keyframes fanReveal {
          from { opacity: 0; transform: translateX(-50%) rotate(var(--r)) translateY(60px) scale(0.85); }
          to   { opacity: 1; transform: translateX(-50%) rotate(var(--r)) translateY(0); }
        }
        .fan-card-wrap {
          animation: fanReveal 0.6s cubic-bezier(.22,1,.36,1) both;
        }
        .fan-card-wrap:nth-child(1) { animation-delay: 0.0s; }
        .fan-card-wrap:nth-child(2) { animation-delay: 0.1s; }
        .fan-card-wrap:nth-child(3) { animation-delay: 0.2s; }
        .fan-card-wrap:nth-child(4) { animation-delay: 0.3s; }
        @keyframes shimmerPass {
          0%   { transform: translateX(-130%) skewX(-18deg); }
          100% { transform: translateX(280%) skewX(-18deg); }
        }
        .active-shimmer {
          animation: shimmerPass 2.8s ease-in-out 0.8s infinite;
        }
      `}</style>

      {/* Fan Container */}
      <div className="relative w-full flex justify-center" style={{ height: "420px" }}>
        {/* Radial glow beneath fan */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: "520px",
            height: "120px",
            background: "radial-gradient(ellipse at center, rgba(212,175,55,0.12) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />

        {/* Floor shadow line */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: "320px",
            height: "2px",
            background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)",
          }}
        />

        {(movies.length > 0 ? movies : Array.from({ length: 4 })).map((movie, i) => {
          const finalRot = (baseRots[i] ?? 0) + fanOffset;
          const isActive = i === active;
          const dist = Math.abs(i - active);
          const zIndex = 20 - dist * 4;

          return (
            <div
              key={i}
              className="fan-card-wrap absolute"
              style={{
                bottom: 0,
                left: "50%",
                width: "170px",
                height: "255px",
                transformOrigin: "50% 100%",
                transform: `translateX(-50%) rotate(${finalRot}deg)`,
                "--r": `${(baseRots[i] ?? 0)}deg`,
                zIndex,
                cursor: isActive ? "default" : "pointer",
              }}
              onClick={() => !isActive && setActive(i)}
            >
              <div
                className="fan-card-inner relative w-full h-full rounded-[20px] overflow-hidden"
                style={{
                  border: isActive
                    ? "2px solid rgba(212,175,55,0.75)"
                    : "1.5px solid rgba(255,255,255,0.09)",
                  boxShadow: isActive
                    ? "0 24px 70px rgba(0,0,0,0.85), 0 0 28px rgba(212,175,55,0.12)"
                    : "0 12px 40px rgba(0,0,0,0.65)",
                  transform: isActive ? "translateY(-16px) scale(1.04)" : "none",
                  transition: "transform 0.4s cubic-bezier(.22,1,.36,1), box-shadow 0.4s, border-color 0.4s",
                }}
              >
                {/* Poster or skeleton */}
                {movie ? (
                  movie.img ? (
                    <img
                      src={movie.img}
                      alt={movie.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                      <span className="material-symbols-outlined text-5xl text-primary/20">movie</span>
                    </div>
                  )
                ) : (
                  <div className="w-full h-full bg-primary/5 animate-pulse" />
                )}

                {/* Gradient bottom overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 40%, transparent 70%)" }}
                />

                {/* Label on active card */}
                {isActive && movie && (
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p
                      className="text-[9px] font-black uppercase tracking-[0.22em] mb-1"
                      style={{ color: "#d4af37" }}
                    >
                      Film {movie.num}
                    </p>
                    <p className="text-white text-[13px] font-bold leading-snug line-clamp-2">
                      {movie.title}
                    </p>
                  </div>
                )}

                {/* Shimmer on active */}
                {isActive && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                      className="active-shimmer absolute inset-y-0"
                      style={{
                        width: "40px",
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Info + Controls */}
      {cur && (
        <div className="flex flex-col items-center gap-5 text-center max-w-xs">
          <div>
            <p className="text-primary/60 text-[10px] font-black uppercase tracking-[0.2em] mb-1">
              Harry Potter · Film {cur.num} of 8
            </p>
            <p className="text-slate-100 text-2xl font-black leading-tight">
              {cur.title}
            </p>
          </div>

          {/* Dot indicators */}
          <div className="flex gap-2 items-center">
            {movies.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? "24px" : "7px",
                  height: "7px",
                  background: i === active ? "#d4af37" : "rgba(255,255,255,0.18)",
                }}
              />
            ))}
          </div>

          {/* Prev / Next / CTA */}
          <div className="flex gap-2 items-center">
            <button
              onClick={() => setActive((p) => Math.max(0, p - 1))}
              disabled={active === 0}
              className="w-10 h-10 rounded-full border border-primary/25 text-primary/70 flex items-center justify-center hover:border-primary hover:text-primary transition-all disabled:opacity-25"
            >
              <span className="material-symbols-outlined text-base">chevron_left</span>
            </button>
            <button
              onClick={() => setActive((p) => Math.min(movies.length - 1, p + 1))}
              disabled={active === movies.length - 1}
              className="w-10 h-10 rounded-full border border-primary/25 text-primary/70 flex items-center justify-center hover:border-primary hover:text-primary transition-all disabled:opacity-25"
            >
              <span className="material-symbols-outlined text-base">chevron_right</span>
            </button>
            <Link
              to="/movies"
              className="flex items-center gap-2 px-5 h-10 rounded-full text-sm font-bold transition-all hover:opacity-80"
              style={{ background: "#d4af37", color: "#1a1209" }}
            >
              Explore All
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}




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
        <section className="px-6 md:px-20 py-16 overflow-hidden">
          <div className="flex items-center justify-between mb-10 border-l-4 border-secondary pl-4">
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

          <FanCards movies={featuredMovies} />
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