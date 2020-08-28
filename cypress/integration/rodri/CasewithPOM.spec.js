<reference types="cypress" />

import {
    MyfirstPOM
  } from "../../page-object/first-page";


describe ('checkbox radio buttun & dropdown list also new tab', () => {
    const prueba = new MyfirstPOM();  

    it('My first test with other selectors and new tab', () => {   
        prueba.navigate();

        prueba.radiobutton();

        prueba.drowdown();
    
        prueba.checkbox();
       
    }); 
  });



