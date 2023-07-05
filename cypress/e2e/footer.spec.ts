/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Footer', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the developer name and link', () => {
    cy.contains('Developed By')
      .should('be.visible')
      .within(() => {
        cy.get('a')
          .should('have.attr', 'href', 'https://github.com/matheusmazeto')
          .and('have.text', 'Matheus Mazeto')
      })
  })
})
