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
    

    }); 
    });