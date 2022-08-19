import Chainable = Cypress.Chainable;

export const getGreeting = (): Chainable<JQuery<HTMLElementTagNameMap['h1']>> =>
  cy.get('h1');
