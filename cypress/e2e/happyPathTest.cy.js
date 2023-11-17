//Happy Path Shopping Test

import WomensProducts from '../pageobjects/womensProducts';
import MensProducts from '../pageobjects/mensProducts';
import Checkout from '../pageobjects/checkoutPage'

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
    WomensProducts.assertCartItems.contains('2');
    // Add men products to cart with menAddToCart command
    cy.menAddtoCart();
    MensProducts.assertCartItems.contains('4');

    // Proceed to checkout with checkout command
    cy.checkout();
    Checkout.successMessage.should('be.visible');
    Checkout.continueShoppingButton.should('be.visible');
  });
});



