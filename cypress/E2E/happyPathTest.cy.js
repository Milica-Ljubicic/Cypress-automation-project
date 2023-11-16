import WomensProducts from '../pageobjects/womensProducts';
import MensProducts from '../pageobjects/mensProducts';

describe('Happy Path Test', () => {
  beforeEach(() => {
    // Used the custom login command with the userLogin fixture
    cy.fixture('userLogin').then((user) => {
      cy.login(user.email, user.password);
    });
  });

    it('should go from login, adding womens and mens items to cart and checkout', () => {
      cy.visit('/customer/account/')
      // Add women products to cart
      cy.womenAddtoCart();
  
      // Add men products to cart
      cy.menAddtoCart();
    
      // Proceed to checkout
      cy.checkout();

    
      // Assertions for checkout
      //cy.url().should('include', '/checkout/success');
      //cy.contains('Thank you for your purchase!');
    });
  });
  
    //cy.get('.message-success success message').should('be.visible');
    //cy.get('.action showcart').should('be.visible');

 

