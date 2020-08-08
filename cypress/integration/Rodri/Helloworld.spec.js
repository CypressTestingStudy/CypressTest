// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function() {

    it('looking for something on google', function() {
    //Vivisit tucarro page
    cy.visit("https://www.google.com/");
    //tucarro.com.co fail??

    // Clicking on ingresar
    //cy.get('.jLFyf gsfi').type("cypress{enter}");??
    cy.get('.gLFyf').type("cypress{enter}");
    
    cy.get('[href="https://www.cypress.io/"] > .LC20lb').should('have.text', 'JavaScript End to End Testing Framework | cypress.io')
})
});