/// <reference types="Cypress" />  

describe('My first test suit by Rodri', () =>{

    it('My first test case by Rodri', () => {
        
        cy.visit('https://www.rahulshettyacademy.com/seleniumPractise/#/')
    
        cy.get('.search-keyword').type('ap')
        cy.wait(3000)
    
        cy.get('#root > div > div.products-wrapper > div > div:nth-child(2) > h4')
        .should('have.text','Apple - 1 Kg')
        
        cy.get('#root > div > div.products-wrapper > div > div:nth-child(2) > div.stepper-input > a.increment')
        .click();
        //debugger;
        cy.get('#root > div > div.products-wrapper > div > div:nth-child(2) > div.product-action > button')
        .click();
        cy.wait(1000)  
        //debugger;
        cy.get('#root > div > div.products-wrapper > div > div:nth-child(3) > h4')
        .should('have.text','Grapes - 1 Kg')
        
        cy.get('#root > div > div.products-wrapper > div > div:nth-child(3) > div.product-action > button')
        .click();
       
        cy.get('#root > div > header > div > div.cart > div.cart-info > table > tbody > tr:nth-child(2) > td:nth-child(3) > strong')
        //.then(($selectedElement) => {
                //debugger;})
                
       

    })
})