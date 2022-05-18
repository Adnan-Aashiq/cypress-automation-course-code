export class UsedAutoPartsSearch{
    city_Locator ='li[title="Accessories for Sale in Karachi, Pakistan"] > .filter-check';
    priceFrom = '4000'
    priceTo = '300000'
    category_Locator = 'Category'
    clickOnSearch(){
        cy.get('#ad-listings-search-btn').click();
    }
    clickOnCategory(Category){
        cy.get('.search-loader-fixed > img').should('not.be.visible');
        cy.contains(Category).get('#tree').contains('Car Care').click();
    }
    withPictures(){
        cy.get('.search-loader-fixed > img').should('not.be.visible');
        cy.get('.filter-check > a').contains('With Pictures').click();
    }
}