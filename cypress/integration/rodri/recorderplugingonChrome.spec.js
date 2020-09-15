//Cypress Recorder

describe('test_name', function() {

    it('what_it_does', function() {
   
       cy.visit('https://www.cartoonnetwork.co.uk/videos')
    
       cy.viewport(1680, 922)
    
       cy.visit('https://www.cartoonnetwork.co.uk/videos')
    
       cy.get('div > .swiper-container > .swiper-wrapper > .swiper-slide:nth-child(4) > .background-image').click()
    
       cy.get('#bmpui-id-198 > .bmpui-container-wrapper > #bmpui-id-197 > .bmpui-container-wrapper > #bmpui-id-188').click()
    
       cy.get('#bmpui-id-198 > .bmpui-container-wrapper > #bmpui-id-197 > .bmpui-container-wrapper > #bmpui-id-187').click()
    
       cy.get('#bmpui-id-198 > .bmpui-container-wrapper > #bmpui-id-197 > .bmpui-container-wrapper > #bmpui-id-187').click()
    
       cy.get('.top-navigation > .primary > .links > .games > img').click()
    
    })
   
   })
   