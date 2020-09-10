// type definitions for Cypress object "cy"
/// <reference types="Cypress" />


//const { data } = require("cypress/types/jquery")  //https://docs.cypress.io/guides/tooling/typescript-support.html#Configure-tsconfig-json

describe('My first test suit by Rodri', () =>{

    it('My first test case by Rodri', () => {
        //visit page
        cy.visit('https://www.rahulshettyacademy.com/seleniumPractise/#/')
        //filter products
        cy.get('.search-keyword').type('ap')
        cy.wait(3000)
        //apples
        cy.get('#root > div > div.products-wrapper > div > div:nth-child(2) > h4')
        .should('have.text','Apple - 1 Kg')
        //2 units
        cy.get('#root > div > div.products-wrapper > div > div:nth-child(2) > div.stepper-input > a.increment')
        .click();
        //assert
        //cy.get('#root > div > div.products-wrapper > div > div:nth-child(2) > div.stepper-input > input')
        //.should('have.text','2')
        //add cart
        cy.get('#root > div > div.products-wrapper > div > div:nth-child(2) > div.product-action > button')
        .click();
        cy.wait(1000)  //solucione con un wait
        //grappes
        cy.get('#root > div > div.products-wrapper > div > div:nth-child(3) > h4')
        .should('have.text','Grapes - 1 Kg')
        //asset
        //cy.get('#root > div > div.products-wrapper > div > div:nth-child(3) > div.stepper-input > input')
        //.should('have.text','1')
        //add cart
        cy.get('#root > div > div.products-wrapper > div > div:nth-child(3) > div.product-action > button')
        .click();
        cy.get('#root > div > header > div > div.cart > div.cart-info > table > tbody > tr:nth-child(2) > td:nth-child(3) > strong')
        .should('have.text','205')
            //should('have.text','205')
        
        // run the test with and error, open dev tool, put the command and rerun
        //sorce tap cypress run & tab test code

        // 1  .debug() en un cy.get al final de esa sentencia, se ve en la consola el debug info pero tampoco veo el valor

        /*2      //.then(($selectedElement) => {
        .then(div  => {
            debugger
            should(div)('have.text','204')
        }) 
        me esta ingresando al codigo del test case pero no veo valores*/

         //3   cy.debug()
        //cy.debug(Option)   // consola se ven valores

        // 4  from the result on browser click print to console option 7 error message

        // 5 cy.pause para inspeccionar

        // breakpoint clicks on lines from source tab remove all breakpoints

        
    })
})