import { mount } from '@cypress/react';

import { Button } from '.';

describe('<Button />', () => {
    beforeEach(() => {
        mount(<Button type="button">Click me</Button>);
    });

    it('is visible on the page', () => {
        cy.getCy('button').contains('Click me').should('be.visible');
    });
});
