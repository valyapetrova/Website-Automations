it('3. Should display "visit" button on each card in the components section', () => {
  cy.visit('https://mind-wend-913065.framer.app/');
  // cy.contains('Many types of components to customize');//to scrow

  //'[data-framer-name="Card"]'
  // Get all the cards and check each
  cy.get('.components-container')
    .find('[data-framer-name="Card"]')
    .each(($card) => {
      cy.wrap($card)
        .scrollIntoView()
        .find('.visit-button')
        .should('be.visible');
    });

    cy.get('.components-container')   
    .find('[data-framer-name="Card Small"]')
    .scrollIntoView()
    .find('.visit-button')
    .should('be.visible');
});
