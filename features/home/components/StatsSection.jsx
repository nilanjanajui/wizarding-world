// src/features/home/components/StatsSection.jsx

const stats = [
    {
        label: "Movies",
        value: "8",
        icon: "movie",
        barWidth: "w-full",
    },
    {
        label: "Characters",
        value: "70+",
        icon: "groups",
        barWidth: "w-[85%]",
    },
    {
        label: "Houses",
        value: "4",
        icon: "fort",
        barWidth: "w-full",
    },
];

const StatsSection = () => {
    return (
        <section className="px-6 md:px-20 py-8">
            <div className="flex flex-wrap gap-6">
                {stats.map(({ label, value, icon, barWidth }) => (
                    <div
                        key={label}
                        className="flex min-w-[200px] flex-1 flex-col gap-3 rounded-xl p-8 border border-primary/20 bg-background-dark/40 backdrop-blur-sm group hover:border-primary/50 transition-all"
                    >
                        {/* Label + Icon */}
                        <div className="flex justify-between items-start">
                            <p className="text-primary/80 text-lg font-medium">{label}</p>
                            <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">
                                {icon}
                            </span>
                        </div>

                        {/* Value */}
                        <p className="text-slate-100 tracking-tight text-5xl font-bold leading-tight">
                            {value}
                        </p>

                        {/* Progress Bar */}
                        <div className="w-full bg-primary/10 h-1 rounded-full overflow-hidden">
                            <div className={`bg-primary h-full ${barWidth}`} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsSection;