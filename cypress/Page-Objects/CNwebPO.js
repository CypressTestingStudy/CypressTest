
/// <reference types="cypress" />

export class videoslander {
navigator(){
return cy.visit('https://www.cartoonnetwork.co.uk/')
}
OT(){
return cy.get('.optanon-alert-box-button-middle > .optanon-allow-all')
}
videoslander(){
return cy.get('.links > .videos') 
}
selectvideo(){
return cy.get('#root > div > div.app > div > div.videos-home > section > div > div.swiper-container.slider-container.swiper-container-initialized.swiper-container-horizontal > div.swiper-wrapper.viewfinder > a.swiper-slide.video.swiper-slide-visible.swiper-slide-active > div') 
}
checkingprerollad(){
return cy.get('.bmpui-ui-label-ad-message')
}
pause(){
return cy.get('.bmpui-id-402') 
}
play(){
return cy.get('.bmpui-id-402')
}
unmute(){
return cy.get('.bmpui-id-403')
}
upnext(){
return cy.get('#root > div > div.app > div > div.video-player-detail-wrapper > div > div.video-player-detail > div.slide-elements > div.video-playlist > a:nth-child(1) > article > div.thumbnail > figure > img') 
}
morevideo(){
return cy.get('#root > div > div.app > div > div.video-player-detail-wrapper > div > div.video-library > div > section > a:nth-child(2) > article > div.thumbnail > figure > img')
}
unmute(){
return cy.get('.bmpui-id-403')
}
}

