// src/components/SplashScreen.jsx
// ADD this at the top — useEffect is used but never imported
import { useEffect } from "react";

export default function SplashScreen({ onDone }) {
    useEffect(() => {
        const t = setTimeout(onDone, 2500);
        return () => clearTimeout(t);
    }, [onDone]);

    return (
        <div className="fixed inset-0 bg-background-dark flex flex-col items-center justify-center z-999">
            <span className="material-symbols-outlined text-primary text-8xl animate-pulse">bolt</span>
            <h1 className="text-primary text-4xl font-black uppercase mt-4 tracking-widest">
                Wizarding World
            </h1>
            <p className="text-slate-500 text-sm mt-2 italic">Loading the magic...</p>
            <div className="mt-8 w-48 h-1 bg-primary/20 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full animate-[load_2.5s_ease_forwards]" />
            </div>
        </div>
    );
}