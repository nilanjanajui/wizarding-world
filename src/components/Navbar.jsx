// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

const navLinks = [
    { label: "Home", path: "/" },
    { label: "Movies", path: "/movies" },
    { label: "Characters", path: "/characters" },
    { label: "Favorites", path: "/favorites" },
    { label: "Stats", path: "/stats" },
];

const Navbar = ({ searchValue = "", onSearchChange }) => {
    const location = useLocation();

    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 px-6 md:px-20 py-4 bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
            {/* Logo + Nav Links */}
            <div className="flex items-center gap-8">
                <Link to="/" className="flex items-center gap-3 text-primary">
                    <span className="material-symbols-outlined text-3xl">bolt</span>
                    <h2 className="text-xl font-bold leading-tight tracking-tight">
                        Wizarding World
                    </h2>
                </Link>

                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map(({ label, path }) => (
                        <Link
                            key={path}
                            to={path}
                            className={`text-sm font-medium transition-colors ${location.pathname === path
                                    ? "text-primary"
                                    : "text-slate-300 hover:text-primary"
                                }`}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Search + Action Button */}
            <div className="flex flex-1 justify-end gap-4">
                <label className="hidden md:flex flex-col min-w-40 h-10 max-w-64">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                        <div className="text-primary/60 flex border-none bg-primary/10 items-center justify-center pl-4 rounded-l-lg">
                            <span className="material-symbols-outlined text-xl">search</span>
                        </div>
                        <input
                            type="text"
                            value={searchValue}
                            onChange={(e) => onSearchChange?.(e.target.value)}
                            className="flex w-full min-w-0 flex-1 rounded-lg text-slate-100 focus:outline-0 focus:ring-1 focus:ring-primary border-none bg-primary/10 h-full placeholder:text-primary/40 px-4 rounded-l-none text-base font-normal"
                            placeholder="Search spells, names..."
                        />
                    </div>
                </label>

                <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-secondary text-primary hover:bg-secondary/80 transition-all border border-primary/20">
                    <span className="material-symbols-outlined">auto_fix_high</span>
                </button>
            </div>
        </header>
    );
};

export default Navbar;