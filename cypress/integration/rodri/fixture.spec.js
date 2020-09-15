/// <reference types="Cypress" />

    describe('My first tfixture', () =>{
        
        it('My first fixture', () => {
            cy.visit('https://demo.nopcommerce.com/login')
            cy.wait(2000)
            cy.fixture('Login').then((login)=>{  
            cy.get('#Email').type(login.user)
            cy.get('#Password').type(login.password)
                
            })
            cy.get('form > .buttons > .button-1').click()
               
            })
        }) 
    
       
//another way
        /*context('Include contains from json file', function () {

            beforeEach(() => {
                cy.server()
                cy.fixture("Login.json")
                    .as('data')
                    .then((data) => {
                        cy.route('GET', 'Login.json', data)
                    })
            })
        
            it('sign in', function () {
        
                cy.visit('https://demo.nopcommerce.com/login')
                cy.get('[data-cy=user]').type(data.user)
                cy.get('[data-cy=password]').type(data.password)
            })
        }) */
        