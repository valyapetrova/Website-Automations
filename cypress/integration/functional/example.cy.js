describe("Pricing Page", () => {
  it("Does display 3 Subscription Plans in 'Pricing' page", () => {
    cy.visit("https://mind-wend-913065.framer.app/");
    cy.get(
      ".framer-1g3amks-container > .framer-WalAV > .framer-1892sln > .framer-1gmmtpa > .framer-styles-preset-kqguaa > span"
    )
      .should("be.visible")
      .click();
    cy.get(".pricing-container")
      .should("be.visible")
      .then((pricingContainer) => {
        console.error(pricingContainer);
        const plansLength = pricingContainer[0].childElementCount;
        expect(plansLength).to.eq(3);
      });
  });
});
