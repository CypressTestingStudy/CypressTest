// type definitions for Cypress object "cy"
/// <reference types="cypress" />

export function myfirstfunction() {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
 
        cy.get('[for="radio1"] > .radioButton')  
        .check()
        .should('be.checked');
    
        cy.get('#dropdown-class-example')  
        .select('option2')  
        .should('have.value', 'option2');

        cy.get('#checkBoxOption3')
        .check()
        .should('be.checked'); 
}

