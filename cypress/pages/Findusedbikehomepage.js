export class FindUsedBikeHomePage{
    clickOnSearch(){
        cy.get('#used-bikes-search-btn').click();
    }
}