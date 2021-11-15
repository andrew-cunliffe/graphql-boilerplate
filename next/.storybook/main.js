module.exports = {
    addons: [
        '@storybook/addon-a11y',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-postcss'
    ],
    stories: [
        '../components/**/*.stories.@(tsx)'
    ],
}
