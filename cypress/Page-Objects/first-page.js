// type definitions for Cypress object "cy"
/// <reference types="cypress" />

export class MyfirstPOM {
navigator(){
   return cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
}
radiobutton(){
   return  cy.get('[for="radio1"] > .radioButton')  //class igual para todos inspeccione con cyprress como construirlo?
        
}
dropdownoption(){
   return cy.get('#dropdown-class-example')   //id= #id
        
}
checkbox(){
    return    cy.get('#checkBoxOption3')
        
}
/*fn1(){
   this.radiobutton.check()
   .should('be.checked');
   this.dropdownoption
} // en una funcion todos los pasoso*/
}
//export default MyfirstPOM;
// acciones o validaciones en el caso en el POM solo el objeto