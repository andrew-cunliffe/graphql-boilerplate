import { defineStep } from 'cypress-cucumber-preprocessor/steps';
import { elements, pages, images } from './reference';

defineStep(/^the "([^"]*)" page is open$/, (page) => {
    cy.visit(pages[page]);
});

defineStep(/^the "([^"]*)" contains the image "([^"]*)"$/, (element, image) => {
    cy.get(elements[element]).get('img').invoke('attr', 'src').should('be.equal', images[image]);
});
