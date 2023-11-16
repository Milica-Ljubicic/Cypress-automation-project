class MensProducts {
    
    get mensProductsPage() {
        return cy.get('#ui-id-5');
    }
    get mensBottoms() {
        return cy.xpath('//div[@class="block filter"]//li[2]//a[1]');
    }
    get mensShort () {
        return cy.xpath('//img[@alt="Apollo Running Short"]');
    }
    get mShortSize () {
        return cy.get('#option-label-size-143-item-178');
    }
    get mShortColor () {
        return cy.get('#option-label-color-93-item-49');
    }
    get mensTops() {
        return cy.xpath('//li[3]//ul[1]//li[1]//a[1]//span[2]');
    }
    get mensTank() {
        return cy.xpath('//img[@alt="Helios Endurance Tank"]');
    }
    get mTankSize() {
        return cy.get('#option-label-size-143-item-169');
    }
    get mTankColor() {
        return cy.get('#option-label-color-93-item-50');
    }
    get addToCart() {
        return cy.get('#product-addtocart-button');
    }
}

export default new MensProducts();