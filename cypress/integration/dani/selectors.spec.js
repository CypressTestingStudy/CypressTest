// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe ('Selectors Class', () => {

    const rutica = 'https://rahulshettyacademy.com/AutomationPractice/';

    beforeEach(() => {
        cy.visit(rutica);
      })

    describe('Selectors Part 1', ()=> {

        it('Should be select All RadioBtn', () =>  {
            cy.get('[type="radio"]')
            .check()
            .should('be.checked');
        });
        debugger;
        it('Should be write into text', () => {
            cy.get('#autocomplete')
            .type('Hola')
            .should('have.value', 'Hola');
        });
        it('Should be select an option of the dropdown', () => {
            cy.get('#dropdown-class-example')
            .select('option1')
            .should('have.value', 'option1');
        });
        it('Should be select All Checkbox', () => {
            cy.get('[type="checkbox"]')
            .check()
            .should('be.checked');
        });
    });
    
    describe.skip('Selectors Part 2', () => {
    
        it('Shoud be open a new window', () => {
            
        });
        it('Shoud be switch tab', () => {
            
        });
        it('Shoud be show alert type JS', () => {
            
        });
    });

});


