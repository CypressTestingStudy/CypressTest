// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import {
    Selectors
  } from '../page-objects/indios-page';

    describe('Selectors Part 1', ()=> {

        const rutica = 'https://rahulshettyacademy.com/AutomationPractice/';
        const selectorPage = new Selectors();

        beforeEach(() => {
            cy.visit(rutica);
          });
    
        it('Should be select All RadioBtn', () =>  {
            selectorPage.optRadio();
        });
        it('Should be write into text', () => {
            cy.get('#autocomplete')
            .type('Hola Mundo')
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


