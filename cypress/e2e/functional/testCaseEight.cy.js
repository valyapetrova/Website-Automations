it('8. Should display 3D animation after clicking "Click to view in 3D"', () => {
  cy.visit('https://mind-wend-913065.framer.app/');


  cy.get('[data-framer-name="Hero"]')
    .scrollIntoView()
    .trigger('mouseover')

   cy.get('.3DComponent')
   .eq(0)
   .trigger('mouseover')
   .trigger('mouseenter')      
   .wait(1200)            
   .find('.3D-button') 
   .invoke('css', 'opacity', '1')
   .should('be.visible') 

});
