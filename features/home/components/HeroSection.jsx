// src/features/home/components/HeroSection.jsx
import { useNavigate } from "react-router-dom";

const HERO_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAHnGretIinLlxxUyLkcN-wbd9dY7TgycNXWNvd9zd8QEnx_2BPhjT740yntYyuY_LY4pAM3ruIsLGE-4JUoMB4T87JpF1uBFV4xzzSmFaq9x1afBtwCccL59VDChBUsqIewq4qPQDufzJPkv7nx2FX3ut0ryibDlKTKwzRWMip49AT0Kj6MCKJHd81cBQptwE2WzkXXhz24I_bmvXKF510MMCz-rpFSQPj9ve-UUCPI9stTksXslI--oU0-1UN4Tl3MF3gfXyfWBP4";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="px-6 md:px-20 py-10">
      <div className="relative overflow-hidden rounded-xl bg-slate-900 border border-primary/30 shadow-2xl">
        <div
          className="flex min-h-[520px] flex-col gap-6 items-center justify-center p-8 text-center bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(32, 29, 18, 0.7) 0%, rgba(32, 29, 18, 0.95) 100%), url("${HERO_BG}")`,
          }}
        >
          {/* Headline */}
          <div className="flex flex-col gap-4 max-w-3xl">
            <h1 className="text-primary text-5xl md:text-7xl font-black leading-tight tracking-tight uppercase">
              Harry Potter Universe Explorer
            </h1>
            <h2 className="text-slate-300 text-lg md:text-2xl font-light italic">
              Discover Movies • Characters • Hogwarts Houses
            </h2>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => navigate("/characters")}
              className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-full h-14 px-8 bg-primary text-background-dark text-lg font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20"
            >
              Explore Characters
            </button>
            <button className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-full h-14 px-8 border-2 border-primary text-primary text-lg font-bold hover:bg-primary/10 transition-colors">
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;