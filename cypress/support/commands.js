// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("buying", (producto) => { 
    
            cy.visit('https://www.rahulshettyacademy.com/seleniumPractise/#/')
            cy.wait(2000)
            
            cy.get('.products').find('.product').each(($el,index,$list) => {
                    const vegname = $el.find('h4.product-name').text()
                    if(vegname.includes(producto))
                    {
                    $el.find('button').click()
                    }
                    })
                    cy.get('.brand').should('have.text','GREENKART')
               
            })
