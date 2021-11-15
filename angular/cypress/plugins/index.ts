import { startAngularDevServer } from '@jscutlery/cypress-angular';

module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config);

  on('dev-server:start', (options) =>
    startAngularDevServer({
      options,
      tsConfig: 'tsconfig.cypress.json',
      target: 'comp-test:build',
    })
  );
  return config;
};
