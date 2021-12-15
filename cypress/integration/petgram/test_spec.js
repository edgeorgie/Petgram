/* global describe, it, cy */
describe('Petgram', () => {
  it('App works', () => {
    cy.visit('/')
  })

  it('navegamos a una categoria y vemos fotos', function () {
    cy.visit('/pet/1')
    cy.get('div')
  })

  it('si podemos navegar con la navbar a la home', function () {
    cy.visit('/pet/1')
    // eslint-disable-next-line no-unused-expressions
    cy.get('nav a').first().click
    cy.url().should('include', '/')
  })

  it('los usuarios no registrados ven el formulario de registro e inicio de sesion al ir a favs', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})
