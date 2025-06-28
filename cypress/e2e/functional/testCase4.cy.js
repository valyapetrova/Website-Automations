it('4. Should display "Sign up" button with color rgb(255, 82, 79)', () => {
  cy.visit('https://mind-wend-913065.framer.app/'); 
  cy.scrollTo('bottom');

  cy.get('input[type="submit"][value="Sign Up"]')
  .should('be.visible')
  .should('have.attr', 'value', 'Sign Up')
  .should('have.css', 'background-color', 'rgb(255, 82, 79)');

});