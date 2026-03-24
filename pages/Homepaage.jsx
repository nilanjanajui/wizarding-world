// src/pages/HomePage.jsx
import HeroSection from "../features/home/components/HeroSection";
import StatsSection from "../features/home/components/StatsSection";
import FeaturedMovies from "../features/home/components/FeaturedMovies";
import FeaturedCharacters from "../features/home/components/FeaturedCharacters";

const HomePage = () => {
    return (
        <main className="flex-1">
            <HeroSection />
            <StatsSection />
            <FeaturedMovies />
            <FeaturedCharacters />
        </main>
    );
};

export default HomePage;