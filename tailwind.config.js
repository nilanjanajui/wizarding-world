/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#d4af35",
                secondary: "#740001",
                "background-dark": "#201d12",
                "background-light": "#f8f7f6",
            },
            fontFamily: { display: ["Newsreader", "serif"] },
        },
    },
    plugins: [],
};