/// <reference types="cypress" />

export class AlgoMasCool {

    registrarUsuario() {
      cy.get('.email_created').type('nerd@gmail.com');
      cy.get('#SubmitCreate > span').click();
      cy.get('#id_gender1').check();
      cy.get('#customer_firstname').type('Daniel');
      cy.get('#customer_lastname').type('Fuentes');
      cy.get('#email').should('have.value', 'nerd@gmail.com');
      cy.get('#passwd').type('12345');
        cy.get('#days').select('10  ').should('have.value', '10  ');
        cy.get('#months').select('July ').should('have.value', 'July ');
        cy.get('#years').select('1985  ').should('have.value', '1985  ');
        cy.get('#company').type('Globant');
        cy.get('#address1').type('direccion1');
        cy.get('#address2').type('direccion2');
        cy.get('#city').type('medellin');
        cy.get('#id_state').select('California');
        cy.get('#postcode').type('00000');
        cy.get('#other').type('other');
        cy.get('#phone').type('1234567');
        cy.get('#phone_mobile').type('1234567')
        cy.get('#alias').type('lasperras');
        cy.get('#submitAccount').click();
        cy.get('.info-account')
          .should('have.text', 'Welcome to your account. Here you can manage all of your personal information and orders.');
        cy.get('.logout').click();
    
    }

}