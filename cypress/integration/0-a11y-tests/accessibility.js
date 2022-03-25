describe('A11y', () => {

    // A basic Axe Scan upon landing on a web page.

    it('Check a11y violations upon arrival', () => {
      cy.visit('https://example.cypress.io/')
     
      cy.injectAxe();
      cy.checkA11y();
    })
   
  });