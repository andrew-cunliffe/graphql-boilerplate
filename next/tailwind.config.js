const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    darkMode: false, // or 'media' or 'class'
    mode: 'jit',
    plugins: [],
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    variants: {
        extend: {},
    },
};
