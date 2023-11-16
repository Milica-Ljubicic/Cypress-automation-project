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
        return cy.get('[name="country_id"]'); //dropdown
    }
    get phoneNumber() {
        return cy.get('input[name="telephone"]');
    }
    get shippingMethod() {
        return cy.get('[type="radio"]')
    }
    get nextButton() {
        return ['data-role="opc-continue"']
    }
}

export default new Checkout();