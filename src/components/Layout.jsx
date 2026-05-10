import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="bg-background-dark text-slate-100 min-h-screen font-display flex flex-col">
            <Navbar />
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
}