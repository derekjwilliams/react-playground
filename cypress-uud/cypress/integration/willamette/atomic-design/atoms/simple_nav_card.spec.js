const simpleNavCard = options => {
  cy.log(options)
  cy.get(`.card__title`).should('exist')
}
export {simpleNavCard}