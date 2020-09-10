// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import {
  MyfirstPOM
} from "../../Page-Objects/first-page";

describe ('my fisrt case with POM', () => {
  const automation = new MyfirstPOM();

  it('My first test with other selectors and new tab', () => {
      automation.navigator();
      
      automation.radiobutton()
      .check()
      .should('be.checked');
      
      automation.dropdownoption()
      .select('option2')  //text that you want from the dropdown
      .should('have.value', 'option2');
      
      automation.checkbox()
      .check()
      .should('be.checked'); 
    
  }); 
});