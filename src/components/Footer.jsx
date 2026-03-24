// src/components/Footer.jsx
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="mt-auto px-6 md:px-20 py-10 border-t border-primary/10 bg-background-dark flex flex-col items-center gap-6">
            {/* Brand */}
            <div className="flex items-center gap-3 text-primary/60">
                <span className="material-symbols-outlined text-2xl">auto_awesome</span>
                <p className="text-lg font-bold">Wizarding World Explorer</p>
            </div>

            {/* Links */}
            <div className="flex gap-8">
                <Link
                    to="/privacy"
                    className="text-slate-500 hover:text-primary transition-colors text-sm"
                >
                    Privacy Policy
                </Link>
                <Link
                    to="/terms"
                    className="text-slate-500 hover:text-primary transition-colors text-sm"
                >
                    Terms of Magic
                </Link>
                <Link
                    to="/contact"
                    className="text-slate-500 hover:text-primary transition-colors text-sm"
                >
                    Owl Contact
                </Link>
            </div>

            {/* Credits */}
            <div className="flex flex-col items-center gap-2">
                <p className="text-slate-500 text-xs">
                    Built with React | Powered by Magic &amp; Tailwind CSS
                </p>
                <p className="text-slate-600 text-[10px] uppercase tracking-widest">
                    © {new Date().getFullYear()} Wizarding World Explorer. All Rights
                    Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;