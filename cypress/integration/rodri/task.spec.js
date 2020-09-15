/// <reference types="Cypress" />

describe('datadriven with commands',  () =>{

it('buying my groseries', () => {
        cy.buying('Tomato')
        cy.get('#root > div > header > div > div.cart > div.cart-info > table > tbody > tr:nth-child(2) > td:nth-child(3) > strong')
        .should('have.text','16')

        cy.buying('Mushroom')
        cy.get('#root > div > header > div > div.cart > div.cart-info > table > tbody > tr:nth-child(2) > td:nth-child(3) > strong')
        .should('have.text','91')

        cy.buying('Brinjal')
        cy.get('#root > div > header > div > div.cart > div.cart-info > table > tbody > tr:nth-child(2) > td:nth-child(3) > strong')
        .should('have.text','126')

        cy.buying('Cucumber')
        cy.get('#root > div > header > div > div.cart > div.cart-info > table > tbody > tr:nth-child(2) > td:nth-child(3) > strong')
        .should('have.text','174')
})
}) 

 /* okay
 
 describe('My first test suit by Cris', () =>{
    beforeEach(() => {
        cy.visit('https://www.rahulshettyacademy.com/seleniumPractise/#/')
        cy.wait(2000)
    })
        it('My first datadriven', () => {
           
            cy.get('.products').find('.product').each(($el,index,$list) => {
                const vegname = $el.find('h4.product-name').text()
                if(vegname.includes('Mushroom'))
                {
                $el.find('button').click()
                }
                })
                cy.get('.brand').should('have.text','GREENKART')
           
        })
        it('My first datadriven', () => {
           
            cy.get('.products').find('.product').each(($el,index,$list) => {
                const vegname = $el.find('h4.product-name').text()
                if(vegname.includes('Tomato'))
                {
                $el.find('button').click()
                }
                })
                cy.get('.brand').should('have.text','GREENKART')
           
        })
    }) */


/* //https://docs.cypress.io/examples/examples/tutorials.html#7-Filters-and-data-driven-tests
describe('My first test suit by Cris', () =>{
beforeEach(() => {
    cy.visit('https://www.rahulshettyacademy.com/seleniumPractise/#/')
    cy.wait(2000)
})
    it('My first datadriven', () => {
        const item =[
            {Producto:'Mushroom'},
            {Producto:'Tomato'}
        ]
        cy.wrap(item)
        .each(item => {
            cy.contains(item.Producto).click()

            cy.get('.products').find('.product').each(($el,index,$list) => {
                const vegname = $el.find('h4.product-name').text()
                if(vegname.includes('item'))
                {
                $el.find('button').click()
                }
                })
                cy.get('.brand').should('have.text','GREENKART')
        }

        )

       
    })
}) */