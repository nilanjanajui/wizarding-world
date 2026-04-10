import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home", end: true },
    { to: "/movies", label: "Movies" },
    { to: "/characters", label: "Characters" },
    { to: "/favorites", label: "Favorites" },
    { to: "/stats", label: "Stats" },
  ];

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 px-6 md:px-20 py-4 bg-background-dark/90 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 text-primary">
          <span className="material-symbols-outlined text-3xl">bolt</span>
          <h2 className="text-xl font-bold leading-tight tracking-tight font-display">
            Wizarding World
          </h2>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-sm font-medium border-b-2 border-primary pb-0.5"
                  : "text-slate-300 hover:text-primary text-sm font-medium transition-colors"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="flex flex-1 justify-end gap-4 items-center">
        {/* Search */}
        <label className="hidden md:flex flex-col min-w-40 h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div className="text-primary/60 flex bg-primary/10 items-center justify-center pl-4 rounded-l-lg">
              <span className="material-symbols-outlined text-xl">search</span>
            </div>
            <input
              className="flex w-full min-w-0 flex-1 rounded-r-lg text-slate-100 focus:outline-none focus:ring-1 focus:ring-primary border-none bg-primary/10 h-full placeholder:text-primary/40 px-4 text-base font-normal"
              placeholder="Search spells, names..."
            />
          </div>
        </label>

        {/* Spell button */}
        <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-secondary text-primary hover:bg-secondary/80 transition-all border border-primary/20">
          <span className="material-symbols-outlined">auto_fix_high</span>
        </button>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex items-center justify-center h-10 w-10 text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="material-symbols-outlined">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-background-dark border-b border-primary/20 py-4 flex flex-col gap-1 px-6 lg:hidden">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-sm font-medium py-2"
                  : "text-slate-300 text-sm font-medium py-2 hover:text-primary transition-colors"
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
