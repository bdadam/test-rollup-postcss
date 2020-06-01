module.exports = {
    theme: {},
    variants: {},
    plugins: [],
    // purge: ['./src/**/*.html', './src/**/*.tsx'],
    purge: {
        enabled: true,
        mode: 'all',
        content: ['./src/**/*.tsx'],
    },
};
