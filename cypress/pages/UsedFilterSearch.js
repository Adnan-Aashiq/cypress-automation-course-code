export class UsedFilterSearch{

    clickOnMake(Make){
        cy.get('.search-loader-fixed > img').should('not.be.visible');
        cy.get(Make).click();

    }
    
    clickOnModel(Model){
        cy.get('.search-loader-fixed > img').should('not.be.visible');
        cy.get(Model).click();
    }
    clickOnVersion(Version){
        cy.get('.search-loader-fixed > img').should('not.be.visible');
        cy.get(Version).click();
    }
    clickOnCity(City){
        cy.get('.search-loader-fixed > img').should('not.be.visible');
        cy.get(City).click();
    }
    priceRangeSearch(priceFrom,priceTo){
        cy.get('.search-loader-fixed > img').should('not.be.visible');
        cy.get('#pr_from').type(priceFrom);
        cy.get('#pr_to').type(priceTo);
        cy.get('#pr-go').click();
    }
    clickOnColor(Color){
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.contains('Color').click()
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.contains(Color).click()
    }
    
    yearSearch(yearFrom,yearTo){
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('#yr_from').type(yearFrom);
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('#yr_to').type(yearTo);
        cy.get('#yr-go').click()
    }
    mileageSearch(mileageFrom,mileageTo){
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('#ml_from').type(mileageFrom)
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.get('#ml_to').type(mileageTo)
        cy.get('#ml-go').click()
    }
    clickOnRegisteredIn(registerCity){
        cy.get('.search-loader-fixed > img').should('not.be.visible')
        cy.contains("Registered In").get(".filter-check > a").contains(registerCity).click();
    }
    clearFilters(){
        cy.get('.clear-filters').should('have.text', "Clear All")
    
    }
    


    











}