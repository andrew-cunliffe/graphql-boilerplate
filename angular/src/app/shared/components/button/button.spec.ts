import { mount } from '@jscutlery/cypress-angular/mount';
import { ButtonModule } from './button.module';

describe('<Button />', () => {
    beforeEach(() => {
        mount(`<app-button>Click me</app-button>`, { imports: [ButtonModule], cssFile: 'node_modules/tailwindcss/dist/tailwind.min.css' });
    });

    it('is visible on the page', () => {
        cy.get('button').contains('Click me').should('be.visible');
    });
});
