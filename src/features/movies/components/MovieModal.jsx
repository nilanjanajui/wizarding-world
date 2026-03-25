// src/features/movies/components/MovieModal.jsx

const KEY_CHARACTERS = [
    {
        id: 1,
        name: "Harry P.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCs13Mmg5oL860b24CtC85qHXdyauUiDiDcLjsporsRRDXjMN2IHQPCocKQ-lanDR62rWN_DJ2pDfA9FD2b-rQmm45oBtbdiwGZiOmw5UhFH63cXlrIO4fhHLfAIgj59RqKDLGCCcID8D2tqJ6DsmPaiDvm4JP9ZYl-ts1MoJuFgh0lkqbefMlKPURjUswNLJLAZej6ZgpefEYWfcMGERPBX9rOU8jj8JMeS9ZR-CC1TvY4wkefbESSa4c0PTb2mgIEaXt8HTymclAi",
    },
    {
        id: 2,
        name: "Hermione G.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBh0h8_t2vV4xeismJs-AXicqN96m6AFx7fhT5JhYrbXforpELxk4oq7UyOFQ48xdXKItzEcG3sgNKUCN-nn7hfGV8jxuVatUFmVp7NgJuolbeVWt95MtjxpB9ExQYPfM3PS3XNfbAvuaRo3XnZrMHHfFS6Q-sNdvE8MoRgsT-9gEW2WP4ddiPROzQG_Xir8D8obMgBE2M7yNYaaT1wvEIC49LrIRXBfj8ZZMGSgtqGvmF2FfkR9Hq2BO_-wwP9vGs4KaMX02AWMsMH",
    },
    {
        id: 3,
        name: "Ron W.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByXYPoNQwsCs-eDJtCt68gW9_R51hE-WB74gCYGEyxiFOeVwarqSW_CyaMbCdp8zZyJnBR26dsQ55GK5uK3NQGVOiUJAYot6CLoJN6TPlaxWofj2g3_xrj3wfZWw57fca78NWHThMfs57EQIWctwYQNPPfPoeROW2LiL9FOEnXGn5LOGMvdixC40JJUw4amnPpUtdTe8qyN288MOeDSyR00HcccXyuyW1nomIQtNrNX-n2L9rqTVMdGL_8hl2U4R_UR_6dYsGrEy0q",
    },
    {
        id: 4,
        name: "Sirius B.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_F6T9shVY_owHmb1CnN6lVzMeCxeAbZaTHrkveYANK6eTvMxZhN7cEKBjOWccjA_QoVgqdbDjxbjJNoQ9DLNLhPSbuRS6LIVWwpP9rlgY5g-4zWpdRWz907Xw9-YqaNx7hOCeM2cjlD4qNckijIX7e9K17Ao2pdVSKfAKBgaeYL9SVPZFen6x9Xpt_HfAoYr-EtymtkGe-rxRFN2wneHlSMLeBk5GzJYGHGn9n0AIrJ45bjWFVtU59qniMzY3y_2QGMgCFpBg0Ww-",
    },
];

const HERO_IMAGE =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB9ognYCwHMMsvmHRlQZmX-q_nyq5Hp0pbiR1rFN4XmMurPnIEwXIoJuwEOYJmuzB3FdRz7XclOXvVceZmTE1Whot06ZZzAlxbnry3_Nap57GDUs3h06_Ac_w8I2jFYZZqeyJbCywIrEzZ4jJJP2t0Ros5x7zYYdKDOaz0a_2VHmsBlV8wAmxyRx3f7z6fjMnm0d8llITaEs7xIPm1VJExesMWnIgT5DGPEE7fvB1yAkV2UI6csc1-XnlTZFB40B2Kx5ESV_d9Qzvyd";

const MovieModal = ({ movie, onClose }) => {
    if (!movie) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl bg-background-dark border border-primary/20 flex flex-col">
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background-dark/60 text-white hover:bg-primary/20 transition-colors"
                    aria-label="Close modal"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                {/* Hero Image */}
                <div className="relative h-64 md:h-96 w-full flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-black/20 z-10" />
                    <div
                        className="w-full h-full bg-center bg-cover"
                        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
                    />
                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 p-6 md:p-10 z-20 w-full">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="bg-primary text-background-dark px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider">
                                Wizarding World
                            </span>
                            <div className="flex items-center text-primary">
                                <span className="material-symbols-outlined text-sm">star</span>
                                <span className="text-sm font-bold ml-1">4.8</span>
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight leading-tight">
                            {movie.title}
                        </h1>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-10 space-y-8">
                    {/* Meta + CTA */}
                    <div className="flex flex-wrap items-center justify-between gap-6 pb-6 border-b border-primary/10">
                        <div className="flex gap-6 text-sm text-primary/80">
                            {[
                                { label: "Release", value: movie.year },
                                { label: "Director", value: movie.director },
                                { label: "Runtime", value: movie.runtime || "~2h" },
                                { label: "Rating", value: movie.rating || "PG" },
                            ].map(({ label, value }) => (
                                <div key={label} className="flex flex-col">
                                    <span className="uppercase text-[10px] tracking-widest opacity-60">
                                        {label}
                                    </span>
                                    <span className="text-slate-100 font-medium">{value}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-3 w-full sm:w-auto">
                            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-background-dark px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-[1.02]">
                                <span className="material-symbols-outlined">play_arrow</span>
                                Watch Trailer
                            </button>
                            <button className="p-3 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors">
                                <span className="material-symbols-outlined">bookmark</span>
                            </button>
                        </div>
                    </div>

                    {/* Synopsis */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                            <span className="material-symbols-outlined">auto_stories</span>
                            The Story
                        </h3>
                        <p className="text-slate-300 leading-relaxed text-lg italic">
                            {movie.synopsis ||
                                "Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for another year of adventure, mystery, and magic."}
                        </p>
                    </div>

                    {/* Key Characters */}
                    <div className="space-y-4 pb-4">
                        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                            <span className="material-symbols-outlined">groups</span>
                            Key Characters
                        </h3>
                        <div className="flex flex-wrap gap-8">
                            {KEY_CHARACTERS.map(({ id, name, image }) => (
                                <div key={id} className="flex flex-col items-center gap-2 group">
                                    <div className="size-16 rounded-full border-2 border-primary/40 group-hover:border-primary transition-colors overflow-hidden p-0.5">
                                        <img
                                            src={image}
                                            alt={name}
                                            className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-slate-400 group-hover:text-primary transition-colors">
                                        {name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Audience Score */}
                    <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-lg font-bold text-slate-100">
                                Wizard Audience Score
                            </span>
                            <div className="flex items-center gap-1 text-primary">
                                {[...Array(4)].map((_, i) => (
                                    <span
                                        key={i}
                                        className="material-symbols-outlined"
                                        style={{ fontVariationSettings: "'FILL' 1" }}
                                    >
                                        star
                                    </span>
                                ))}
                                <span className="material-symbols-outlined">star</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex-1 h-3 bg-primary/20 rounded-full overflow-hidden">
                                <div className="h-full bg-primary rounded-full w-[92%]" />
                            </div>
                            <span className="text-sm font-bold text-primary">92% Positive</span>
                        </div>
                    </div>
                </div>

                {/* Accent bar */}
                <div className="h-1 bg-gradient-to-r from-[#740001] via-primary to-[#740001] opacity-60" />
            </div>
        </div>
    );
};

export default MovieModal;