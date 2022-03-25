describe('Appropriate tab order', () => {

    it('Check if the tab order matches the expected tab order', () => {
        
        // Visit the page we are testing
        cy.visit('https://example.cypress.io/')
        

        //TEST EXPLANATION: =======================================================================================

        //In this test we want to iterate through the tab order and have it match a predefined expected tab order.
        
        //How do we do this? -------------------------------------------------------

        //To identify all focusable elements on your page with each of their classes, ids, and text content use 'ANDI' on the page 
        //before writing your test.

        //Identify what attributes can be used to identify the elements that make up the tab order. In this example, it is the text content, 
        //as the page does not use classes/ids for the majority of the focusable elements.

        //Notes on other approaches for should() cases ------------------------------

        //In some cases you might choose to use should() cases starting with have.class or have.id when many focusable elements DO have unique
        //classes and ids. In other cases you might want to use a different should case for each element 
        //(ex: check text in one, check class in another)
        //In that case you could create a 2D array with 2 columns, one for the case string ('have.class','have.id','contain.text') and the other for
        //string value to check for.

        
        //Looping in Cypress---------------------------------------------------------

        // Looping through a predefined array w/ constants is made unintuitive in Cypress 
        // as it isn't considered ideal in many situations

        // Here is a way of forcing a loop within Cypress that I found on stackoverflow here:
        // https://stackoverflow.com/questions/52212868/cypress-io-writing-a-for-loop?msclkid=caf65ac4a92d11ecacb437be3d93eb99
        
        
        
        //Example-------------------------------------------------------------------

        //In this example we simply check for focusable the elements to contain the string values in the 1D array in order


        
        
        
        var orderArray = [
            'cypress.io','Commands','Utilities','Cypress API','GitHub',
            'Cypress.io','docs.cypress.io',
            'Querying','get','contains','within','root',
            'Traversal','children','closest','eq','filter','find','first','last','next','nextAll','nextUntil','not','parent','parents','parentsUntil','prev','prevAll','prevUntil','siblings',
            'Actions','type','focus','blur','clear','submit','click','dblclick','rightclick','check','uncheck','select','scrollIntoView','scrollTo','trigger',
            'Window','window','document','title',
            'Viewport', 'viewport',
            'Location', 'hash', 'location', 'url',
            'Navigation','go','reload','visit',
            'Assertions','should','and','expect','assert',
            'Misc','end','exec','focused','screenshot','wrap',
            'Connectors','each','its','invoke','spread','then',
            'Aliasing','as',
            'Waiting','wait',
            'Network Requests','server','request','route',
            'Files','fixtures','readFile','writeFile',
            'Local Storage','clearLocalStorage',
            'Cookies','clearCookies',
            'Spies, Stubs & Clocks','spy','stub','clock','tick',
            '_','$','Blob','minimatch','Promise',
            'Commands','Cookies','Server','arch','config','dom','env','log','platform','version'];
        var inc = 0;

        cy.wrap(orderArray).each((index) => {
            
            cy.tab().should('contain.text', orderArray[inc]);
            inc++;
        })

      })
    })