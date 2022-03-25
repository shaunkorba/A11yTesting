describe('Focusable elements are visible to the user.', () => {

    it('Get <a> elements, ', () => {
        
        // Visit the page we are testing
        cy.visit('https://example.cypress.io/')
     
        // In this example page, we can use a tool like "ANDI"
        // to find a list of all focusable elements. This helps
        // us know what the tab order is made up of,
        // what element types, classes, and ids are seen


        // Depending on this info, we set up a get function that retrieves
        // all elements matching our selector or alias,
        // then we use an each function to perform a tab then check
        // if the currently focused element is visible.
        cy.get('a').each(($a) => {
            cy.tab();
            cy.focused().should("be.visible");
        })

      })
    })