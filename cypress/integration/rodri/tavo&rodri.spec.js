
/// <reference types="Cypress" />



describe('My first test suit by Rodri', () =>{

    it('Brinjal', () => {
        //visit page
        cy.visit('https://www.rahulshettyacademy.com/seleniumPractise/#/')
        //filter products
        cy.get('.search-keyword').type('Br')
        cy.wait(3000)
        //apples
        cy.get('.products').find('.product').should('have.length',2)
        cy.get('.products').find('.product').eq(1).contains('+').click()
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
       
         /*"ProductA": "Tomato",
        "PrductB": "Brinjal",
        "PrductC": "Mushroom" */

    })

it('Tomato', () => {
    //visit page
    cy.visit('https://www.rahulshettyacademy.com/seleniumPractise/#/')
    //filter products
    cy.get('.search-keyword').type('To')
    cy.wait(3000)
    //apples
    cy.get('div.container div.products-wrapper:nth-child(2) div.products div.product:nth-child(1) > h4.product-name')
    .should('have.text','Tomato - 1 Kg')
    cy.get('div.container div.products-wrapper:nth-child(2) div.products div.product:nth-child(1) div.stepper-input > a.increment')
    .click()
    cy.get('div.container div.products-wrapper:nth-child(2) div.products div.product:nth-child(1) div.product-action > button:nth-child(1)')
    .click()


})

it('Mushroom', () => {
    //visit page
    cy.visit('https://www.rahulshettyacademy.com/seleniumPractise/#/')
    //filter products
    cy.get('.search-keyword').type('M')
    cy.wait(3000)
    //apples
    cy.get('.products').find('.product').should('have.length',11)
    cy.get('.products').find('.product').eq(3).contains('+').click()
    cy.get('.products').find('.product').eq(3).contains('ADD TO CART').click()
   

})
})


/*
<script>
function myFunction() {
  var c = document.getElementById("product").childNodes;
  document.getElementById("product").innerHTML = c[3].text;
}
</script>
*/