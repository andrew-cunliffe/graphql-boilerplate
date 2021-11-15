const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    darkMode: false, // or 'media' or 'class'
    mode: 'jit',
    purge: {
        enabled: true,
        content: ['./src/**/*.{html,ts,css,scss,sass,less,styl}'],
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            gridTemplateRows: {
                layout: 'max-content auto max-content',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
