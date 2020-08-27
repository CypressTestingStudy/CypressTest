/// <reference types="cypress" />

 class formaDosPOM{
   
  email(){
     return cy.get('#email_create');
   }
   btnRegistro(){
    return cy.get('#SubmitCreate > span').click();
  }
  checkSexo(){
    return cy.get('#id_gender1').check();
  }
  firstName(){
    return cy.get('#customer_firstname').type('Daniel');
  }
  lastName(){
    return cy.get('#customer_lastname').type('Fuentes');
  }
  emailUser(){
    return cy.get('#email').should('have.value', 'nerd@gmail.com');
  }
  pwdTxt(){
    return cy.get('#passwd').type('12345');
  }
  dayNacimiento(){
    return cy.get('#days').select('10  ').should('have.value', '10  ');
  }
  mesNacimiento(){
    return  cy.get('#months').select('July ').should('have.value', 'July ');
  }

  mesNacimiento(){
    return  cy.get('#months').select('July ').should('have.value', 'July ');
  }
  mesNacimiento(){
    return  cy.get('#months').select('July ').should('have.value', 'July ');
  }
  mesNacimiento(){
    return  cy.get('#months').select('July ').should('have.value', 'July ');
  }
  mesNacimiento(){
    return  cy.get('#months').select('July ').should('have.value', 'July ');
  }
  mesNacimiento(){
    return  cy.get('#months').select('July ').should('have.value', 'July ');
  }
  mesNacimiento(){
    return  cy.get('#months').select('July ').should('have.value', 'July ');
  }
  mesNacimiento(){
    return  cy.get('#months').select('July ').should('have.value', 'July ');
  }
  mesNacimiento(){
    return  cy.get('#months').select('July ').should('have.value', 'July ');
  }
  mesNacimiento(){
    return  cy.get('#months').select('July ').should('have.value', 'July ');
  }
  mesNacimiento(){
    return  cy.get('#months').select('July ').should('have.value', 'July ');
  }
  mesNacimiento(){
    return  cy.get('#months').select('July ').should('have.value', 'July ');
  }

  aliasOption(){
    return  cy.get('#alias').type('lasperras');
  }

  registroExito(){
    return  cy.get('.info-account')
    .should('have.text', 'Welcome to your account. Here you can manage all of your personal information and orders.');
  }

  btnRegistroDos(){
    cy.get('#submitAccount').click();
  }

  btnSalir(){
    return  cy.get('.logout').click();
  }

 }
    
export default formaDosPOM;
    
    
    
    