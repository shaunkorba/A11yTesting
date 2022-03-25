
describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://example.cypress.io/todo')
  })


  it('Radio can be checked', function() {
  //Get the first todo
    cy.get('.todo-list').find('label').first().then(($ele) => {
      cy.get($ele).dblclick()
      cy.get($ele).parent().parent().find('input').filter('.edit').clear().type("Brew coffee");
  })
  cy.wait(300)

  //Make some new todos

  cy.get('.new-todo').type('Get to work').type('{enter}').wait(100)
  cy.get('.new-todo').type('Meeting').type('{enter}').wait(300)
  cy.get('.new-todo').type('Lunch').type('{enter}').wait(500)
  cy.get('.new-todo').type('Send emails').type('{enter}').wait(900)

  cy.get('.todo-list').find('label').contains('Meeting').then(($ele) => {
    cy.get($ele).dblclick()
    cy.get($ele).parent().parent().find('input').filter('.edit').type(" (CANCELLED)")
  })
  cy.wait(700).get('.new-todo').type('Cypress is fun')
  })
})
