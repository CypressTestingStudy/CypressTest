/// <reference types="Cypress" />

describe('My first test suit by Cris', () =>{

    it('My first test case by Cris', () => {
        //test steps
        cy.visit('https://www.rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(0).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($el,index,$list) => {
        const vegname = $el.find('h4.product-name').text()
        if(vegname.includes('Tomato'))
        {
        $el.find('button').click()
        }
        })
        cy.get('.brand').should('have.text','GREENKART')
    })


})


/*
        cy.get('.products').find('.product').should('have.length',30)
        var products, i;
        products = ["Tomato","Brinjal","mushroom"]
        for (i) */