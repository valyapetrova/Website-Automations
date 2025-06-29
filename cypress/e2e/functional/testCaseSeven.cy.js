it('7. Should display "Get the app" and "Watch video" buttons stacked on mobile', () => {
  cy.viewport('iphone-6');
  cy.visit('https://mind-wend-913065.framer.app/');

  cy.get('div[data-framer-name="Main"]')
    .should('be.visible')
    .then(($getApp) => {
      const getAppRect = $getApp[0].getBoundingClientRect();  

      cy.contains('Watch video')
        .should('be.visible')
        .then(($watchVideo) => {
          const watchVideoRect = $watchVideo[0].getBoundingClientRect();

          // .lte() (“less than or equal”) asserts that the bottom of the first button 
          // sits at or above the top of the second. 
          expect(getAppRect.bottom).to.be.lte(watchVideoRect.top);
        });
    });
});
