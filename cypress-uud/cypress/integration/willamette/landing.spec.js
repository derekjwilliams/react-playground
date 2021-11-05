import {simpleNavCards} from '../../support/willamette/atomic-design/atoms/simple_nav_cards.specs.js'
describe('Check Willamette Home Page', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('https://willamette.edu')
  })
  it('Check Cards Exist', () => {
    cy.get('.card').should('not.to.match', ':empty') //TODO just an example, not a good one
    simpleNavCards()
  })
})