/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{html,js,ts,jsx,tsx}",
        "./components/**/*.{html,js,ts,jsx,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "satoshi-variable": "satoshi-variable",
                "satoshi-light": "satoshi-light",
                "satoshi-regular": "satoshi-regular",
                "satoshi-medium": "satoshi-medium",
                "satoshi-bold": "satoshi-bold",
                "satoshi-black": "satoshi-black",
            },
            colors: {
                ...colors,
                "custom-dark": "#11101B",
                "custom-purple": "#c95105",
                "custom-pink": "#ffe602",
                "custom-teal": "#fefabb",
                // "custom-purple": "#8000ff",
                // "custom-pink": "#cf59e6",
                // "custom-teal": "#6bc5f8",
            },
            letterSpacing: {
                tightest: "-.075em",
                tighter: "-.05em",
                tight: "-.01em",
                normal: "0",
                wide: ".025em",
                wider: ".05em",
                widest: ".1em",
                widest: ".25em",
            },
            animation: {
                blob: "blob 7s infinite",
            },
            keyframes: {
                blob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "33%": {
                        transform: "translate(30px, -50px) scale(1.1)",
                    },
                    "66%": {
                        transform: "translate(-20px, 20px) scale(0.9)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                },
            },
        },
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                ".container": {
                    maxWidth: "100%",
                    "@screen sm": {
                        maxWidth: "640px",
                    },
                    "@screen md": {
                        maxWidth: "768px",
                    },
                    "@screen lg": {
                        maxWidth: "1280px",
                    },
                    "@screen xl": {
                        maxWidth: "1400px",
                    },
                },
            });
        },
    ],
};
