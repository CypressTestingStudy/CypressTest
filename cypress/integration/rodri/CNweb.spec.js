/// <reference types="cypress" />

import {
    videoslander
    } from "../../Page-Objects/CNwebPO";
    
    describe ('videos lander', () => {
    const automation = new videoslander();
    
   /* beforeEach(() => {
        automation.navigator();
        cy.wait(2000)
    }) */
    it('videos up next & more videos', () => {
    automation.navigator();
    automation.OT().click()
    automation.videoslander()
    .click()
    cy.wait(10000)
    
    automation.selectvideo()
    .click() 
    cy.wait(120000)

    /*automation.checkingprerollad()
    .should('ADVERTISEMENT');
    cy.wait(100000)*/

    automation.pause()
    .click()
    cy.wait(3000)
    
    automation.play()
    .click()
    cy.wait(3000)

    automation.unmute()
    .click()

    });
    });