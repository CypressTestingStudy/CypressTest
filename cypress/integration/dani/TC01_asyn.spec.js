// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test by Dani', function() {

    it('Visits the ToolsQA Demo Page and check the menu items', function() {
    //Visit the Demo QA Website
    cy.visit("https://www.cypress.io/");
  });
});