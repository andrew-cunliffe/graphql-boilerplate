const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
    require('@cypress/code-coverage/task')(on, config);
    
    on('file:preprocessor', cucumber());
    return config;
}
