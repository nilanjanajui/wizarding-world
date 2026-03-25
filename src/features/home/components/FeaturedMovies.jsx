// src/features/home/components/FeaturedMovies.jsx
import { Link } from "react-router-dom";

const FEATURED_MOVIES = [
    {
        id: 1,
        label: "Movie 1",
        title: "Philosopher's Stone",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAnmEc1SWF-4Ignoao6DqTGRkZcRT5ytMP0TU3bVw-VuKF68mww9AWbnVbzTmyiKdaA-1cCwUTuVlOjchltbBcQSWvltlRubt9N9QSkoegzGxeA-VcQJPOBtSY-FkJRlGbxFI-j64_CLg_E7LNSwb7cXZtMSWBHyGox2O2J0AKWvD_MgdNUbgs3aMmtSw8KiWK8XxN1RQq0nyFsPdSjBYirREAAxwoFgIXYURzBIqGuDezfi0FH0Z_oo-4WlaEhNV-o09JjygAh1MBs",
    },
    {
        id: 2,
        label: "Movie 2",
        title: "Chamber of Secrets",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBsGx3vfFC1a38XjPjDFx_Y5VsNKsVhO0fjpw3ichYDLQzOWvyq57sZGWjs49KJlVGVb_k8jK9apWYztDHP7TMyUiG-Q4CDwPRm1uigWIO9GOfrTaJV5MSxM-kaQT3QTexzA6n6TtBvo5tCwSl4Fx1AyMCxV6xR6OgtAVXIvS9VIhb9gZdZimg5-ydpto6WTFdDk_gZJ39kvfxs8gG_LpmjLgm_WKbmwbZvxPSO3K1sZRYhVSthaHEhPsKpVmDmMdUl9f3-0lsriQ57",
    },
    {
        id: 3,
        label: "Movie 3",
        title: "Prisoner of Azkaban",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDLSvVoOGUJae3Rz39lu5s2DbDGy1LMnpOqhlNs89LUH89ZY54xMeJZSjG_qoFICArK16qfryUMVvPXFGCzdMuTY4NqqvOcjm1Ei76klu7uUBNoMoWErPOx3-K563fihph9e4HPOG_eyeCfkZjGcNOmYg0aEuB6OYMWrzn09AIg_WNCB0bNZFSv82yAgvYfZUV2bTEPnzGG8EzgJ3Hid6SU3bTXimufiXvy3AZsRNlQ03lfwLjlVGEfUXa6VtPeV-t4lgqxQV3mzp81",
    },
    {
        id: 4,
        label: "Movie 4",
        title: "Goblet of Fire",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAE5oz37B27HU6iQEFSauhyYniAs0Z0ibGbK5QG2bcTz1sxSCRxSIrCVf4bKaEGfMRzh2AnP3BlDCe2My0CdGpC628VVbEOei2Fy3VOsRMHJd8-wiP4zfdncHllwuk5Gkl7RUQqhvwmjR8lWPAQmNmgUwON6a33NxerTzDOOd-Ty3Le-hbiqOEOObJbKUGQNKDT3iqgscdfK_QkysWFB4MG_HO2GfOKoMRcn76if0YtLoZUV5mAOOAdsOrGS5r23wAZjOyMkalw0lfx",
    },
];

// Individual movie card
const MovieCard = ({ label, title, image }) => (
    <div className="group relative overflow-hidden rounded-xl aspect-[2/3] border border-primary/10 cursor-pointer">
        {/* Background image */}
        <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{
                backgroundImage: `linear-gradient(0deg, rgba(32, 29, 18, 0.9) 0%, rgba(32, 29, 18, 0) 50%), url("${image}")`,
            }}
        />
        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 p-4 w-full">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">
                {label}
            </p>
            <p className="text-white text-lg font-bold leading-tight">{title}</p>
        </div>
    </div>
);

const FeaturedMovies = () => {
    return (
        <section className="px-6 md:px-20 py-12">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-8 border-l-4 border-secondary pl-4">
                <h2 className="text-slate-100 text-3xl font-bold tracking-tight">
                    Featured Movies
                </h2>
                <Link
                    to="/movies"
                    className="text-primary hover:underline text-sm font-semibold flex items-center gap-1"
                >
                    View All{" "}
                    <span className="material-symbols-outlined text-sm">
                        arrow_forward
                    </span>
                </Link>
            </div>

            {/* Movie Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {FEATURED_MOVIES.map((movie) => (
                    <MovieCard key={movie.id} {...movie} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedMovies;