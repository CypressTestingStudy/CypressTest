// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe ('checkbox radio buttun & dropdown list also new tab', () => {


        it('My first test with other selectors and new tab', () => {
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //radio button 1
            cy.get('[for="radio1"] > .radioButton')  //class igual para todos inspeccione con cyprress como construirlo?
            .check()
            .should('be.checked');
        
        // dropdown option 2
       
            cy.get('#dropdown-class-example')   //id= #id
            .select('option2')  //text that you want from the dropdown
            .should('have.value', 'option2');
   
        // checkbox 3
            cy.get('#checkBoxOption3')
            .check()
            .should('be.checked'); 

            //newtab
            cy.get('#opentab').invoke('removeAttr','target')
            .click()
            cy.url().should('include','rahulshettyacademy')
            cy.get('[href="#/consulting"] > .services-style-one > .inner-box')
            .click()

            cy.go('back') //back or forward
            cy.go('back') 
        }); 
      });