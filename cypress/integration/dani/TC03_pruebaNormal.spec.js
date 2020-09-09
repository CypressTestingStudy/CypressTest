// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Este es un test normalito Mi primer hola Mundo', () => {
  

  it('Quiero comprar cukitos', () => {
      
    cy.visit("http://automationpractice.com/index.php");
      cy.get('.login').click();
      cy.get('#SubmitCreate > span').click();
      cy.get('#create_account_error')
      .should('have.text', 'Invalid email address.');
    
  });

  it ('Ingresar el correo electronico para registrar en los cukitos fashion', () => {
   
    cy.get('#email_create').type('nerd@gmail.com');
    cy.get('#SubmitCreate > span').click();
    cy.get('#id_gender1').check();
    cy.get('#customer_firstname').type('Daniel');
    cy.get('#customer_lastname').type('Fuentes');

    cy.get('#company').type('Globant');
    cy.get('#address1').type('direccion1');
    cy.get('#address2').type('direccion2');
    cy.get('#city').type('medellin');
    cy.get('#postcode').type('00000');
    cy.get('#other').type('other');
    cy.get('#phone').type('1234567');
    cy.get('#phone_mobile').type('1234567');
    cy.get('#alias').type('lasperras');
    cy.get('#submitAccount').click();
    cy.get('.info-account')
      .should('have.text', 'Welcome to your account. Here you can manage all of your personal information and orders.');
    cy.get('.logout').click();
  });
});