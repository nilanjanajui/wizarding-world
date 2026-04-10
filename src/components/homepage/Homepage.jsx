
const HERO_BG =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAHnGretIinLlxxUyLkcN-wbd9dY7TgycNXWNvd9zd8QEnx_2BPhjT740yntYyuY_LY4pAM3ruIsLGE-4JUoMB4T87JpF1uBFV4xzzSmFaq9x1afBtwCccL59VDChBUsqIewq4qPQDufzJPkv7nx2FX3ut0ryibDlKTKwzRWMip49AT0Kj6MCKJHd81cBQptwE2WzkXXhz24I_bmvXKF510MMCz-rpFSQPj9ve-UUCPI9stTksXslI--oU0-1UN4Tl3MF3gfXyfWBP4";

const movies = [
    {
        id: 1,
        title: "Philosopher's Stone",
        label: "Movie 1",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnmEc1SWF-4Ignoao6DqTGRkZcRT5ytMP0TU3bVw-VuKF68mww9AWbnVbzTmyiKdaA-1cCwUTuVlOjchltbBcQSWvltlRubt9N9QSkoegzGxeA-VcQJPOBtSY-FkJRlGbxFI-j64_CLg_E7LNSwb7cXZtMSWBHyGox2O2J0AKWvD_MgdNUbgs3aMmtSw8KiWK8XxN1RQq0nyFsPdSjBYirREAAxwoFgIXYURzBIqGuDezfi0FH0Z_oo-4WlaEhNV-o09JjygAh1MBs",
    },
    {
        id: 2,
        title: "Chamber of Secrets",
        label: "Movie 2",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsGx3vfFC1a38XjPjDFx_Y5VsNKsVhO0fjpw3ichYDLQzOWvyq57sZGWjs49KJlVGVb_k8jK9apWYztDHP7TMyUiG-Q4CDwPRm1uigWIO9GOfrTaJV5MSxM-kaQT3QTexzA6n6TtBvo5tCwSl4Fx1AyMCxV6xR6OgtAVXIvS9VIhb9gZdZimg5-ydpto6WTFdDk_gZJ39kvfxs8gG_LpmjLgm_WKbmwbZvxPSO3K1sZRYhVSthaHEhPsKpVmDmMdUl9f3-0lsriQ57",
    },
    {
        id: 3,
        title: "Prisoner of Azkaban",
        label: "Movie 3",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLSvVoOGUJae3Rz39lu5s2DbDGy1LMnpOqhlNs89LUKzJZY54xMeJZSjG_qoFICArK16qfryUMVvPXFGCzdMuTY4NqqvOcjm1Ei76klu7uUBNoMoWErPOx3-K563fihph9e4HPOG_eyeCfkZjGcNOmYg0aEuB6OYMWrzn09AIg_WNCB0bNZFSv82yAgvYfZUV2bTEPnzGG8EzgJ3Hid6SU3bTXimufiXvy3AZsRNlQ03lfwLjlVGEfUXa6VtPeV-t4lgqxQV3mzp81",
    },
    {
        id: 4,
        title: "Goblet of Fire",
        label: "Movie 4",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAE5oz37B27HU6iQEFSauhyYniAs0Z0ibGbK5QG2bcTz1sxSCRxSIrCVf4bKaEGfMRzh2AnP3BlDCe2My0CdGpC628VVbEOei2Fy3VOsRMHJd8-wiP4zfdncHllwuk5Gkl7RUQqhvwmjR8lWPAQmNmgUwON6a33NxerTzDOOd-Ty3Le-hbiqOEOObJbKUGQNKDT3iqgscdfK_QkysWFB4MG_HO2GfOKoMRcn76if0YtLoZUV5mAOOAdsOrGS5r23wAZjOyMkalw0lfx",
    },
];

const characters = [
    {
        id: 1,
        name: "Harry Potter",
        house: "Gryffindor",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCirZRycxXS_j3fT2pV4vCCxt_EXiVn-uFqCfaV2Ob9sKptG7KqCCFcTpCPhCVpapD0ffSw2ieiSEZCwssM_IiADmoiJZh1A1l2BErszpaSAYup3aNkF9MTpO5sVH-vrqdht8w16F7o5J2UZROSBBu5bJFvhAIpynavTvIjkyJ1biFYL0seXcMVQzs2I8eRZu3ExuBQdqpF1qFezLgCgwWZxAYtCxu8NZgwhdcXgbii2RUrJJpixl5dSGUpUf98iB6-BjOtGXr8GBYY",
    },
    {
        id: 2,
        name: "Hermione Granger",
        house: "Gryffindor",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDY_2iprYYd0C0JOFNrTVGxA7hQSTzfWvnZ7SGCPCrHZhQzWxqQofaQ3PyvrYBH5YD5hqWnE3vJUva0BPMY8N_pC8orkt33h8fcaAJROimEM3pheVn50WKkRizAweek9gNz4RAtUyXRwU2SNS9OI3YsAsuf7iRKn2hK-AEEFiM3UIbhRV6PnE8d8tNEkGE7XT25YHN6x2iMlktzcFesHAapj2UgeSuAID_5H7bF_ZYCzXlaRxGmJQ0IwB6EfApnBMerDCJ9kAlfTU7C",
    },
    {
        id: 3,
        name: "Ron Weasley",
        house: "Gryffindor",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5ttvhRTd-XLrzZ_yC_W9yf4bWjcI9kFaeQF9EbuJDUuQJ4dcGdmByim_4cNtN1MngSmmz7k4BcO8_1zyFiImpgpzpPjAyS1xKwJxomTWrtIh3NSZTW-FYfBZEOjP33XSeV4FNDsmQOiO-TpBpBCIuf3l4c5JkAWZ4HanzKlvDXX7Eh4Wzn4qu1peWDVVM4ERkTTrdfiLDWT2DBYLlW0NnZOl2Rs6Z26sTVEELRnubS_3HjoMkccDSY2vBMRwj03XjY0_ViYxhaqbe",
    },
    {
        id: 4,
        name: "Albus Dumbledore",
        house: "Headmaster",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVH4qFLnyrFwxEUIJCo6jp5jIBRmNxTxvrlQ4RfevU4bgR6ahLKqQhGQOeZOWuPqb-6pDT9WWWSsbOZtpkqdQSMgfErjGKpgXJGaga41-otjmUuJa3FvhiSVmqUJTb6OiTpkggT70tI_7P6GwFQCXLTTq1UcgMi_eGJsSLJk6e4RWcivQPTxri_KT6NInxuhL-kqQhxert8GhFHFdezduhGDKtoOT7H55ZhEYBgdxTay5zIUEKJRPA6fwRf8lq6uePF43kN1RpBBmq",
    },
    {
        id: 5,
        name: "Severus Snape",
        house: "Slytherin",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfZhQNzlEOx7Pys7XqQcjNjhxRajcKBZEYZbgDDBp01jCSRA9Xd4xRp1meEQXgZYVcFjg8G3xN6MCkxtYPZX4MWd9ILUWy-ldkq0X2vNUDrpPR1CsJPxcVOaWKKsDfZMk4abRBYnZsWCQTbYsFrXD6jVYkw7lhn_a_H-AKdDojCxbSQuayQzLTSTZXbf7fE0p-J46T0S-VvjT4x7OsHcNybJmH4iVmICls_cQZh75VWL-69Yn7NLeCOcBrQ4tGASeM77_ehzmp8Wna",
    },
];

const stats = [
    { label: "Movies", value: "8", icon: "movie", barWidth: "w-full" },
    { label: "Characters", value: "70+", icon: "groups", barWidth: "w-[85%]" },
    { label: "Houses", value: "4", icon: "fort", barWidth: "w-full" },
];

// ── Reusable Sub-components ──────────────────────────────────────────────────

function StatCard({ label, value, icon, barWidth }) {
    return (
        <div className="flex min-w-50 flex-1 flex-col gap-3 rounded-xl p-8 border border-primary/20 bg-background-dark/40 backdrop-blur-sm group hover:border-primary/50 transition-all">
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
                <div className={`bg-primary h-full ${barWidth}`} />
            </div>
        </div>
    );
}

function MovieCard({ title, label, img }) {
    return (
        <div className="group relative overflow-hidden rounded-xl aspect-2/3 border border-primary/10">
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                    backgroundImage: `linear-gradient(0deg, rgba(32,29,18,0.9) 0%, rgba(32,29,18,0) 50%), url("${img}")`,
                }}
            />
            <div className="absolute bottom-0 left-0 p-4 w-full">
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">
                    {label}
                </p>
                <p className="text-white text-lg font-bold leading-tight">{title}</p>
            </div>
        </div>
    );
}

function CharacterCard({ name, house, img }) {
    return (
        <div className="flex flex-col items-center gap-4 group">
            <div className="relative w-full aspect-square rounded-full border-2 border-primary/20 p-2 group-hover:border-primary transition-all overflow-hidden bg-background-dark">
                <div
                    className="w-full h-full rounded-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url("${img}")` }}
                />
            </div>
            <div className="text-center">
                <p className="text-slate-100 font-bold text-lg">{name}</p>
                <p className="text-primary/70 text-sm">{house}</p>
            </div>
        </div>
    );
}

// ── Main Component ───────────────────────────────────────────────────────────

export default function Homepage() {
    return (
        <main className="flex-1">
            {/* ── Hero ── */}
            <section className="px-6 md:px-20 py-10">
                <div className="relative overflow-hidden rounded-xl bg-slate-900 border border-primary/30 shadow-2xl">
                    <div
                        className="flex min-h-130 flex-col gap-6 items-center justify-center p-8 text-center bg-cover bg-center"
                        style={{
                            backgroundImage: `linear-gradient(rgba(32,29,18,0.7) 0%, rgba(32,29,18,0.95) 100%), url("${HERO_BG}")`,
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
                        <div className="flex gap-4 mt-4">
                            <button className="flex min-w-45 cursor-pointer items-center justify-center rounded-full h-14 px-8 bg-primary text-background-dark text-lg font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                                Explore Characters
                            </button>
                            <button className="flex min-w-45 cursor-pointer items-center justify-center rounded-full h-14 px-8 border-2 border-primary text-primary text-lg font-bold hover:bg-primary/10 transition-colors">
                                Watch Trailer
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Stats ── */}
            <section className="px-6 md:px-20 py-8">
                <div className="flex flex-wrap gap-6">
                    {stats.map((s) => (
                        <StatCard key={s.label} {...s} />
                    ))}
                </div>
            </section>

            {/* ── Featured Movies ── */}
            <section className="px-6 md:px-20 py-12">
                <div className="flex items-center justify-between mb-8 border-l-4 border-secondary pl-4">
                    <h2 className="text-slate-100 text-3xl font-bold tracking-tight">
                        Featured Movies
                    </h2>
                    <a
                        href="#"
                        className="text-primary hover:underline text-sm font-semibold flex items-center gap-1"
                    >
                        View All{" "}
                        <span className="material-symbols-outlined text-sm">
                            arrow_forward
                        </span>
                    </a>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {movies.map((m) => (
                        <MovieCard key={m.id} {...m} />
                    ))}
                </div>
            </section>

            {/* ── Famous Characters ── */}
            <section className="px-6 md:px-20 py-12 bg-background-dark/20">
                <div className="flex items-center justify-between mb-8 border-l-4 border-primary pl-4">
                    <h2 className="text-slate-100 text-3xl font-bold tracking-tight">
                        Famous Witches &amp; Wizards
                    </h2>
                    <div className="flex gap-2">
                        <button className="p-2 rounded-full border border-primary/20 text-primary hover:bg-primary/10">
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button className="p-2 rounded-full border border-primary/20 text-primary hover:bg-primary/10">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                    {characters.map((c) => (
                        <CharacterCard key={c.id} {...c} />
                    ))}
                </div>
            </section>
        </main>
    );
}