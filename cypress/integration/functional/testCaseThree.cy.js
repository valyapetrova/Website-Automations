it('3. Should display "visit" button on each card in the components section', () => {
  cy.visit('https://mind-wend-913065.framer.app/');
 
  cy.get('.components-container')
    .find('[data-framer-name="Card"]')
    .each(($card) => {
      cy.wrap($card)
        .scrollIntoView()
        .find('.visit-button')
        .should('be.visible');
    });

    cy.get('.components-container')   
    .find('[data-framer-name="Card Small"]')    //the last card is with different locator
    .scrollIntoView()
    .find('.visit-button')
    .should('be.visible');
});
