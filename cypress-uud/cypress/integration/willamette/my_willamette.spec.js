describe('My Willamette Page', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('https://willamette.edu')
  })
  it('navigates to my willamette login and attempts to login', () => {
    cy.get('.site-header__my-willamette .button').click()
    cy.get('#username').type('jcredcedar')
    cy.get('#password').type('aa**44$$')
    cy.wait(5000)
    cy.get('.form-button').click()
    // cy.get('.card').should('not.to.match', ':empty') //TODO just an example, not a good one
    // simpleNavCards()
  })
})