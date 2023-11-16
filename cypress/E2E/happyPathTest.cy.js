//Happy Path Shopping Test

describe('Happy Path Test', () => {
  beforeEach(() => {
    // Used the custom login command with the userLogin fixture
    cy.fixture('userLogin').then((user) => {
      cy.login(user.email, user.password);
    });
  });

    it('should go from login, adding womens and mens items to cart and checkout', () => {
      cy.visit('/customer/account/')
      // Add women products to cart with womenAddToCart command
      cy.womenAddtoCart();
      cy.get('.counter-number').contains('2');
      // Add men products to cart with menAddToCart command
      cy.menAddtoCart();
      cy.get('.counter-number').contains('4');

      // Proceed to checkout with checkout command
      cy.checkout();
      cy.get('.page-title-wrapper').should('be.visible');
      cy.get('.actions-toolbar').should('be.visible');
    });
  });

 

