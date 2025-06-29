
it('1. Should display products currency symbol as $ on Pricing page', () => {
  cy.visit('https://mind-wend-913065.framer.app/'); 
  cy.contains('Pricing').click();
  cy.contains('$').should('be.visible');
});