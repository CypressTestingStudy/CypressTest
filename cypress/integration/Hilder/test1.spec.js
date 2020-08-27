/// <reference types="cypress"/>

describe('Test suite by Hilder', () => {
    beforeEach( () => {
        cy.visit('http://automationpractice.com/index.php')
    })
    it('Sección de mujeres', () => {
        cy.get('.sf-with-ul').contains('Women').click() 
        cy.get('.navigation_page').should('have.text','Women')        
        cy.get('.title_block').should('contain','Women')

    })
})

