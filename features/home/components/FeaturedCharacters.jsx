// src/features/home/components/FeaturedCharacters.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

const FEATURED_CHARACTERS = [
    {
        id: 1,
        name: "Harry Potter",
        house: "Gryffindor",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCirZRycxXS_j3fT2pV4vCCxt_EXiVn-uFqCfaV2Ob9sKptG7KqCCFcTpCPhCVpapD0ffSw2ieiSEZCwssM_IiADmoiJZh1A1l2BErszpaSAYup3aNkF9MTpO5sVH-vrqdht8w16F7o5J2UZROSBBu5bJFvhAIpynavTvIjkyJ1biFYL0seXcMVQzs2I8eRZu3ExuBQdqpF1qFezLgCgwWZxAYtCxu8NZgwhdcXgbii2RUrJJpixl5dSGUpUf98iB6-BjOtGXr8GBYY",
    },
    {
        id: 2,
        name: "Hermione Granger",
        house: "Gryffindor",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDY_2iprYYd0C0JOFNrTVGxA7hQSTzfWvnZ7SGCPCrHZhQzWxqQofaQ3PyvrYBH5YD5hqWnE3vJUva0BPMY8N_pC8orkt33h8fcaAJROimEM3pheVn50WKkRizAweek9gNz4RAtUyXRwU2SNS9OI3YsAsuf7iRKn2hK-AEEFiM3UIbhRV6PnE8d8tNEkGE7XT25YHN6x2iMlktzcFesHAapj2UgeSuAID_5H7bF_ZYCzXlaRxGmJQ0IwB6EfApnBMerDCJ9kAlfTU7C",
    },
    {
        id: 3,
        name: "Ron Weasley",
        house: "Gryffindor",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB5ttvhRTd-XLrzZ_yC_W9yf4bWjcI9kFaeQF9EbuJDUuQJ4dcGdmByim_4cNtN1MngSmmz7k4BcO8_1zyFiImpgpzpPjAyS1xKwJxomTWrtIh3NSZTW-FYfBZEOjP33XSeV4FNDsmQOiO-TpBpBCIuf3l4c5JkAWZ4HanzKlvDXX7Eh4Wzn4qu1peWDVVM4ERkTTrdfiLDWT2DBYLlW0NnZOl2Rs6Z26sTVEELRnubS_3HjoMkccDSY2vBMRwj03XjY0_ViYxhaqbe",
    },
    {
        id: 4,
        name: "Albus Dumbledore",
        house: "Headmaster",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDVH4qFLnyrFwxEUIJCo6jp5jIBRmNxTxvrlQ4RfevU4bgR6ahLKqQhGQOeZOWuPqb-6pDT9WWWSsbOZtpkqdQSMgfErjGKpgXJGaga41-otjmUuJa3FvhiSVmqUJTb6OiTpkggT70tI_7P6GwFQCXLTTq1UcgMi_eGJsSLJk6e4RWcivQPTxri_KT6NInxuhL-kqQhxert8GhFHFdezduhGDKtoOT7H55ZhEYBgdxTay5zIUEKJRPA6fwRf8lq6uePF43kN1RpBBmq",
    },
    {
        id: 5,
        name: "Severus Snape",
        house: "Slytherin",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAfZhQNzlEOx7Pys7XqQcjNjhxRajcKBZEYZbgDDBp01jCSRA9Xd4xRp1meEQXgZYVcFjg8G3xN6MCkxtYPZX4MWd9ILUWy-ldkq0X2vNUDrpPR1CsJPxcVOaWKKsDfZMk4abRBYnZsWCQTbYsFrXD6jVYkw7lhn_a_H-AKdDojCxbSQuayQzLTSTZXbf7fE0p-J46T0S-VvjT4x7OsHcNybJmH4iVmICls_cQZh75VWL-69Yn7NLeCOcBrQ4tGASeM77_ehzmp8Wna",
    },
];

// Individual character card
const CharacterCard = ({ name, house, image }) => (
    <Link to="/characters" className="flex flex-col items-center gap-4 group">
        <div className="relative w-full aspect-square rounded-full border-2 border-primary/20 p-2 group-hover:border-primary transition-all overflow-hidden bg-background-dark">
            <div
                className="w-full h-full rounded-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url("${image}")` }}
            />
        </div>
        <div className="text-center">
            <p className="text-slate-100 font-bold text-lg">{name}</p>
            <p className="text-primary/70 text-sm">{house}</p>
        </div>
    </Link>
);

const FeaturedCharacters = () => {
    // Simple scroll index state (for future carousel enhancement)
    const [, setScrollIndex] = useState(0);

    const handlePrev = () => setScrollIndex((i) => Math.max(i - 1, 0));
    const handleNext = () =>
        setScrollIndex((i) => Math.min(i + 1, FEATURED_CHARACTERS.length - 1));

    return (
        <section className="px-6 md:px-20 py-12 bg-background-dark/20">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-8 border-l-4 border-primary pl-4">
                <h2 className="text-slate-100 text-3xl font-bold tracking-tight">
                    Famous Witches &amp; Wizards
                </h2>
                <div className="flex gap-2">
                    <button
                        onClick={handlePrev}
                        className="p-2 rounded-full border border-primary/20 text-primary hover:bg-primary/10 transition-colors"
                        aria-label="Previous"
                    >
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button
                        onClick={handleNext}
                        className="p-2 rounded-full border border-primary/20 text-primary hover:bg-primary/10 transition-colors"
                        aria-label="Next"
                    >
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </div>

            {/* Characters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {FEATURED_CHARACTERS.map((char) => (
                    <CharacterCard key={char.id} {...char} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedCharacters;