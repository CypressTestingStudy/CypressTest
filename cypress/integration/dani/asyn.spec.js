// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function() {

    it('Visits the ToolsQA Demo Page and check the menu items', function() {
    //Visit the Demo QA Website
    cy.visit("https://www.toolsqa.com/");
    
   // Clicking on Widget Menu Item
    cy.get('#menu-top > li:nth-child(3) > a').click();

    //Verify number of items present on Widget Tab
    cy.get('.demo-frame > ul > li').should('have.length',19);

    //Print a string to console to show Async nature 
    console.log('XXXX');

    //Verify number of items having keyboard as text on Widgets Tab
    //Get and Find Command (Parent - Child Relationship)

    cy.get('.demo-frame > ul > li').find('[href*=keyboard]').should('have.length',2);
    
  });
});