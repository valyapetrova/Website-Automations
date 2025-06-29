import 'cypress-real-events/support'     

it('8. Should display 3D animation after clicking "Click to view in 3D"', () => {
  cy.visit('https://mind-wend-913065.framer.app/');

  cy.viewport(1920, 1080);

  cy.get('[data-framer-name="Hero"]')
    .realHover();

  cy.contains('Click to view in 3D', { timeout: 10_000 })
    .should('be.visible')
    .click();

  cy.get('iframe')
    .should('be.visible')

  // Cannot finish the test because it doesn't find canva on the page
  cy.get('#canvas3d')
    .and('be.visible')
    .should('exist')
});