// src/features/stats/pages/StatsPage.jsx
import { Link } from "react-router-dom";

const SUMMARY_STATS = [
    { label: "Total Characters", value: "724", icon: "groups", trend: "+12 this month", trendColor: "text-emerald-500", trendIcon: "trending_up" },
    { label: "Active Spells", value: "182", icon: "auto_fix_high", trend: "Standard curriculum", trendColor: "text-slate-500", trendIcon: "remove" },
    { label: "Recorded Deaths", value: "148", icon: "skull", trend: "Post-War verification", trendColor: "text-rose-500", trendIcon: "warning" },
];

const HOUSE_BARS = [
    { house: "Gryffindor", count: 192, heightPct: 85, gradient: "from-[#ae0001]/80 to-primary" },
    { house: "Slytherin", count: 178, heightPct: 78, gradient: "from-[#1a472a]/80 to-[#5d5d5d]" },
    { house: "Hufflepuff", count: 142, heightPct: 62, gradient: "from-[#ecb939]/80 to-black" },
    { house: "Ravenclaw", count: 156, heightPct: 68, gradient: "from-[#222f5b]/80 to-[#946b2d]" },
];

const ACTORS = [
    { name: "Radcliffe", character: "Harry" },
    { name: "Watson", character: "Hermione" },
    { name: "Grint", character: "Ron" },
    { name: "Rickman", character: "Snape" },
    { name: "Felton", character: "Draco" },
    { name: "Gambon", character: "Dumbledore" },
];

const StatsPage = () => {
    return (
        <main className="flex-1 flex flex-col p-6 lg:px-20 lg:py-10">
            {/* Page Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-primary">
                        <span className="material-symbols-outlined">analytics</span>
                        <span className="uppercase tracking-widest text-xs font-bold">Arcane Analytics</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight uppercase font-display text-slate-900 dark:text-slate-100">
                        WIZARD STATS
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg font-normal max-w-2xl">
                        A comprehensive demographic study of the magical community, from Hogwarts house
                        distributions to life expectancy within the Ministry records.
                    </p>
                </div>
                <button className="flex items-center gap-2 bg-primary text-background-dark px-6 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity w-fit">
                    <span className="material-symbols-outlined text-sm">download</span>
                    Export PDF
                </button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {SUMMARY_STATS.map(({ label, value, icon, trend, trendColor, trendIcon }) => (
                    <div
                        key={label}
                        className="flex flex-col gap-2 rounded-xl p-6 border border-primary/20 bg-primary/5 backdrop-blur-sm"
                    >
                        <div className="flex items-center justify-between">
                            <p className="text-slate-600 dark:text-slate-400 text-base font-medium">{label}</p>
                            <span className="material-symbols-outlined text-primary">{icon}</span>
                        </div>
                        <p className="text-slate-900 dark:text-slate-100 tracking-tight text-4xl font-bold font-display">
                            {value}
                        </p>
                        <div className={`flex items-center gap-1 text-xs font-bold ${trendColor}`}>
                            <span className="material-symbols-outlined text-xs">{trendIcon}</span>
                            <span>{trend}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* Bar Chart: Characters per House */}
                <div className="flex flex-col gap-6 p-8 rounded-xl border border-primary/10 bg-slate-900/40">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-slate-100 text-xl font-bold font-display">Characters Per House</h3>
                            <p className="text-slate-400 text-sm">Hogwarts enrollment distribution</p>
                        </div>
                        <span className="material-symbols-outlined text-primary/50">bar_chart</span>
                    </div>
                    <div className="flex flex-col gap-6 min-h-[300px] justify-end pt-10">
                        <div className="grid grid-cols-4 gap-4 items-end h-[240px]">
                            {HOUSE_BARS.map(({ house, count, heightPct, gradient }) => (
                                <div key={house} className="group relative flex flex-col items-center gap-3 h-full justify-end">
                                    <div className="absolute -top-6 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                        {count}
                                    </div>
                                    <div
                                        className={`bg-gradient-to-t ${gradient} w-full rounded-t-lg transition-all duration-500 hover:brightness-110`}
                                        style={{ height: `${heightPct}%` }}
                                    />
                                    <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider text-center">
                                        {house}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Donut Chart: Alive vs Deceased */}
                <div className="flex flex-col gap-6 p-8 rounded-xl border border-primary/10 bg-slate-900/40">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-slate-100 text-xl font-bold font-display">Vital Status Ratio</h3>
                            <p className="text-slate-400 text-sm">Alive vs Deceased population</p>
                        </div>
                        <span className="material-symbols-outlined text-primary/50">pie_chart</span>
                    </div>
                    <div className="flex flex-1 items-center justify-center relative min-h-[300px]">
                        <div className="relative size-60 rounded-full border-[16px] border-slate-800 flex items-center justify-center">
                            <div className="absolute inset-[-16px] rounded-full border-[16px] border-primary border-r-transparent border-b-transparent rotate-[30deg]" />
                            <div className="text-center">
                                <p className="text-4xl font-bold text-slate-100">79%</p>
                                <p className="text-xs font-bold uppercase text-primary">Alive</p>
                            </div>
                        </div>
                        <div className="absolute bottom-0 right-0 flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <div className="size-3 rounded-full bg-primary" />
                                <span className="text-sm text-slate-300">Alive (572)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="size-3 rounded-full bg-slate-800" />
                                <span className="text-sm text-slate-300">Deceased (152)</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Line Chart: Screen Time by Actor */}
                <div className="xl:col-span-2 flex flex-col gap-6 p-8 rounded-xl border border-primary/10 bg-slate-900/40">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-slate-100 text-xl font-bold font-display">Representation By Actor</h3>
                            <p className="text-slate-400 text-sm">Film presence across the cinematic timeline</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="h-[2px] w-4 bg-primary" />
                                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Screen Time Index</span>
                            </div>
                            <span className="material-symbols-outlined text-primary/50">show_chart</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 min-h-[250px] relative">
                        <svg viewBox="0 0 800 200" preserveAspectRatio="none" className="w-full h-full min-h-[200px]">
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
                            {[150, 450, 750].map((cx, i) => (
                                <circle key={i} cx={cx} cy={i === 0 ? 50 : i === 1 ? 60 : 40} r="4" fill="#d4af35" />
                            ))}
                        </svg>
                        <div className="flex justify-between px-2">
                            {ACTORS.map(({ name, character }) => (
                                <div key={name} className="text-center group cursor-default">
                                    <p className="text-slate-400 text-xs font-bold group-hover:text-primary transition-colors">
                                        {name}
                                    </p>
                                    <p className="text-[10px] text-slate-600">{character}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Banner */}
            <div className="mt-12 p-8 rounded-xl bg-primary text-background-dark flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold font-display">Deep Dive into Magical History</h2>
                    <p className="font-medium opacity-80">Access the Restricted Section for detailed character genealogies.</p>
                </div>
                <Link
                    to="/characters"
                    className="relative z-10 bg-background-dark text-primary px-8 py-3 rounded-lg font-bold hover:bg-slate-900 transition-colors"
                >
                    Unlock Archives
                </Link>
                <span className="material-symbols-outlined absolute right-[-20px] bottom-[-20px] text-[180px] opacity-10 rotate-12 pointer-events-none">
                    local_library
                </span>
            </div>
        </main>
    );
};

export default StatsPage;