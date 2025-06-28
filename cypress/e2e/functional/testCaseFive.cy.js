it('5. Should blur the background after clicking "Get the app" button', () => {
 

  cy.visit('https://mind-wend-913065.framer.app/');

  cy.get('div[data-framer-name="Main"]')
    .should('be.visible')
    .click();

    cy.get('.framer-vrqh0x')
    .invoke('css', 'backdrop-filter')
    .should('include', 'blur(20px)');
});