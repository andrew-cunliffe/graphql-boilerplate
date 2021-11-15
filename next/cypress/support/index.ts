import './commands';
import '@cypress/code-coverage/support';
import 'tailwindcss/dist/tailwind.min.css';

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to select DOM element by data-cy attribute.
             * @example cy.getCy('name')
             */
            getCy(value: string): Chainable<Element | JQuery<HTMLElement>>;
        }
    }
}
