class Checkout {

    get company() {
        return cy.get('input[name="company"]');
    }
    get streetAddress() {
        return cy.get('input[name="street[0]"]');
    }
    get city() {
        return cy.get('input[name="city"]');
    }
    get state() {
        return cy.get('input[name="region"]');
    }
    get zipCode() {
        return cy.get('input[name="postcode"]');
    }
    get country() {
        return cy.get('select[name="region_id"]'); //dropdown
    }
    get phoneNumber() {
        return cy.get('input[name="telephone"]');
    }
    get shippingMethod() {
        return cy.get(':nth-child(1) > :nth-child(1) > .radio');
    }
    get nextButton() {
        return ('[data-role="opc-continue"]');
    }
    get placeOrder() {
        return ('.payment-method-content > :nth-child(4) > div.primary > .action > span');
    }
    get successMessage() {
        return cy.get('.page-title-wrapper');
    }
    get continueShoppingButton() {
        return cy.get('.actions-toolbar');
    }
}

export default new Checkout();