// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('API Testing LocalEnv', () => {
  it('TC01 - GET - Returns JSON', () => {
    cy.request('/posts')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');
  });

  it('TC02 - GET - Loads 3 items', () => {
    cy.request('/posts')
      .its('body')
      .should('have.length', 3);
  });
  
 
});