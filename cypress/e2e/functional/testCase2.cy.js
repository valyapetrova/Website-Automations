
it('2. Should contain 4 questions in the FAQ section on Pricing page', () => {
  cy.visit('https://mind-wend-913065.framer.app/'); 
  cy.contains('Pricing').click();
  cy.get(
    "#main > div > div.framer-1snvqgp > div.framer-2n08ge > div.framer-gidvwn"
  )
    .children()
    .should("have.length", 4);
});
