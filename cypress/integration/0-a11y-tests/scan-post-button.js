describe('Scan on load and ater pressing a buutton', () => {

    it('No A11y issues before button interaction', () => {
        
        // Axe scan can catch a multitude of WCAG violations, but some issues can only be found after interacting
        // with part of the page.

        // In this example, we axe scan when the page is loaded, then we click 
        // the 'sort by' button and perform an additional axe scan, in most cases
        // this results in 2 scans with a different number of violations.

        // Visit the page we are testing
        cy.visit('https://readyseteat.com/recipes/healthy-food-choices');
        
     
        cy.injectAxe();
        cy.checkA11y();
        
    })

    
    it('No A11y issues after button interaction', () => {
        
        cy.get('.form-item-sort-by').click();

        
        cy.wait(700);

        cy.checkA11y();
    })
})