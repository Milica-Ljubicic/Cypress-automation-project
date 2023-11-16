class WomensProducts {
    get womensProductsPage() {
        return cy.get('#ui-id-4');
    }
    get womenBottoms() {
        return cy.contains('Bottoms');
    }
    get womenShorts() {
        return cy.xpath('//a[@class="product photo product-item-photo"]//img[@alt="Gwen Drawstring Bike Short"]');
    }
    get wShortsSize() {
        return cy.get('#option-label-size-143-item-173');
    }
    get wShortColor() {
        return cy.get('#option-label-color-93-item-52');
    }
    get womenTops() {
        return cy.get('#ui-id-9'); //.click({force: true});
    }
    get womenTank() {
        return cy.xpath('//img[@alt="Antonia Racer Tank"]');
    }
    get wTankSize() {
        return cy.get('#option-label-size-143-item-168');
    }
    get wTankColor() {
        return cy.get('#option-label-color-93-item-49');
    }
    get addToCart() {
        return cy.get('#product-addtocart-button');
    }
}

export default new WomensProducts();