// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import {
  AlgoMasCool
} from "../../page-objects/pomPageModeOne";

describe('Registrar usuario por POM', () => {

  const pageObjectlindo = new AlgoMasCool();

  it.skip('Registremos el usuario', () =>  {
    pageObjectlindo.registrarUsuario();
  });

});