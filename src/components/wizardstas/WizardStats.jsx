import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

const ACTORS = [
  { last: "Radcliffe", char: "Harry" },
  { last: "Watson", char: "Hermione" },
  { last: "Grint", char: "Ron" },
  { last: "Rickman", char: "Snape" },
  { last: "Felton", char: "Draco" },
  { last: "Gambon", char: "Dumbledore" },
];

const HOUSE_DEFS = [
  { name: "Gryffindor", key: "gryffindor", cls: "chart-gradient-gryffindor" },
  { name: "Slytherin", key: "slytherin", cls: "chart-gradient-slytherin" },
  { name: "Hufflepuff", key: "hufflepuff", cls: "chart-gradient-hufflepuff" },
  { name: "Ravenclaw", key: "ravenclaw", cls: "chart-gradient-ravenclaw" },
];

function ActorLineChart({ actorChart }) {
  const W = 800, H = 200, PAD = 20;
  const points = actorChart.map((a, i) => ({
    x: (i / (actorChart.length - 1)) * (W - PAD * 2) + PAD,
    y: H - PAD - (a.pct / 100) * (H - PAD * 2),
  }));
  const pathD = points.reduce((d, p, i) => {
    if (i === 0) return `M${p.x},${p.y}`;
    const prev = points[i - 1];
    const cpx = (prev.x + p.x) / 2;
    return `${d} C${cpx},${prev.y} ${cpx},${p.y} ${p.x},${p.y}`;
  }, "");
  const areaD = `${pathD} L${points[points.length - 1].x},${H} L${points[0].x},${H} Z`;

  return (
    <svg
      className="w-full h-full min-h-50"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="5%" stopColor="#d4af35" stopOpacity="0.3" />
          <stop offset="95%" stopColor="#d4af35" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaD} fill="url(#areaGradient)" />
      <path
        d={pathD}
        fill="none"
        stroke="#d4af35"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="4" fill="#d4af35" />
      ))}
    </svg>
  );
}

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
    if (!characters.length) {
      return { total: 0, alive: 0, deceased: 0, alivePercent: 0, withPatronus: 0 };
    }
    const alive = characters.filter((c) => c.alive).length;
    const deceased = characters.length - alive;
    const withPatronus = characters.filter((c) => c.patronus).length;
    return {
      total: characters.length,
      alive,
      deceased,
      alivePercent: Math.round((alive / characters.length) * 100),
      withPatronus,
    };
  }, [characters]);

  const houseChart = useMemo(() => {
    const counts = HOUSE_DEFS.map(({ name, key, cls }) => ({
      name,
      cls,
      count: characters.filter((c) => c.house?.toLowerCase() === key).length,
    }));
    const max = Math.max(...counts.map((h) => h.count), 1);
    return counts.map((h) => ({
      ...h,
      pct: `${Math.round((h.count / max) * 100)}%`,
    }));
  }, [characters]);

  const actorChart = useMemo(() => {
    const counts = ACTORS.map(({ last, char }) => ({
      last,
      char,
      count: characters.filter((c) =>
        c.actor?.toLowerCase().includes(last.toLowerCase())
      ).length,
    }));
    const max = Math.max(...counts.map((a) => a.count), 1);
    return counts.map((a) => ({ ...a, pct: Math.round((a.count / max) * 100) }));
  }, [characters]);

  const CIRCUMFERENCE = 502;
  const aliveArc = (stats.alivePercent / 100) * CIRCUMFERENCE;

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display">
      <div className="layout-container flex h-full grow flex-col">

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
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 bg-primary text-background-dark px-6 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
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
                sub: "From HP API records",
                subColor: "text-emerald-500",
                subIcon: "trending_up",
              },
              {
                label: "Known Patronuses",
                value: loading ? "..." : stats.withPatronus,
                icon: "auto_fix_high",
                sub: "From Ministry records",
                subColor: "text-slate-500",
                subIcon: "remove",
              },
              {
                label: "Recorded Deaths",
                value: loading ? "..." : stats.deceased,
                icon: "crisis_alert",
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
            {/* Bar Chart — Characters per House */}
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
                  {houseChart.map(({ name, cls, count, pct }) => (
                    <div
                      key={name}
                      className="group relative flex flex-col items-center gap-3 h-full justify-end"
                    >
                      <div className="absolute -top-6 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        {loading ? "..." : count}
                      </div>
                      <div
                        className={`${cls} w-full rounded-t-lg transition-all duration-500 hover:brightness-110`}
                        style={{ height: loading ? "0%" : pct }}
                      />
                      <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">
                        {name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Donut Chart — Vital Status */}
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
                <div className="relative flex items-center justify-center">
                  <svg width="200" height="200" viewBox="0 0 200 200">
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#1e293b"
                      strokeWidth="20"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#d4af35"
                      strokeWidth="20"
                      strokeLinecap="round"
                      strokeDasharray={`${loading ? 0 : aliveArc} ${CIRCUMFERENCE}`}
                      transform="rotate(-90 100 100)"
                      style={{ transition: "stroke-dasharray 1s ease" }}
                    />
                  </svg>
                  <div className="absolute text-center">
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
                    <div className="size-3 rounded-full bg-slate-700" />
                    <span className="text-sm text-slate-300">
                      Deceased ({loading ? "..." : stats.deceased})
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Line Chart — Actor Representation */}
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
                {!loading && <ActorLineChart actorChart={actorChart} />}
                <div className="flex flex-col gap-3">
                  {actorChart.map(({ last, char, count, pct }) => (
                    <div key={last} className="flex items-center gap-4">
                      <div className="w-24 text-right shrink-0">
                        <p className="text-slate-300 text-xs font-bold">{last}</p>
                        <p className="text-slate-600 text-[10px]">{char}</p>
                      </div>
                      <div className="flex-1 h-7 bg-slate-800 rounded-lg overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-lg transition-all duration-700 flex items-center justify-end pr-2"
                          style={{ width: loading ? "0%" : `${pct}%` }}
                        >
                          {pct > 20 && (
                            <span className="text-background-dark text-[10px] font-bold">
                              {count}
                            </span>
                          )}
                        </div>
                      </div>
                      {pct <= 20 && (
                        <span className="text-slate-400 text-[10px] font-bold w-6">
                          {loading ? "" : count}
                        </span>
                      )}
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
            © 2026 PotterExplorer Project. Data sourced from the Ministry of Magic archives.
          </p>
        </footer>
      </div>
    </div>
  );
}