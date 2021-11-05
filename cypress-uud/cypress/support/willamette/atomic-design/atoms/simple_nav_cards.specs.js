const simpleNavCards = options => {
  cy.get('.card').each(e => {
    debugger
    expect(e.find('.card__content').length).to.equal(1)
  })
  cy.get('.card').each(e => {
    //debugger
    //cy.log(JSON.stringify(e.find('.card_content'), null, 2))

    expect(e.find('.card__title').length).to.equal(1)
  })
}
export {simpleNavCards}