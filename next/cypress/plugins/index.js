const injectDevServer = require('@cypress/react/plugins/next');

module.exports = (on, config) => {
    require('@cypress/code-coverage/task')(on, config);

    if (config.testingType === 'component') {
        injectDevServer(on, config);
    }
    return config;
};
