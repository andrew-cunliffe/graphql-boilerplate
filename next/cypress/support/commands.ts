Cypress.Commands.add('getCy', (value) => {
    return cy.get(`[data-cy="${value}"]`);
});
