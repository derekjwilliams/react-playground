import {simpleNavCard} from './atomic-design/atoms/simple_nav_card.spec.js'
describe('Check Willamette Home Page', () => {
  beforeEach(() => {
    cy.visit('https://willamette.edu')
  })
  it('Check Cards Exist', () => {
    cy.get('.card').should('not.to.match', ':empty') //TODO just an example, not a good one
    cy.get('.card').each((card) => {
      debugger
      simpleNavCard(card) //TODO pass card to simpleNavCard spec
    })
  })
})