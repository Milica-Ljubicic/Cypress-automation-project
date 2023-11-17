// Commands
import WomensProducts from '../pageobjects/womensProducts';
import MensProducts from '../pageobjects/mensProducts';
import Checkout from '../pageobjects/checkoutPage'
import 'cypress-xpath'

Cypress.Commands.add('login', () => {
  cy.session('login', () => {
    return cy.fixture('userLogin').then((user) => {
      cy.visit('/customer/account/login');
      cy.get('#email').type(user.email);
      cy.get('#pass').type(user.password);
      cy.get('#send2').click();
      cy.url().should('include', '/customer/account/');
      cy.get('#maincontent').should('be.visible');
    });
  });
});

Cypress.Commands.add('womenAddtoCart', () => {
  WomensProducts.womensProductsPage.click();
  WomensProducts.womenBottoms.click({ force: true });
  WomensProducts.womenShorts.click();
  WomensProducts.wShortsSize.click();
  WomensProducts.wShortColor.click();
  WomensProducts.addToCart.click();
  WomensProducts.womenTops.click({ force: true });
  WomensProducts.womenTank.click();
  WomensProducts.wTankSize.click();
  WomensProducts.wTankColor.click();
  WomensProducts.addToCart.click();
})

Cypress.Commands.add('menAddtoCart', () => {
  MensProducts.mensProductsPage.click();
  MensProducts.mensBottoms.click();
  MensProducts.mensShort.click();
  MensProducts.mShortSize.click();
  MensProducts.mShortColor.click();
  MensProducts.addToCart.click();
  MensProducts.mensTops.click({ force: true });
  MensProducts.mensTank.click();
  MensProducts.mTankSize.click();
  MensProducts.mTankColor.click();
  MensProducts.addToCart.click();
})

Cypress.Commands.add('checkout', () => {
  return cy.fixture('checkoutInfo').then((checkout) => {
    cy.get('.action.showcart').click();
    cy.get('#top-cart-btn-checkout').click({ force: true });
    cy.visit('/checkout/#shipping')
    Checkout.shippingMethod.check();
    cy.get(Checkout.nextButton).click();
    cy.get(Checkout.placeOrder).click();
  });
})

Cypress