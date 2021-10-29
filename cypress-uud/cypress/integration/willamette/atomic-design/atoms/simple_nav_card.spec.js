const simpleNavCard = options => {
    cy.get(`.card__title`).should('exist')
}
export {simpleNavCard}