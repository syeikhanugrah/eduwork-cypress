// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", function (username, password) {
  cy.visit("https://www.saucedemo.com/");

  cy.get("#user-name").type(username);
  cy.get("#password").type(password);

  cy.get("#login-button").click();
});

Cypress.Commands.add("fillCheckoutForm", function (firstName, lastName, zip) {
  cy.get("#first-name").type(firstName);
  cy.get("#last-name").type(lastName);
  cy.get("#postal-code").type(zip);
  cy.get("#continue").click();
});
