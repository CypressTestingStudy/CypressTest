// type definitions for Cypress object "cy"
/// <reference types="Cypress" />

describe('My first test suit by Rodri', () =>{

    it('My first test case by Rodri', () => {
        //visit page
        cy.visit('https://www.rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ap')
        cy.wait(3000)
        cy.get('.products > :nth-child(2) > .product-name').should('have.text','Apple - 1 Kg')
        cy.get(':nth-child(2) > .stepper-input > .increment').click();
        cy.get(':nth-child(2) > .product-action > button').click();
        cy.get(':nth-child(3) > .product-name').should('have.text','Grapes - 1 Kg')
        cy.get(':nth-child(3) > .product-action > button').click();
        cy.get(':nth-child(1) > :nth-child(3) > strong').should('have.text','2')
        cy.get(':nth-child(2) > :nth-child(3) > strong').should('have.text','264') //hay un bug deberia ser 204

    })


})