it('6. Should display Updates page after clicking the "Updates" button', () => {
 
  cy.visit('https://mind-wend-913065.framer.app/'); 
  cy.contains('Updates').click();

  cy.url().should('include', 'updates');
});