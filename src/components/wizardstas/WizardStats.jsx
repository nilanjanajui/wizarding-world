import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const ACTORS = [
  { last: "Radcliffe", char: "Harry" },
  { last: "Watson", char: "Hermione" },
  { last: "Grint", char: "Ron" },
  { last: "Rickman", char: "Snape" },
  { last: "Felton", char: "Draco" },
  { last: "Gambon", char: "Dumbledore" },
];

const HOUSE_CHART = [
  { name: "Gryffindor", key: "gryffindor", cls: "chart-gradient-gryffindor", count: 192, pct: "85%" },
  { name: "Slytherin", key: "slytherin", cls: "chart-gradient-slytherin", count: 178, pct: "78%" },
  { name: "Hufflepuff", key: "hufflepuff", cls: "chart-gradient-hufflepuff", count: 142, pct: "62%" },
  { name: "Ravenclaw", key: "ravenclaw", cls: "chart-gradient-ravenclaw", count: 156, pct: "68%" },
];

export default function WizardStats() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((r) => r.json())
      .then(setCharacters)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const stats = useMemo(() => {
    if (!characters.length) return { total: 724, alive: 572, deceased: 152, alivePercent: 79 };
    const alive = characters.filter((c) => c.alive).length;
    const deceased = characters.length - alive;
    return {
      total: characters.length,
      alive,
      deceased,
      alivePercent: Math.round((alive / characters.length) * 100),
    };
  }, [characters]);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />

        <main className="flex-1 flex flex-col p-6 lg:px-20 lg:py-10">
          {/* Page Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined">analytics</span>
                <span className="uppercase tracking-widest text-xs font-bold">
                  Arcane Analytics
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em] uppercase font-display text-slate-900 dark:text-slate-100">
                WIZARD STATS
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg font-normal max-w-2xl">
                A comprehensive demographic study of the magical community,
                from Hogwarts house distributions to life expectancy within the
                Ministry records.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-primary text-background-dark px-6 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity">
                <span className="material-symbols-outlined text-sm">download</span>
                Export PDF
              </button>
            </div>
          </div>

          {/* Top Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                label: "Total Characters",
                value: loading ? "..." : stats.total,
                icon: "groups",
                sub: "+12 this month",
                subColor: "text-emerald-500",
                subIcon: "trending_up",
              },
              {
                label: "Active Spells",
                value: "182",
                icon: "auto_fix_high",
                sub: "Standard curriculum",
                subColor: "text-slate-500",
                subIcon: "remove",
              },
              {
                label: "Recorded Deaths",
                value: loading ? "..." : stats.deceased,
                icon: "skull",
                sub: "Post-War verification",
                subColor: "text-rose-500",
                subIcon: "warning",
              },
            ].map(({ label, value, icon, sub, subColor, subIcon }) => (
              <div
                key={label}
                className="flex flex-col gap-2 rounded-xl p-6 border border-primary/20 bg-primary/5 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="text-slate-600 dark:text-slate-400 text-base font-medium">
                    {label}
                  </p>
                  <span className="material-symbols-outlined text-primary">{icon}</span>
                </div>
                <p className="text-slate-900 dark:text-slate-100 text-4xl font-bold font-display">
                  {value}
                </p>
                <div className={`flex items-center gap-1 ${subColor} text-xs font-bold`}>
                  <span className="material-symbols-outlined text-xs">{subIcon}</span>
                  <span>{sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Bar Chart - Characters per House */}
            <div className="flex flex-col gap-6 p-8 rounded-xl border border-primary/10 bg-slate-900/40">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-slate-100 text-xl font-bold font-display">
                    Characters Per House
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Hogwarts enrollment distribution
                  </p>
                </div>
                <span className="material-symbols-outlined text-primary/50">bar_chart</span>
              </div>
              <div className="flex flex-col gap-6 min-h-75 justify-end pt-10">
                <div className="grid grid-cols-4 gap-4 items-end h-60">
                  {HOUSE_CHART.map(({ name, cls, count, pct }) => (
                    <div
                      key={name}
                      className="group relative flex flex-col items-center gap-3 h-full justify-end"
                    >
                      <div className="absolute -top-6 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        {count}
                      </div>
                      <div
                        className={`${cls} w-full rounded-t-lg transition-all duration-500 hover:brightness-110`}
                        style={{ height: pct }}
                      />
                      <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">
                        {name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Donut Chart - Vital Status */}
            <div className="flex flex-col gap-6 p-8 rounded-xl border border-primary/10 bg-slate-900/40">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-slate-100 text-xl font-bold font-display">
                    Vital Status Ratio
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Alive vs Deceased population
                  </p>
                </div>
                <span className="material-symbols-outlined text-primary/50">pie_chart</span>
              </div>
              <div className="flex flex-1 items-center justify-center relative min-h-75">
                <div className="relative size-60 rounded-full border-16 border-slate-800 flex items-center justify-center">
                  <div className="absolute -inset-4 rounded-full border-16 border-primary border-r-transparent border-b-transparent rotate-30" />
                  <div className="text-center">
                    <p className="text-4xl font-bold text-slate-100">
                      {loading ? "..." : `${stats.alivePercent}%`}
                    </p>
                    <p className="text-xs font-bold uppercase text-primary">Alive</p>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-primary" />
                    <span className="text-sm text-slate-300">
                      Alive ({loading ? "..." : stats.alive})
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-slate-800" />
                    <span className="text-sm text-slate-300">
                      Deceased ({loading ? "..." : stats.deceased})
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Line Chart - Actor Screen Time */}
            <div className="xl:col-span-2 flex flex-col gap-6 p-8 rounded-xl border border-primary/10 bg-slate-900/40">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-slate-100 text-xl font-bold font-display">
                    Representation By Actor
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Film presence across the cinematic timeline
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-0.5 w-4 bg-primary" />
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                      Screen Time Index
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-primary/50">show_chart</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 min-h-62.5 relative">
                <svg
                  className="w-full h-full min-h-50"
                  viewBox="0 0 800 200"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="5%" stopColor="#d4af35" stopOpacity="0.3" />
                      <stop offset="95%" stopColor="#d4af35" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,150 C50,140 100,20 150,50 C200,80 250,160 300,140 C350,120 400,40 450,60 C500,80 550,180 600,160 C650,140 700,20 750,40 L800,50 L800,200 L0,200 Z"
                    fill="url(#areaGradient)"
                  />
                  <path
                    d="M0,150 C50,140 100,20 150,50 C200,80 250,160 300,140 C350,120 400,40 450,60 C500,80 550,180 600,160 C650,140 700,20 750,40 L800,50"
                    fill="none"
                    stroke="#d4af35"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle cx="150" cy="50" r="4" fill="#d4af35" />
                  <circle cx="450" cy="60" r="4" fill="#d4af35" />
                  <circle cx="750" cy="40" r="4" fill="#d4af35" />
                </svg>
                <div className="flex justify-between px-2">
                  {ACTORS.map(({ last, char }) => (
                    <div key={last} className="text-center group cursor-default">
                      <p className="text-slate-400 text-xs font-bold group-hover:text-primary transition-colors">
                        {last}
                      </p>
                      <p className="text-[10px] text-slate-600">{char}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-12 p-8 rounded-xl bg-primary text-background-dark flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold font-display">
                Deep Dive into Magical History
              </h2>
              <p className="font-medium opacity-80">
                Access the Restricted Section for detailed character genealogies.
              </p>
            </div>
            <Link
              to="/characters"
              className="relative z-10 bg-background-dark text-primary px-8 py-3 rounded-lg font-bold hover:bg-slate-900 transition-colors"
            >
              Unlock Archives
            </Link>
            <span className="material-symbols-outlined absolute -right-5 -bottom-5 text-[180px] opacity-10 rotate-12 pointer-events-none">
              local_library
            </span>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-primary/10 py-10 lg:px-20 text-center">
          <p className="text-slate-500 text-sm">
            © 1997-2024 PotterExplorer Project. Data sourced from the Ministry
            of Magic archives.
          </p>
        </footer>
      </div>
    </div>
  );
}
