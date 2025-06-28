it('Should display 3D animation after clicking "Click to view in 3D"', () => {
  cy.visit('https://mind-wend-913065.framer.app/');


  // Scroll the section into view in case it's offscreen
  // 1️⃣ Bring the canvas into view so the hover actually works
  cy.get('[data-framer-name="Hero"]')
    .scrollIntoView()
    .trigger('mouseover')
    .contains('Click to view in 3D')
    .click()

  
 cy.get('.3DComponent')
 .trigger('mouseover')
 .trigger('mouseenter');

cy.get('.3D-button')
 .should('have.css', 'opacity', '1');
  // Then assert the canvas is rendered
  cy.get('#canvas3d')
    .should('be.visible')
    .and('have.attr', 'data-engine', 'three.js r142');

});
