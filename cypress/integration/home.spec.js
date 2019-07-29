describe('Home Accepetance Test', function() {
  it('Display correct content of home page', function() {
    cy.visit('/');

    cy.contains('React Boilerplate').should('be.visible');
    cy.contains('Minimal React Boilerplate for starter').should('be.visible');
  });
});
