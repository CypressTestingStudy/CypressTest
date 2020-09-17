// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('API Testing LocalEnv', () => {
    it('TC01 - GET - Returns JSON', () => {
      cy.request('/posts')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json').and('have.length', 31);
    });
  
    it('TC02 - POST - Crear un Item', () => {
      cy
      .request('POST', '/posts', { title: 'Marraneitor' , author: 'DanielFuentes'})
      .then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.body).to.have.property('title', 'Marraneitor'); // true
    });
    });
  
  
    it('TC03 - PUT - Actualizar un Item de la listaw ', () => {
      cy
      .request('PUT', '/posts/15', { title: 'Capuchon' , author: 'Jordi'})
      .then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.body).to.have.property('title', 'Capuchon'); // true
    });
    });
  
    it('TC04 - DELETE - Borrar un item de la lista', () => {
      cy
      .request('DELETE', '/posts/14')
      .then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.body).to.have.empty;
    });
    });
  });