// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import {pomTestRodri} from "../../page-objects/pomRodri";

describe ('checkbox radio button & dropdown list also new tab', () => {
    const pomRodri = new pomTestRodri();  
    it('My first test with other selectors and new tab', () => {   
     pomRodri.navigate();
     pomRodri.radiobutton();
     pomRodri.dropdownoption();
     pomRodri.checkbox();
    }); 
  });



