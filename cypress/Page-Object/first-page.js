<reference types="cypress" />

class MyfirstPOM {
navigate(){
   return cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
}
radiobutton(){
   return  cy.get('[for="radio1"] > .radioButton')  //class igual para todos inspeccione con cyprress como construirlo?
        .check()
        .should('be.checked');
}
dropdownoption(){
   return cy.get('#dropdown-class-example')   //id= #id
        .select('option2')  //text that you want from the dropdown
        .should('have.value', 'option2');
}
checkbox(){
    return    cy.get('#checkBoxOption3')
        .check()
        .should('be.checked'); 
}
}
export default MyfirstPOM;