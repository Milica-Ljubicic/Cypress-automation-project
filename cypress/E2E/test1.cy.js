describe('Visit site', () => {
    it('should visit the website', () => {
      cy.visit('https://magento.softwaretestingboard.com/');
  
      cy.get('h1').should('contain', 'Magento Commerce');
    });
  });
  