/// <reference types="Cypress" />

describe('My first tfixture', () => {
    

    it.skip('Search the title of a movie and show the list of films', () => {
        cy.fixture('usersh').as('aliasData');
        cy.get('@aliasData').then((data) => {
            cy.log('Fixture content');
            cy.log(data[0].user);
        })
    })



    it('Recorrer todo el arreglo desde la posición [0]', () => {
        cy.fixture('usersh').as('aliasData');
        cy.get('@aliasData').then((data) => {
            cy.wrap(data).each((value) => {
                const user = value.user
                const password = value.password
                cy.visit('https://demo.nopcommerce.com/login')
                cy.get('.ico-login').click()
                cy.get('#Email').type(user)
                cy.get('#Password').type(password)
                //cy.log(user)
                //cy.log(password)
                cy.get('form > .buttons > .button-1').click()
                cy.get('.message-error').should('have.contain','Login was unsuccessful')

            })
        })
    })


})


