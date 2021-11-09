const simpleNavCards = options => {
  cy.get('.card').each(e => {
    debugger
    cy.log('card element: ', e)
    cy.log('card element title length: ', e.find('.card__title'))
    expect(e.find('.card__content').length).to.equal(1)
  })
}
export {simpleNavCards}