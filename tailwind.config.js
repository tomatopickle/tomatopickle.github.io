module.exports = {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                mytheme: {

                    "primary": "#F87272",

                    "secondary": "#D926A9",

                    "accent": "#1FB2A6",

                    "neutral": "#1f2937",

                    "base-100": "#192735",

                    "info": "#3ABFF8",

                    "success": "#36D399",

                    "warning": "#FBBD23",

                    "error": "#F87272",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
}